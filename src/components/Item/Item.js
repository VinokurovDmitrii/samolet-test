import React, { useState } from 'react';
import { Col, Divider, Button } from 'antd';
import './Item.css';

const cn = 'item-card';

export default function Item(props) {

  const [showButton, setShowButton] = useState(false);
  const { data, showHooks } = props;

  const orderMap = () => {
      const orderArr = [];
      data.map( (el) => {
          orderArr.push( el.order )
      })
      showHooks(orderArr)
  }

  return (
     <Col span={10} offset={7}>

        <div
          className={cn}
          onMouseEnter={ () => setShowButton(true) }
          onMouseLeave={ () => setShowButton(false) }
        >
            <div className={cn+'__info'}>
              <div>{ data[0].territory }</div>
              <b>{ data.length } шт.</b>
            </div>

            <Divider orientation="left">Адрес: </Divider>

            {
              data.map( (el, i) => { return (
                <div
                  key={i}
                  className={cn+'__addressList'}
                >
                  { el.address }
                </div>
              )
              })
            }

            {
              showButton &&
                  <Button
                      type="primary" style={{marginTop: '20px'}}
                      onClick={ () => orderMap() }
                  >
                    Подробнее
                  </Button>
            }

        </div>

     </Col>
  );
}
