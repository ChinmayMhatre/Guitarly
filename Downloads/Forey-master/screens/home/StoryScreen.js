import React from 'react';
import {
  View, Text, StyleSheet, Image,
  TouchableOpacity, TextInput, Button, Modal, Pressable
} from 'react-native';
import { Center, Fab, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Audio } from 'expo-av';
import firebase from 'firebase';
require('firebase/firestore')
require('firebase/firebase-storage')


export default function StoryScreen(props, { navigation }) {

  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [caption, setCaption] = React.useState('')
  const [modalVisible, setModalVisible] = React.useState(false);
  const [sound, setSound] = React.useState();
  const [posts, setPosts] = React.useState();
  const [username, setUsername] = React.useState();
  const [currentAudio, setCurrentAudio] = React.useState();

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (

        <View key={index} style={styles.column}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <TextInput
            placeholder='Write a Title . . .'
            style={styles.fill}
            onChangeText={(caption) => setCaption(caption)}
          />
          <View style={styles.row}>
            <Button style={styles.button} title='Post' onPress={() => uploadImage()} />
            <Button style={styles.button} onPress={() => recordingLine.sound.replayAsync()} title="Play"></Button>
          </View>
          <View style={styles.row}>
            <Button style={styles.button} onPress={() => deleteRecording()} title="Discard"></Button>
            <Button style={styles.button} onPress={() => setModalVisible(!modalVisible)} title="Close"></Button>
          </View>
        </View>
      );
    });
  }

  function deleteRecording() {
    setRecordings([])
  }

  async function getUserList() {
    return (
      firebase.firestore()
        .collection("posts")
        .orderBy('creation', 'asc')
        .get()
        .then((snapshot) => {
          let response = snapshot.docs.map(doc => {
            const data = doc.data();
            const id = doc.id;
            return { id, ...data }
          })
          setPosts(response)
        })
    )
  }

  async function playAudio(mediaDownloadUrl,postid) {
    const currentindex = posts.findIndex(x => x.id == postid)
    setCurrentAudio(currentindex)
    
    if (typeof mediaDownloadUrl !== 'string') return null;

    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: mediaDownloadUrl }
      );

      setSound(sound);

      // await sound.playAsync();
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.playAsync();
        }
      }
    } catch (e) {
      console.warn(e);
    }

  }

  async function stopAudio() {
    setCurrentAudio()
    try {
      const result = await sound.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          sound.pauseAsync();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const uploadImage = async () => {

    recordings.map(async (recordingLine, index) => {
      const uri = recordingLine.file;
      const childPath = `post/${firebase.auth().currentUser.uid}/${Math.random().toString(36)}`

      const response = await fetch(uri);
      const blob = await response.blob();

      const task = firebase
        .storage()
        .ref()
        .child(childPath)
        .put(blob);
      const taskProgress = snapshot => {
        console.log(`transferred: ${snapshot.bytesTransferred}`)
      }
      const taskCompleted = () => {
        task.snapshot.ref.getDownloadURL().then((snapshot) => {
          getName(snapshot)
          console.log('completed')
        })
      }
      const taskError = snapshot => {
        console.log(snapshot)
      }
      task.on('state_changed', taskProgress, taskError, taskCompleted)
    });

  }

  const getName = async(downloadURL) => {
    setModalVisible(!modalVisible)
    const snapshot = await firebase.firestore()
      .collection('users')
      .get()
    const tempdoc = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    
      tempdoc.map(async(temp)=> {
        const user = firebase.auth().currentUser.uid
        if(temp.id == user){
          setUsername(temp.name)
          savePostData(downloadURL, temp.name)
        }
      })
  }

  const savePostData = async(downloadURL, name) => {
    if(name){
      firebase.firestore()
        .collection('posts')
        .add({
          downloadURL,
          caption,
          uid: firebase.auth().currentUser.uid,
          name: name,
          creation: firebase.firestore.FieldValue.serverTimestamp()
        }).then((function () {
          props.navigation.navigate('Story')
        }))
        setRecordings([])
        getUserList()
      }
      else{
        console.log("username not found")
      }
  }
  
  const deleteAudio = (uri, id) => {
    let imageRef = firebase.storage().refFromURL(uri)
    imageRef.delete().then(() => {
        console.log("Deleted")
      }).catch(err => console.log(err))
  
    firebase.firestore()
            .collection("posts")
            .doc(id)
            .delete()
    getUserList()
  }

  React.useEffect(() => {
    getUserList()
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);
  return (
    <View style={styles.container}>
    <View style={styles.row}>
    <View>
      {posts ?
        posts.map((post,index) => {
          const uri = post.downloadURL
          const caption = post.caption
          const name = post.name
          const uid = post.uid
          const id = post.id
          return (
            <View key={index} style={styles.row}>
              <Text>{name} {index}</Text>
              <Text> {caption} </Text>
              <Button
                style={styles.button}
                title={currentAudio !== index ? 'Play' : 'Stop'}
                onPress={currentAudio !== index ? () => playAudio(uri, id) : () => stopAudio()}
              />
              {uid == firebase.auth().currentUser.uid ? (
                <Button style={styles.button} onPress={() => deleteAudio(uri, id)} title="Delete"></Button>
              ):(
                null
              )}
            </View>
          )
        })
        : null}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          {recordings[0] ? getRecordingLines() :
            <View>
              <Button style={styles.button}
                title={recording ? 'Stop Recording' : 'Start Recording'}
                onPress={recording ? stopRecording : startRecording} />
              <Button style={[styles.button, styles.fill]} onPress={() => setModalVisible(!modalVisible)} title="Close"></Button>
            </View>
          }
          <StatusBar style="auto" />
        </View>
      </Modal>
      
    </View>
    <Fab
        placement="bottom-right"
        colorScheme="blue"
        size="lg"
        icon={<Icon as={Ionicons} name="add" />}
        renderInPortal={false}
        onPress={() => setModalVisible(true)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  fill: {
    margin: 10,
  },
  button: {
    flex: 1,
    alignContent: 'center',
    marginBottom: 50,
  },
  modalView: {
    marginTop: 100,
    marginHorizontal: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

});
