import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Dimensions } from 'react-native';

interface Props {
  message: string
}
interface State { }

class StatusModal extends React.Component<Props, State> {
  public static defaultProps: Props = {
    message: 'Loading...'
  }

  render() {
    const {message} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <ActivityIndicator
            style={[styles.centering, {height: 80}]}
            size="large"
          />
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    top: 0,
    position: 'absolute',
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 200,
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    borderRadius: 20
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    color: '#ddd',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default StatusModal;