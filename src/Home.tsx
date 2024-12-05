import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Home = () => {
    return (
        <WebView
            source={{ uri: 'https://erp.rt-group.com.sg/login' }}
            style={{ flex: 1 }}
        />
    )
}

export default Home

const styles = StyleSheet.create({})