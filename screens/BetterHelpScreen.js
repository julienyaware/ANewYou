import React from 'react';
import { WebView } from 'react-native-webview';

export default function BetterHelpScreen() {
  return (
    <WebView
      source={{ uri: 'https://www.betterhelp.com/get-started/?go=true&utm_content=133524759310&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_b&network=g&placement=&target=&matchtype=b&utm_campaign=15234220559&ad_type=text&adposition=&kwd_id=kwd-299033048821&gad_source=1&gclid=Cj0KCQjwsaqzBhDdARIsAK2gqne8--jMDhVc6ReCP8Kj1-SCk8KMFOvmhjHyTb-GSnKsgtqIiYDtNZkaAkxbEALw_wcB&not_found=1&gor=start' }}
      
    />
  );
}
