import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '@/components/Themed';
import { useAppSelector } from '@/hooks';
import { selectGlobalState } from '@/redux/reducers/global';

const TabTwoScreen = () => {
  const { name } = useAppSelector(selectGlobalState);

  return (
    <SafeAreaView>
      <Text>Tab Two</Text>
      <Text>Name: {name}</Text>
    </SafeAreaView>
  );
};

export default TabTwoScreen;
