import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import WebView from 'react-native-webview'
import Home from './src/Home'

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
  }, [])

  return (
    <Home />
  )
}

export default App

const styles = StyleSheet.create({})