/*
 * Reducer actions related with navigation
 */
import NavigationService from '../navigation/NavigationService';

export function navigateToHome(params: any) {
  NavigationService.navigate('Home', params);
}
