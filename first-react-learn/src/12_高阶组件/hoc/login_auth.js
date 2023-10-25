
function loginAuth(OriginComponent){
  return (props) => {
    // 获取 token
    const token = null;
    return token ? <OriginComponent {...props} /> : <h2>先登录</h2>
  }
}

export default loginAuth