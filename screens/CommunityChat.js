import { GiftedChat } from 'react-native-gifted-chat';
import React, {useState,useEffect,useLayoutEffect,useCallback} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {collection,addDoc,orderBy,query,onSnapshot} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import AuthenticationWrapper from '../components/AuthenticationWrapper';

const CommunityChat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 10
                    }}
                    onPress={onSignOut}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);

    useEffect(() => {
        const collectionRef = collection(db, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            setMessages(
                querySnapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
        });

        return () => unsubscribe();
    }, []);


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(db, 'chats'), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    // // Example function to handle sending messages
    // const onSend = (newMessages = []) => {
    //     setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    // };

    // return (
    //     <GiftedChat
    //       messages={messages}
    //       showAvatarForEveryMessage={true}
    //       onSend={messages => onSend(messages)}
    //       user={{
    //         _id: auth?.currentUser?.email,
    //         avatar: 'https://i.pravatar.cc/300'
    //       }}
    //     />
    //   );

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
                name: 'John Doe',
                avatar: 'https://i.pravatar.cc/260',
            }}
        />
    );
}
export default AuthenticationWrapper(CommunityChat);