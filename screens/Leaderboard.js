// LeaderboardScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LeaderboardScreen() {
  const navigation = useNavigation();

  const [leaderboardData, setLeaderboardData] = useState([
    { id: '1', name: 'Jordan Smith', points: 1200 },
    { id: '2', name: 'Emily Johnson', points: 1100 },
    { id: '3', name: 'Chris Doe', points: 1050 },
    { id: '4', name: 'Sarah Lee', points: 1000 },
    { id: '5', name: 'David Kim', points: 980 },
    { id: '6', name: 'Sophia Chen', points: 970 },
    { id: '7', name: 'James Brown', points: 960 },
    { id: '8', name: 'Liam Wilson', points: 940 },
    { id: '9', name: 'Olivia Davis', points: 930 },
    { id: '10', name: 'Noah Martinez', points: 900 },
  ]);

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.rank}>#{index + 1}</Text>
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.points}>{item.points} pts</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#0A1128" />
        </TouchableOpacity>
        <Text style={styles.title}>Leaderboard</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Leaderboard List */}
      <FlatList
        data={leaderboardData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0A1128',
  },
  listContent: {
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  rank: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1EA364',
    width: 40,
    textAlign: 'center',
  },
  playerInfo: {
    flex: 1,
    marginLeft: 10,
  },
  playerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0A1128',
  },
  points: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
