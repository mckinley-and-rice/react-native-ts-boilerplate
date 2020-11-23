import * as React from 'react';

// NavigationConatiner is refered here - Check NavigationStack
export const navigationRef = React.createRef();

function navigate(name: any, params: any) {
  //@ts-ignore
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  //@ts-ignore
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack,
};
