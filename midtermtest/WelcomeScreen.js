import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  const handleGetStarted = () => {
    // Navigate to PhoneNumberScreen
    navigation.navigate('PhoneNumberScreen');
  };

  return (
    <ImageBackground
      source={require('./assets/anhdz3.jpg')} // Thay đổi đường dẫn đến ảnh của bạn
      style={styles.container}
      resizeMode="cover" // Sử dụng 'cover' để hình ảnh tràn đầy màn hình
    >
      <View style={styles.overlay}>
        {/* Thay thế icon bằng hình ảnh */}
        <Image
          source={require('./assets/Group.png')} // Đường dẫn đến hình ảnh của bạn
          style={styles.icon}
          resizeMode="contain" // Đặt chế độ điều chỉnh kích thước cho hình ảnh
        />
        
        {/* Nhóm các dòng chữ */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
        </View>

        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  overlay: {
    flex: 1, // Chiếm toàn bộ không gian để có thể điều chỉnh vị trí
    justifyContent: 'flex-end', // Đặt nội dung ở dưới cùng
    alignItems: 'center',
    paddingBottom: 40, // Thêm khoảng cách từ dưới lên
  },
  textContainer: {
    alignItems: 'center', // Giúp căn giữa các dòng chữ
    marginBottom: 10, // Khoảng cách giữa các dòng chữ và hình ảnh
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5, // Khoảng cách giữa hai dòng tiêu đề
    maxWidth: '90%', // Giới hạn chiều rộng tối đa của tiêu đề
  },
  subtitle: {
    fontSize: 20, // Kích thước chữ có thể điều chỉnh nếu cần
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20, // Khoảng cách giữa subtitle và nút
    width: '100%', // Đảm bảo subtitle có chiều rộng 100%
    lineHeight: 24, // Đặt chiều cao dòng để điều chỉnh khoảng cách
    opacity: 0.7, // Làm cho chữ mờ đi
  },
  button: {
    backgroundColor: '#28A745', // Màu xanh lá cây
    paddingVertical: 23,
    paddingHorizontal: 100,
    borderRadius: 20,
    elevation: 2,
    width: '90%', // Đặt chiều rộng của nút thành 90%
    alignItems: 'center', // Đảm bảo văn bản nằm ở giữa nút
    marginBottom: 20, // Khoảng cách giữa nút và đáy màn hình
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 50, // Đặt chiều rộng cho hình ảnh
    height: 50, // Đặt chiều cao cho hình ảnh
    marginBottom: 10, // Thêm khoảng cách giữa hình ảnh và tiêu đề
  },
});

export default WelcomeScreen;
