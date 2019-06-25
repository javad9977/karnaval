import React,{Component}from 'react';

class Header extends Component{
    render(){
        return (
            <div>
            <div className="topmenu">
              <div className="part_right">
                <img src="images/logo-white2.png"/>
                <button type="button" name="button">کجا میخوای بری؟ <i className="fa fa-angle-down"></i> </button>
                </div>
              <div className="part_left">
                <input type="text"placeholder="جستجو در کارناوال"/>
                <div className="ficon">
                  <i className="fa fa-user"></i>
                  کاربران
                </div>
                <div className="ficon">
                  <i className="fa fa-image"></i>
                  عکاسخانه
                </div>
              </div>
              <div className="clear">
              </div>
            </div>
            </div>
        )
    }
}
export default Header; 