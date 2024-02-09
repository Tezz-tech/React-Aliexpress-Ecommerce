import { Link } from "react-router-dom";
function Admin() {
  return (
    <div className="admin">
     <div className="admin-nav">
        <img
          src="https://ae01.alicdn.com/kf/S4fccb8f4b6b2454699e1b4d8a93706f0m/416x128.png"
          alt=""
        />
        <ul>
          <Link className="link" to="/admin"><li>Dashboard</li></Link>
          <Link className="link" to="/admin-users"><li>Users</li></Link>
          <Link className="link" to="/admin-product"><li>Products</li></Link>
          <Link className="link" to="/create-user"><li>New User</li></Link>
          <Link className="link" to="/create-product"><li>New Product</li></Link>
        </ul>
      </div>
      <div className="admin-main">
        <div className="top">
          <h1>Product Details</h1>
          <Link className="link" to="/"><p className="site">Back to website</p></Link>
        </div>
        <div className="second">
          <div className="admin-card">
            <h1>Number Of Users</h1>
            <span>254</span>
          </div>
          <div className="admin-card">
            <h1>Number Of Products</h1>
            <span>1</span>
          </div>
          <div className="admin-card">
            <h1>Number Of Items In Cart</h1>
            <span>0</span>
          </div>
        </div>
        <div className="third">
          <table>
            <tr>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product ID</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
            </tr>
            <tr>
            <td>Tezzer-Greats</td>
            <td>Lovely shoes</td>
            <td>01</td>
            <td>NGN 2000</td>
            <td>10</td>
          </tr>
            <tr>
            <td>Tezzer-Greats</td>
            <td>Lovely shoes</td>
            <td>01</td>
            <td>NGN 2000</td>
            <td>10</td>
          </tr>
            <tr>
            <td>Tezzer-Greats</td>
            <td>Lovely shoes</td>
            <td>01</td>
            <td>NGN 2000</td>
            <td>10</td>
          </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
