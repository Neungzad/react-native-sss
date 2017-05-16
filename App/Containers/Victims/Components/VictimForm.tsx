import React, { Component } from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/VictimFormStyles'
import t from 'tcomb-form-native'
import { Actions } from 'react-native-router-flux'
import { addVictim } from '../actions'
import { Victim, ImageType, AppState } from '../../../types'
import ImagePicker from 'react-native-image-picker'

const imgPickerOptions = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'}
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

const Form = t.form.Form

// here we are: define your domain model
const victim = t.struct({
  name: t.String,
  nickname: t.String,
  reward: t.Number
})

const options = {}

interface Props {
  addVictim: (victimForm: Victim, image: ImageType) => void
  isFetching: boolean
}

interface State {
  img?: ImageType
}

class VictimForm extends Component<Props, State> {
  public refs: { victimForm: any }

  constructor() {
    super()

    this.state = {
      img: undefined
    }

    this.onPress = this.onPress.bind(this)
    this.onUpload = this.onUpload.bind(this)
  }

  componentDidMount() {
    Actions.refresh({
      rightTitle: 'Save',
      onRight: this.onPress
    })
  }

  componentDidUpdate(prevProps: Props) {
    if (!prevProps.isFetching && this.props.isFetching) {
      Actions.statusModal()
    }

    if (prevProps.isFetching && !this.props.isFetching) {
      Actions.pop()
    }
  }

  onPress() {
    const value = this.refs.victimForm.getValue()

    if (value && this.state.img) {
      this.props.addVictim(value, this.state.img)
    }
  }

  onUpload() {
    ImagePicker.showImagePicker(imgPickerOptions, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }  else {
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data }

        this.setState({
          img: response
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container} >
        { this.state.img &&
          <Image source={{uri: this.state.img.uri }} style={{width: 100, height: 100}} />
        }
        <TouchableHighlight onPress={this.onUpload}><Text>Upload</Text></TouchableHighlight>
        <Form
          ref="victimForm"
          type={victim}
          options={options}
        />
      </View>
    )
  }
}

const mapStateToProps = (state: AppState) => {
  return {
    isFetching: state.victims.isFetching
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addVictim: (victimForm: Victim, image: ImageType) => dispatch(addVictim(victimForm, image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VictimForm)