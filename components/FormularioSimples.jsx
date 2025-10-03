const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');


export default function FormularioSimples(){
    return (
    <View>
        <TextInput 
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome: "
        keyboardType="default" 
        />    
        <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email: "
        keyboardType="email-address" 
        />
        <TextInput 
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha: "
        secureTextEntry={true}
        />
    </View>
    );
}