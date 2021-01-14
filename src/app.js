import React, { useEffect, useState } from 'react';
import {Button, Col, Row, Input} from 'antd';
const { Search } = Input;
import './app.css';
import { getData } from "./api";

import Item from "./components/Item/Item";
import About from "./components/About/About"

export default function App() {

      const [data, setData] = useState([]);
      const [showSelected, setShowSelected] = useState(false);
      const [onSearch, setOnSearch] = useState('')

      useEffect(() => {
            getData().then(setData);
      }, []);

      const arrItemsFilter = arr => {
            const arrItems = [];
            arr.map( el => {
              arrItems.push(el.territory)
            })
            const arrSort = onSearch.length > 1?
                searchStringInArray(onSearch, Array.from(new Set(arrItems)))
                :  Array.from(new Set(arrItems));
            return arrSort;
      }

    const searchStringInArray = (str, strArray) => {
        const arr =[];
        for ( let i=0; i<strArray.length; i++ ) {
            if ( strArray[i].toLowerCase().match(str.toLowerCase()) ) {
                arr.push(strArray[i])
            };
        }
        return arr;
    }

          if (!showSelected) {
              return (
                  <Row style={{marginTop: '20px'}}>
                      <Col span={10} offset={7}>
                          <Search
                              placeholder="введите ваш город"
                              allowClear
                              enterButton="Поиск"
                              size="large"
                              onSearch={ value => setOnSearch(value) }
                          />
                      </Col>
                      {
                          arrItemsFilter(data).map( (el ,i) => {
                              return (
                                  <Item
                                      key={i}
                                      data={data.filter(library => library.territory === el)}
                                      showHooks={setShowSelected}
                                  />
                              );
                          })
                      }
                  </Row>
              );
          } else {
              return (
                  <Row>
                      {
                          showSelected.map( (el, i) => {
                              return (
                                  <About
                                      key={i}
                                      data={data.filter(library => library.order === el)}
                                      showHooks={setShowSelected}
                                  />
                              );
                          })
                      }
                      <Col span={10} offset={7}>
                          <Button type="primary" style={{marginTop: '20px'}} onClick={ () => setShowSelected(false)}>
                              Вернуться к списку
                          </Button>
                      </Col>
                  </Row>
              )
          }
}
