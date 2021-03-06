import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard120187410Navigator from '../features/Dashboard120187410/navigator';
import ArticleList187393Navigator from '../features/ArticleList187393/navigator';
import ArticleList187392Navigator from '../features/ArticleList187392/navigator';
import ArticleList187391Navigator from '../features/ArticleList187391/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard120187410: { screen: Dashboard120187410Navigator },
ArticleList187393: { screen: ArticleList187393Navigator },
ArticleList187392: { screen: ArticleList187392Navigator },
ArticleList187391: { screen: ArticleList187391Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
