import React, { useState } from "react";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { Link } from 'react-router-dom';

// Presentational component (const) dùng để Render danh sách từng nhân viên
const RenderStaffItem = ({ staff }) => {
    return (
        <Link to={`/staff/${staff.id}`}>
            <Card>
                <CardImg width="100%" src={staff.image} alt={staff.name} />
                <CardBody>
                    <CardSubtitle>{staff.name}</CardSubtitle>
                </CardBody>
            </Card>
        </Link>
    )
}

// Presentational component (const) 
const StaffList = (props) => {
    //Sử dụng hook useState hiển thị số cột, tìm kiếm tên nhân viên, sắp xếp mã số nhân viên
    const [column] = useState('col-6 col-md-4 col-lg-2 mt-3 mb-3');
    const [sortId] = useState(false);

    //Dùng hàm sort để sắp xếp,map để kéo toàn bộ mảng ra màn hình
    const staffList = props.staffs.sort((a, b) => sortId ? a.id : b.id)
       .map((val) => {
            return (
                <div className={column} key={val.id}>
                    <RenderStaffItem staff={val} />
                </div>
            );
        });

    //Render giao diện Staff list
    return (
        <div className="container">
            <div className="row">
                <div className="col-3 mt-3">
                    <h3>Nhân viên</h3>
                </div>
                <hr />
            </div>
            <div className="row shadow mb-5 mt-5">
                {staffList}
            </div>
        </div>
    )
}


export default StaffList;