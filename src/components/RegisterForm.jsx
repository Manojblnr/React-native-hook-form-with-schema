import React, { useCallback, useState, useEffect } from "react";
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import DocumentPicker from 'react-native-document-picker';
// import { FileSystem } from 'react-native-file-access'
// import RNFS from 'react-native-fs';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from "./CustomTextInput";




const RegisterForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setLoading] = useState(false)

  const [uploadedFileName, setUploadedFileName] = useState(null);

  const [isFocused, setIsFocused] = useState(false)
  



  const handleFilePick = async () => {
    console.log('calling')
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]
      });
      setLoading(true)
      setTimeout(() => {
        console.log('time')
        setLoading(false)
        setSelectedFile(res)
      }, 5000)
      console.log('rs', res)
      handleUpload(res)
    } catch(err) {
      if(DocumentPicker.isCancel(err)) {
        console.log('File selection cancelled');
      } else {
        console.log('Error selecting files', err);
      }
    }
  };


  const handleUpload = async (dataPart) => {
    console.log('datas', dataPart)

    obj = dataPart[0];
    console.log('obj', obj)

    try{
      if(obj.name && obj.uri){
        await AsyncStorage.setItem('selectedFileURI', obj.uri)
        setUploadedFileName(obj.name.slice(0,8))
      }else {
        console.log('No file selected');
      }
    }catch (error) {
      console.error('Error saving file:', error);
    }
  };

  const handleDelete = async () =>  {
    try {
      await AsyncStorage.removeItem('selectedFileURI');
      console.log('file deleted successfully');
      setSelectedFile(null);
      setUploadedFileName(null);
    } catch (error) {
      console.log('file delete error', error)
    }
  }

  
  return (
    <>
        <View style={styles.form}>
            <View style={styles.formCard}>
              <View style={styles.inputView}>
                <CustomTextInput title={"Outlet Type"} placeholder={"search"}/>
                <CustomTextInput title={"Cp Outlet UID"} placeholder="{Value}"/>
              </View>
              <View style={styles.inputView}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Route</Text>
                  <TextInput style={styles.lenInput} placeholder="Search"/>
                </View>
              </View>
              <View style={styles.inputView}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>Retailer Name</Text>
                  <TextInput style={styles.lenInput} placeholder="Enter"/>
                </View>
              </View>
              <View style={styles.inputView}>
                <CustomTextInput title={"Pin code"} placeholder={"search"}/>
                <CustomTextInput title={"State"} placeholder="{Value}"/>
              </View>
              <View style={styles.inputView}>
              <CustomTextInput title={"District"} placeholder="{Value}"/>
                <CustomTextInput title={"City"} placeholder="{Value}"/>
              </View>
              <View style={styles.inputView}>
              <CustomTextInput title={"Locality"} placeholder={"Enter"}/>
                <CustomTextInput title={"Owner Name"} placeholder={"Enter"}/>
              </View>
              <View style={styles.inputView}>
                <CustomTextInput title={"Owner Mobile"} placeholder={"Enter"}/>
                <CustomTextInput title={"Adhaar Number"} placeholder={"Enter"}/>
              </View>
              <View style={styles.inputView}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>GST</Text>
                  <TextInput style={styles.input} placeholder="Enter"/>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.label}>PAN</Text>
                  <TextInput style={styles.input} placeholder="Enter"/>
                </View>
              </View>
              <View style={styles.outletImageView}>
                <View style={styles.fileHeader}>
                  <View style={styles.outletImageHeaderLeft}>
                    <Icon2 name={"filetext1"} size= {20} color={"#1679AB"}/>
                    <Text style={styles.OutletLabel}>Outlet Image</Text>
                  </View>
                  <View style={styles.outletImageHeaderRight}>
                    <Icon3 name={"cloud-upload"} size={18} color={"#41B06E"}/>
                  </View>
                </View>
                <View style={styles.fileView}>
                  <View style={styles.fileViewOne}>
                    <View style={styles.uploadFilNameView}>
                      <View style={styles.uploadFilNameIconCircleView}>
                        <View style={styles.filePhotoIconView}>
                          <Icon4 name={"file-photo-o"} size= {10} color={"#fff"}/>
                        </View>
                      </View>
                      <Text style={styles.uploadFilName}>{ uploadedFileName || 'upload a file'}</Text>
                    </View>
                    {/* <View style={styles.uploadIconView}> */}
                      <TouchableOpacity onPress={selectedFile ? handleDelete : handleFilePick} style={styles.uploadIcon}>
                        {
                          isLoading ? (
                              <ActivityIndicator/>
                          ) : selectedFile ?(
                            <Icon2 name={"delete"} size= {18} color={"#FF204E"}onPress={handleDelete}/>
                          ) : (
                            <Icon name={"upload"} size= {18} color={"#FF204E"}/>
                          )
                        }
                      </TouchableOpacity>
                    {/* </View> */}
                  </View>
                  <View style={styles.fileViewOne}>
                      <Text style={styles.uploadFilName}>Second</Text>
                      <TouchableOpacity>
                      <Icon2 name={"delete"} size= {18} color={"#FF204E"}/>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.mapInputView}>
                <View style={styles.googleMapIconView}>
                  <Image
                    source={require('../assets/google-map-logo.png')}
                    style={styles.googleMapIcon}
                  />
                  <Text style={styles.mapInputViewText}> + Location</Text>
                </View>
              </View>
              <View style={styles.outletImageView}>
                <View style={styles.fileHeader}>
                  <View style={styles.outletImageHeaderLeft}>
                    <Icon2 name={"filetext1"} size= {20} color={"#1679AB"}/>
                    <Text style={styles.OutletLabel}>ID Proof</Text>
                  </View>
                  <View style={styles.outletImageHeaderRight}>
                    <Icon3 name={"cloud-upload"} size={18} color={"#41B06E"}/>
                  </View>
                </View>
                <View style={styles.fileView}>
                  <View style={styles.fileViewOne}>
                    <View style={styles.uploadFilNameView}>
                      <View style={styles.uploadFilNameIconCircleView}>
                        <View style={styles.filePhotoIconView}>
                          <Icon4 name={"file-photo-o"} size= {10} color={"#fff"}/>
                        </View>
                      </View>
                      <Text style={styles.uploadFilName}>{ uploadedFileName || 'upload a file'}</Text>
                    </View>
                    {/* <View style={styles.uploadIconView}> */}
                      <TouchableOpacity onPress={selectedFile ? handleDelete : handleFilePick} style={styles.uploadIcon}>
                        {
                          isLoading ? (
                              <ActivityIndicator/>
                          ) : selectedFile ?(
                            <Icon2 name={"delete"} size= {18} color={"#FF204E"}onPress={handleDelete}/>
                          ) : (
                            <Icon name={"upload"} size= {18} color={"#FF204E"}/>
                          )
                        }
                      </TouchableOpacity>
                    {/* </View> */}
                  </View>
                  <View style={styles.fileViewOne}>
                      <Text style={styles.uploadFilName}>Second</Text>
                      <TouchableOpacity>
                      <Icon2 name={"delete"} size= {18} color={"#FF204E"}/>
                      </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.remarksView}>
              <TextInput style={styles.remarksInput} multiline={true} numberOfLines={5} placeholder="Remarks (Optional)"/>
              </View>
            </View>
            <View style={styles.submitCardView}>
              {/* <View style={styles.btnView}> */}
                <TouchableOpacity style={styles.cancelBtn}>
                  <Text style={styles.cancelBtnTxt}>Cancel</Text>
                </TouchableOpacity>
              {/* </View> */}
              {/* <View style={styles.btnView}> */}
              <TouchableOpacity style={styles.saveBtn}>
                  <Text style={styles.saveBtnTxt}>Save</Text>
                </TouchableOpacity>
              {/* </View> */}
            </View>
        </View>
    </>
  )
};

export default RegisterForm;
