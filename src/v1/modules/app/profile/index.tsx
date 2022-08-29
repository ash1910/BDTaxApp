import {Button, VStack, Box} from 'native-base';
import {TouchableOpacity, Image, Alert} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {APP_NAVIGATION} from '../../../typings/navigation';
import { doLogout } from "../../../functions/auth";
import { AuthContext } from "../../../providers/AuthProvider";
import {icons} from '../../../assets/icons';
import {width, height} from '../../../utils/validator';

const ProfileScreen = (props) => {
  let auth = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <VStack flex={1} space={2}>
        <Box>
          <Image
            source={icons.page3_bg_top}
            style={{width: width, height: 230, resizeMode: 'cover'}}
          />
          <Image
            source={icons.bdtax_logo}
            style={{width: '80%', height: 100, resizeMode: 'contain'}}
            position={'absolute'}
            bottom={20}
            left={'10%'}
          />
          <Box position={'absolute'} top={5} left={5} safeAreaTop>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icons.leftArrow} />
            </TouchableOpacity>
          </Box>
        </Box>
      <VStack p={4} mt={4} space={2}>
        <Button
          onPress={() => props.navigation.navigate(APP_NAVIGATION.ACKNOWLEDGEMENT)}>
          {auth?.CurrentUser?.tax_year ? `Acknowledgement Slip (${auth?.CurrentUser?.tax_year})` : "Acknowledgement Slip"}
        </Button>
        <Button
          onPress={() => props.navigation.navigate(APP_NAVIGATION.ORDERSTATUS)}>
          {auth?.CurrentUser?.tax_year ? `Order Status (${auth?.CurrentUser?.tax_year})` : "Order Status"}
        </Button>
        <Button onPress={() => {
          let ret = doLogout(auth, props);
          if(ret) Alert.alert("","Logout successfully.");
        }   }>Logout</Button>
      </VStack>
    </VStack>
  );
};

export default ProfileScreen;
