import React from 'react';



class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            slotInfo:this.props.slotInfo,
            form:{
                startHour:this.props.slotInfo.start.getHours(),
                startMin:this.props.slotInfo.start.getMinutes(),
                endHour:this.props.slotInfo.end.getHours(),
                endMin:this.props.slotInfo.end.getMinutes(),
                clientName:''
            }
        }
    }
    onChange =(evt)=>{
        this.setState({form:{...this.state.form,[evt.target.name]:evt.target.value}})
    }
    addEvent = () => {
        var clientName = this.state.form.clientName;
        var startHour = this.state.form.startHour;
        var startMin = this.state.form.startMin;
        var endHour = this.state.form.endHour;
        var endMin = this.state.form.endMin;
        var slot ={
            id:13,
            title:clientName,
            start: new Date(this.state.slotInfo.start.getFullYear(),this.state.slotInfo.start.getMonth(),this.state.slotInfo.start.getDate(),startHour,startMin),
            end: new Date(this.state.slotInfo.start.getFullYear(),this.state.slotInfo.start.getMonth(),this.state.slotInfo.start.getDate(),endHour,endMin)
        }

        console.log(slot);
        this.props.addEvent(slot)
    }
    render() {
        return (
            <div className="modal fade in" id="myModal" role="dialog" >
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.props.closePopup} data-dismiss="modal">&times;</button>

                        </div>
                        <div className="modal-body">
                            <div>
                                <p className="modal-title"><label>Client Name:</label><input name="clientName" onChange ={this.onChange } type="text" id="clientName" value={this.state.form.clientName} placeholder="Enter Client Name" /> </p>
                                <p className="modal-title"><label>Client Phone:</label><input type="text" placeholder="Phone number" /> </p>
                                <p><label className="padding"> Start:</label> <span><select type='text' id="startHour" className="timeInput" name="startHour" onChange ={this.onChange } value={this.state.form.startHour}>
                                    <option value="8"> 8 </option>
                                    <option value="9"> 9</option>
                                    <option value="10">10</option>
                                    <option value="11" >11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14" >14</option>
                                    <option value="15" >15</option>
                                    <option value="16" >16</option>
                                    <option value="17" >17</option>
                                </select>
                                    :<select className="timeInput" type='text' onChange ={this.onChange } name="startMin" value={this.state.form.startMin} >
                                        <option value="00"> 00 </option>
                                        <option value="10"> 10 </option>
                                        <option value="20"> 20 </option>
                                        <option value="30"> 30 </option>
                                        <option value="40"> 40 </option>
                                        <option value="50"> 50 </option>
                                    </select>
                                </span>
                                    <label className="padding">End:</label><span><select type='text' onChange ={this.onChange } name="endHour" className="timeInput" value={this.state.form.endHour}>
                                        <option value="8"> 8 </option>
                                        <option value="9"> 9</option>
                                        <option value="10">10</option>
                                        <option value="11" >11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14" >14</option>
                                        <option value="15" >15</option>
                                        <option value="16" >16</option>
                                        <option value="17" >17</option>
                                    </select>
                                        :<select className="timeInput" type='text' name="endMin" onChange ={this.onChange } value={this.state.form.endMin} >
                                            <option value="00"> 00 </option>
                                            <option value="10"> 10 </option>
                                            <option value="20"> 20 </option>
                                            <option value="30"> 30 </option>
                                            <option value="40"> 40 </option>
                                            <option value="50"> 50 </option>
                                        </select>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={this.props.closePopup} data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-default" onClick={this.addEvent.bind(this)} data-dismiss="modal">Add</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Popup;