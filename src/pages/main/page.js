import {connect} from 'dva';
import styles from './page.less';
import Link from 'umi/link';

function App(props) {
  return (
    <div className={styles.normal}>
      <br/>
      <Link to="/login/page">登录</Link>
      <br/>
      <Link to="/member/page"><h1>会员</h1></Link>
      <br/>
      <Link to="/wallet/page"><h1>钱包</h1></Link>
    </div>
  );
}

export default connect(state => {
  return {
    pageData: state.main
  };
})(App);