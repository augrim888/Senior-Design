import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import {useState} from 'react'


const getMoviesFromApi = ({user}) => {
    return fetch(`http://localhost:3307/test/?user={$user}`)
      .then((response) => response.json())
      .then((json) => {
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };