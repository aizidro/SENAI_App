import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import aprendizagem from './screen/aprendizagem'
import fic from './screen/fic'
import home from './screen/home'
import tecnico from './screen/tecnico'
import detalhes from './screen/informacoes'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={home}
          options={{title:'',headerTransparent:true}}
        />
        <Stack.Screen
          name="Aprendizagem Industrial"
          component={aprendizagem}
          options={{ title: 'Lista de Aprendizagem Industrial' }} />
        <Stack.Screen
          name="fic"
          component={fic}
          options={{ title: 'Lista de FIC' }} />
        <Stack.Screen
          name="tecnico"
          component={tecnico}
          options={{ title: 'Lista de cursos Tecnicos' }} />

            <Stack.Screen
          name="Detalhes"
          component={detalhes}
          options={{ title: 'Informaçoes do curso' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}