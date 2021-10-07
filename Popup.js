import React, { useState } from 'react'
import './nav.css'
import { Transition } from 'react-transition-group';

function Popup(props) {
    const [show, setShow] = useState(false);
    const listItems = [{ year: "2019-2020" }, { year: "2018-2019" }, { year: "2017-2018" }]
    const finalList = listItems.map(() =>
        <ul>
            <li>{listItems.year}</li>
        </ul>
    );

    function refresh() {
        window.location.reload(true);
    }
    const tableData = [{ name: 'Q4', Date: 'MMM-MMM' }, { name: 'Q3', Date: 'MMM-MMM' }, { name: 'Q2', Date: 'MMM-MMM' }, { name: 'Q1', Date: 'MMM-MMM' }];
    const sets = tableData.map((data) =>

        <tr className="line-table">
            <td className="col-5 extra-space"><input type="radio" class="custom-control-input check-style" id="customControlValidation3" name="radio-stacked" />   {data.name}</td>
            <td className="col-2 month-style extra-space">{data.Date}</td>
            <hr />
        </tr>

    );

    return (props.trigger) ? (


        <div className="popup" variant="primary">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.settrigger(false)}>X</button>
                {props.children}
                <h3 className="fw-bold cer">TDS Certificate</h3>
                <hr />
                <div className="row">
                    <div className="col-md-5 sfy">
                        <span className="dwn-head1">Select Financial Year</span>
                        <div class="btn-group dropdown-outer">
                            <button type="button" class="btn btn-white border btn-dwn btn-inner-dwn">Select Year</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                <li><a class="dropdown-item disabled" href="#" >Select Year</a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => setShow(false)}>2019-2020</a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => setShow(false)}>2018-2019</a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => setShow(false)}>2017-2018</a></li>
                                <li><a class="dropdown-item" href="#" onClick={() => setShow(true)}>Request for Older Statements</a></li>
                            </ul>
                        </div>
                    </div>
                    {(show) ? (
                        <div className="col-md-5 mx-4 sfy">

                            <span className="dwn-head2">Select Older Year</span>

                            <div class="btn-group dropdown-outer">
                                <button type="button" class="btn btn-white border btn-dwn btn-inner-dwn">FY-YYYY</button>
                                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                                    <li><a class="dropdown-item disabled" href="#" >Select Year</a></li>
                                    <li><a class="dropdown-item" href="#">2015-2017</a></li>

                                </ul>
                            </div>


                        </div>
                    ) : ""
                    }
                    <div>
                        <table className="tab-inner border tab-shadow">
                            <thead>
                                <tr className="tab-head">

                                    <th className="col-6 line-table">Quarter number</th>
                                    <th className="col-6 line-table">Statement Period</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr className="obj-table">
                                    {sets}
                                </tr>

                            </tbody>


                        </table>
                    </div>
                    <div className="btn-inner">
                        <button className="btn-request" onClick={refresh}>Request</button>
                        <button className="btn-cancel" onClick={() => props.settrigger(false)}>Cancel</button>

                    </div>
                </div>


            </div>
        </div>

    ) : "";
}

export default Popup
