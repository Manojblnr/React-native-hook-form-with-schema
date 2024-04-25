import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm, Controller } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./style";
import { useState } from "react";


const schema = yup.object().shape({
    firstName: yup.string().required('first name is mandatory').min(5),
    lastName : yup.string().required(),
    email : yup.string().email('Not a valid Email').required(),
    age: yup.number().typeError('Age should be a number').integer('Age should be an integer').positive('Age should be a positive number').required('Age is required'),
    password : yup.string().required().min(4, 'minimum 4 character required').max(12, 'maximum character is exceed'),
    confirmPassword : yup.string().oneOf([yup.ref("password"), null], 'password does not match').required(),
})

export default function TestForm() {
  const { control, handleSubmit, formState: { errors, isValid, isDirty, isBlur }} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: ""
    },
    mode:'onChange'
  })

  const onSubmit = (data) => console.log(data)
  console.log('isValid', isValid)


  return (
    <View>
      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style = {!isDirty ? styles.normalInput : (!errors.firstName ? styles.validInput: styles.inValidInput)}
            
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>{errors.firstName.message}</Text>}


      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />
      {errors.lastName && <Text>{errors.lastName.message}</Text>}

      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email" 
      />
      {errors.email && <Text>{errors.email.message}</Text>}


      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Age"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />
      {errors.age && <Text>{errors.age.message}</Text>}

      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && <Text>{errors.password.message}</Text>}


      <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Confirm password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text>{errors.confirmPassword.message}</Text>}

      <Text>Test</Text>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}





// import React, { useState } from "react";
// import { View, Text, TextInput, Button } from "react-native";
// import styles from "./style";
// import { useForm } from "react-hook-form"; 


// let renderCount = 0;

// const TestForm = () => {

//   renderCount++

//   const { register, handleSubmit, formState:{errors}} = useForm();

//   console.log('errors test', errors)
  
//   const onSubmit = (data) => {
//     console.log('on submit is called');
//     console.log('data', data)
//   }
  
//   return (
//     <>
//       <View style={styles.container}>
//             <Text style={styles.renderCount}> render count {renderCount}</Text>
//         <View style={styles.testFormView}>
//               <Text style={styles.title}>Login page</Text>
//           <View style={styles.form}>
//             <View>
//               <TextInput style={styles.placeholder} placeholder="first name" 
//               {...register('fName',{required:true})} ></TextInput>
//               <TextInput style={styles.placeholder} placeholder="last name" 
//               {...register('lName', {required: 'lName is required' })} ></TextInput>
//             </View>
//             <Button title="submit" onPress={handleSubmit(onSubmit)}></Button>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// };

// export default TestForm;





// import React, { useState } from "react";
// import { View, Text, TextInput, Button, KeyboardAvoidingView } from "react-native";
// import styles from "./style";
// import { useForm } from "react-hook-form";
// import * as yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";


// let renderCount = 0;

// const schema = yup.object().shape({
//   firstName: yup.string().required('first name is mandatory'),
//   lastName : yup.string().required(),
//   email : yup.string().email('Not a valid Email').required(),
//   age : yup.number('age must be number').integer().positive().required(),
//   password : yup.string().required().min(4, 'minimum 4 character required').max(12, 'maximum character is exceed'),
//   confirmPassword : yup.string().oneOf([yup.ref("password"), null]).required(),
// })


// const TestForm = () => {

//   renderCount++

//   const { register, handleSubmit, watch, formState:{errors, isValid}} = useForm({
//     resolver: yupResolver(schema),
//     mode:'onChange'
//   });
  

//   console.log('errors test', errors)
//   console.log('valid', isValid)
  
//   const onSubmit = (data) => {
//     console.log('on submit is called');
//     console.log('data', data)
//   }

//   watch('age');
//   return (
//       <KeyboardAvoidingView style={styles.container}>
//             <Text style={styles.renderCount}> render count {renderCount}</Text>
//         <View style={styles.testFormView}>
//               <Text style={styles.title}>Login page</Text>
//             <View>
//               <TextInput style={styles.placeholder} placeholder="first name"
//               {...register('firstName')} ></TextInput>
//               <Text style={styles.errorText}>{errors.firstName?.message}</Text>
//               <TextInput style={styles.placeholder} placeholder="last name" 
//               {...register('lastName')} ></TextInput>
//               <Text style={styles.errorText}>{errors.lastName?.message}</Text>
//               <TextInput style={styles.placeholder} placeholder="email" 
//               {...register('email')} ></TextInput>
//               <Text style={styles.errorText}>{errors.email?.message}</Text>
//               <TextInput style={styles.placeholder} placeholder="age" 
//               {...register('age')} ></TextInput>
//               <Text style={styles.errorText}>{errors.age?.message}</Text>
//               <TextInput style={styles.placeholder} placeholder="password" 
//               {...register('password')} ></TextInput>
//               <Text style={styles.errorText}>{errors.password?.message}</Text>
//               <TextInput style={styles.placeholder} placeholder="confirmPassword" 
//               {...register('confirmPassword')} ></TextInput>
//               <Text style={styles.errorText}>{errors.confirmPassword?.message}</Text>
//             </View>
//             <Button title="submit" onPress={handleSubmit(onSubmit)}></Button>
//           </View>
//       </KeyboardAvoidingView>
//   );
// };

// export default TestForm;












// import React, { useState } from "react";
// import { View, Text, TextInput, Button, KeyboardAvoidingView } from "react-native";
// import styles from "./style";
// import { useForm } from "react-hook-form";
// import * as yup from 'yup';
// import { yupResolver } from "@hookform/resolvers/yup";


// let renderCount = 0;

// const schema = yup.object().shape({
//   firstName: yup.string().required().trim()
// })


// const TestForm = () => {

//   renderCount++

//   const { register, handleSubmit, formState:{errors, isDirty, isValid}} = useForm({
//     resolver: yupResolver(schema),
//     mode:'onBlur',
//     // defaultValues: {
//     //   firstName:''
//     // }
//   });
  

//   console.log('errors test', errors)
//   console.log('isValid', isValid)
//   // console.log('isDirty', isDirty)
  
//   const onSubmit = (data) => {
//     console.log('on submit')
//     console.log('data', data)
//   }
 
//   return (
//       <KeyboardAvoidingView style={styles.container}>
//             <Text style={styles.renderCount}> render count {renderCount}</Text>
//         <View style={styles.testFormView}>
//               <Text style={styles.title}>Login page</Text>
//             <View>
//               <TextInput style={styles.placeholder} placeholder="first name"
//               onChangeText={text => register('firstName', {value: text, required: true})}
//               />
//               <Text style={styles.errorText}>{errors?.firstName?.message}</Text>
//             </View>
//             <Button title="submit" onPress={handleSubmit(onSubmit)}></Button>
//           </View>
//       </KeyboardAvoidingView>
//   );
// };

// export default TestForm;








