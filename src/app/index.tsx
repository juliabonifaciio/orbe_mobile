import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>ORBE</Text>
          <Text style={styles.subtitle}>Seu mundo, conectado.</Text>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.greeting}>Olá! 👋</Text>
          <Text style={styles.title}>Bem-vindo ao ORBE</Text>
          <Text style={styles.description}>
            Tudo o que você precisa, em um só lugar.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Seu espaço</Text>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>🌎</Text>
          <Text style={styles.cardTitle}>Meu ORBE</Text>
          <Text style={styles.cardDescription}>
            Explore seu universo.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>✨</Text>
          <Text style={styles.cardTitle}>Novidades</Text>
          <Text style={styles.cardDescription}>
            Descubra novas possibilidades.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardIcon}>👤</Text>
          <Text style={styles.cardTitle}>Meu perfil</Text>
          <Text style={styles.cardDescription}>
            Acesse suas informações.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080D1B',
  },
  content: {
    padding: 24,
    paddingTop: 45,
  },
  header: {
    marginBottom: 55,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '900',
    letterSpacing: 5,
  },
  subtitle: {
    color: '#9CAAC5',
    fontSize: 14,
    marginTop: 5,
  },
  welcome: {
    marginBottom: 40,
  },
  greeting: {
    color: '#A78BFA',
    fontSize: 18,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    color: '#AAB5CA',
    fontSize: 15,
    marginTop: 10,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#151F35',
    borderRadius: 18,
    padding: 22,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#283653',
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 12,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#AAB5CA',
    fontSize: 14,
    marginTop: 6,
  },
});