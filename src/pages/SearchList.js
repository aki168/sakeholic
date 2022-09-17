import { InputGroup, Form, Button } from 'react-bootstrap'
import SakeTable from '../components/SakeTable';
import * as Icon from 'react-bootstrap-icons';
import Title from '../components/Title'

const SearchList = () => {

  return (
    <div className='container px-3 px-md-5 pb-3 my-2'>
      <Title cn="酒品總覽 " jp="日本酒を探す"/>
      <InputGroup size="lg" className='py-3 border-primary'>
        <Form.Control
          className='border-primary'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='輸入酒藏或酒款關鍵字'
        />
        <Button variant="outline-primary" id="button-addon1" className='d-flex align-items-center'>
          搜尋
          <Icon.ArrowRightShort size={24} />
        </Button>
      </InputGroup>
      <SakeTable />
    </div>

  )
}

export default SearchList