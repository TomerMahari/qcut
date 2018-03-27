import React from 'react';
import BigCalendar from 'react-big-calendar'
import events from './events.js';
import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'
import Popup from './Popup.js';

localizer(globalize)

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            thisEvents: events,
            showPopup: false,
            slotInfo:null,
            
        }
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    SetNewEvent = (slotInfo) =>{
console.log('slotInfo',slotInfo);
        
        this.setState({
            slotInfo: slotInfo,
            showPopup:true
        })

    }
    AddEvent = (slotInfo)=>{
        var event = {
            id:13,
            title:slotInfo.title,
            start:slotInfo.start,
            end:slotInfo.end
        }
        const thisEvents = [...this.state.thisEvents,event]
        this.setState({
            thisEvents: [],
            showPopup:false
        },()=>{
            this.setState({thisEvents});
        });
    }
    render() {
        return (
            <div className="example">
            {this.state.thisEvents.length > 0 ?
 <BigCalendar
 selectable
 events={this.state.thisEvents}
 defaultView="day"
 scrollToTime={new Date(2018, 1, 1, 6)}
 defaultDate={new Date(2018, 3, 27)}
 onSelectEvent={event => alert(event.title)}
 onSelectSlot={slotInfo => this.SetNewEvent(slotInfo)}
/>:''
            }
           
            {this.state.showPopup?
            <Popup 
                closePopup={this.togglePopup.bind(this)}
                slotInfo={this.state.slotInfo}  
                addEvent={this.AddEvent} />
            : null
        }
            </div>
        );
    }
}

export default Calendar;