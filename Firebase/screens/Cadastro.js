import { useState } from "react";
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, TurboModuleRegistry } from "react-native";
import { Cadastrar } from "../services/authServices";

export default function App({navigation}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function realizarCadastro() {
        if(!email || !senha){
            alert('Preencha todos os campos.')
            return;
        }

        setCarregando(true);
        try{
            await Cadastrar(email, senha);
            alert('O usuário foi cadastrado com sucesso')
            navigation.navigate('Home');
        }
        catch(error){
            alert('Não foi possível realizar o cadastro');
            console.log(error);
        }
        finally{
            setCarregando(false);
        }
        
    }


return (
    <View style={styles.container}>
        <View style={styles.cadBox}>
            <Text style={styles.titulo}>Cadastro</Text>
            
            <View style={styles. InputBox}>
                <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                />
                <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.btnLogin} onPress={realizarCadastro} disabled={carregando}>
            {carregando ? (
            <ActivityIndicator color="#fff" />
            ): (
                <Text style={styles.btnLoginText}>Cadastrar</Text>
            )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.footer}>Já possui uma conta? <Text style={styles.spnFooter}>Faça Login</Text></Text>
            </TouchableOpacity>
        </View>
    </View>
);
}
const styles = StyleSheet.create({ container: {
flex: 1,
backgroundColor: '#000', 
alignItems: 'center', 
justifyContent: 'center', 
paddingHorizontal: 20,
},

cadBox: {
    width: '100%',
    maxWidth: 360, 
    backgroundColor: '#ffffff', 
    padding: 24,
    borderRadius: 16, 
    alignItems: 'center', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
},

titulo: { fontSize: 20,
fontWeight: '600',
color: '#222',
},

inputBox: { width: '100%',
marginTop: 24,
marginBottom: 8,
},

input: {
width: '100%',
borderWidth: 1, borderColor: '#ddd', borderRadius: 10,
paddingVertical: 12,
paddingHorizontal: 14,
marginBottom: 14,
fontSize: 15,
 
backgroundColor: '#fafafa',
},

btnLogin: { 
    width: '100%',
    paddingVertical: 14, 
    backgroundColor: '#d3d3d3', 
    borderRadius: 10, 
    alignItems: 'center', 
    marginTop: 8,
},

btnLoginText: { 
    color: '#fff', 
    fontWeight: '600',
    fontSize: 16,
},

footer: { color: '#888',
fontSize: 14,
marginTop: 20,
},

spnFooter: { color: '#42A4F3',
fontWeight: '600',
},
});