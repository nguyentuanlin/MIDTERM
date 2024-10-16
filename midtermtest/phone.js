import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon

const Dangnhap = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = React.useRef(null);

  return (
    <View style={styles.container}>
      {/* Hình ảnh phía trên, xoay ngược và nghiêng */}
      <Image
        source={require('./assets/anhhoaqua.jpeg')} // Đường dẫn đến hình ảnh cụ thể của bạn
        style={styles.image}
      />

      {/* Tiêu đề */}
      <Text style={styles.title}>Get your groceries</Text>
      <Text style={styles.title}>with nectar</Text>

      {/* Input số điện thoại */}
      <View style={styles.phoneInputContainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="VN"
          layout="first"
          onChangeFormattedText={(text) => setPhoneNumber(text)}
          textContainerStyle={styles.textInput}
        />
      </View>

      {/* Đường cắt ngang */}
      <View style={styles.separator} />

      {/* Hoặc đăng nhập bằng mạng xã hội */}
      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Nút Google */}
      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Icon name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút Facebook */}
      <TouchableOpacity style={[styles.button, styles.facebookButton]}>
        <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Thêm khoảng cách giữa các nút và cuối trang */}
      <View style={styles.bottomSpacer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '250%',
    height: '60%', // Tăng chiều cao hình ảnh
    resizeMode: 'cover',
    marginBottom: 20,
    transform: [
      { rotate: '180deg' }, 
      { translateY: 150 }, // Dịch lên trên
      { rotate: '50deg' },
      { translateX: -25 } // Dịch sang trái
    ],
  },
  title: {
    fontSize: 32, // Tăng kích thước chữ
    fontWeight: 'bold',
    textAlign: 'left', // Chỉnh lại căn trái
    width: '90%', // Đảm bảo nó chiếm phần lớn chiều rộng
    marginLeft: 20, // Thêm khoảng cách bên trái nếu cần
  },
  phoneInputContainer: {
    width: '80%',
    marginVertical: 10, // Giảm khoảng cách ở đây để dòng kẻ gần hơn
  },
  textInput: {
    paddingVertical: 10, // Thêm khoảng cách dọc cho text bên trong
    borderWidth: 0, // Bỏ khung viền bên trong
  },
  orText: {
    fontSize: 18, // Tăng kích thước chữ
    color: '#666',
    marginVertical: 10,
  },
  separator: {
    height: 1, // Chiều cao của đường cắt ngang
    width: '80%', // Chiều rộng của đường cắt ngang
    backgroundColor: '#ccc', // Màu sắc của đường cắt ngang
    marginVertical: 10, // Giảm khoảng cách ở đây để dòng kẻ gần hơn
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row', // Để đặt icon bên trái text
    alignItems: 'center', // Căn giữa icon và text theo chiều dọc
  },
  googleButton: {
    backgroundColor: '#4285F4', // Màu nút Google
  },
  facebookButton: {
    backgroundColor: '#3b5998', // Màu nút Facebook
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Tăng kích thước chữ
    marginLeft: 10, // Khoảng cách giữa icon và text
    textAlign: 'center', // Căn giữa chữ
    fontWeight: 'bold', // In đậm chữ
    flex: 1, // Để nút mở rộng và căn giữa
  },
  icon: {
    marginRight: 10, // Khoảng cách giữa icon và text
  },
  bottomSpacer: {
    height: 40, // Khoảng cách giữa các nút và cuối trang
  },
});

export default Dangnhap;
