<template>
  <div class="p-4 sm:ml-64 bg-bgCalendar">
    <h3 class="ml-24 mt-3 text-2xl text-navHeader">Calendar</h3>
    <div class="bg-white calendar-container">
      <div class="flex justify-between items-center mb-4">
        <h4 class="text-sidebar text-lg">Calendar View</h4>
        <button
          @click="openAddEventModal"
          class="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add an event
        </button>
      </div>

      <FullCalendar :options="calendarOptions" />
    </div>

    <div
      v-if="showModal"
      class="modal"
      :style="{ top: modalPosition.y + 'px', left: modalPosition.x + 'px' }"
    >
      <div class="modal-content">
        <div class="modal-header">
          <span class="modal-title">{{ isEditing ? "" : "" }}</span>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>

        <div class="modal-body">
          <input
            v-model="newEvent.title"
            placeholder="Event name"
            class="event-title-input"
            maxlength="30"
          />
          <div class="input-row">
            <input type="date" v-model="newEvent.date" id="date" />
          </div>
          <div class="input-row">
            <input type="time" v-model="newEvent.time" id="time" />
          </div>
          <div class="input-row">
            <label for="color">Color:</label>
            <input type="color" v-model="newEvent.color" id="color" />
          </div>
        </div>

        <div class="modal-footer">
          <button @click="closeModal" class="btn-discard">Cancel</button>
          <button
            @click="isEditing ? updateEvent() : addEvent()"
            class="btn-save"
          >
            {{ isEditing ? "Update" : "Save" }}
          </button>
          <button v-if="isEditing" @click="deleteEvent" class="btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { FullCalendar },
  data() {
    return {
      showModal: false,
      isEditing: false,
      modalPosition: { x: 0, y: 0 },
      newEvent: {
        id: "",
        title: "",
        date: "",
        time: "",
        color: "#ff0000",
      },
      currentEvent: null,
      calendarEvents: [], 
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
        initialView: "dayGridMonth",
        height: 600,
        headerToolbar: {
          start: "today,prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [], 
        editable: true,
        droppable: true,
        eventClick: this.handleEventClick,
        eventDrop: this.handleEventDrop,
        dateClick: this.handleDateClick,
      },
    };
  },
  methods: {
    openAddEventModal() {
      this.resetNewEvent();
      this.isEditing = false;
      this.showModal = true; 
    },
    closeModal() {
      this.showModal = false; 
    },
    handleDateClick(info) {
      this.newEvent.date = info.dateStr;
      this.modalPosition.x = info.jsEvent.clientX; 
      this.modalPosition.y = info.jsEvent.clientY + 20;
      this.openAddEventModal(); 
    },
    addEvent() {
      if (this.newEvent.title && this.newEvent.date && this.newEvent.time) {
        const newCalendarEvent = {
          id: uuidv4(),
          title: this.newEvent.title,
          start: `${this.newEvent.date}T${this.newEvent.time}`,
          backgroundColor: this.newEvent.color,
          borderColor: this.newEvent.color,
        };

        this.calendarEvents.push(newCalendarEvent); 
        this.updateEvents(); 
        this.resetNewEvent();
        this.closeModal(); 
      } else {
        alert("Please fill in all fields!"); 
      }
    },
    handleEventClick(info) {
      this.isEditing = true; 
      this.currentEvent = info.event; 

      this.newEvent.title = info.event.title;
      this.newEvent.date = info.event.startStr.split("T")[0];
      this.newEvent.time = info.event.startStr.split("T")[1].slice(0, 5);
      this.newEvent.color = info.event.backgroundColor;

      this.modalPosition.x = info.jsEvent.clientX; 
      this.modalPosition.y = info.jsEvent.clientY + 20; 
      this.showModal = true; 
    },
    updateEvent() {
      if (this.newEvent.title && this.newEvent.date && this.newEvent.time) {
        const index = this.calendarEvents.findIndex(
          (event) => event.id === this.currentEvent.id
        ); 
        if (index !== -1) {
          this.calendarEvents[index].title = this.newEvent.title;
          this.calendarEvents[
            index
          ].start = `${this.newEvent.date}T${this.newEvent.time}`;
          this.calendarEvents[index].backgroundColor = this.newEvent.color;
          this.calendarEvents[index].borderColor = this.newEvent.color;

          this.updateEvents(); 
          this.resetNewEvent();
          this.isEditing = false; 
          this.closeModal();
        }
      } else {
        alert("Please fill in all fields!"); 
      }
    },
    deleteEvent() {
      if (confirm(`Delete event "${this.currentEvent.title}"?`)) {
        this.calendarEvents = this.calendarEvents.filter(
          (event) => event.id !== this.currentEvent.id
        ); 
        this.updateEvents(); 
        this.resetNewEvent(); 
        this.isEditing = false; 
        this.closeModal(); 
      }
    },
    handleEventDrop(info) {
      const event = info.event;

      const updatedEvent = {
        id: event.id,
        title: event.title,
        start: event.startStr,
        backgroundColor: event.backgroundColor,
        borderColor: event.borderColor,
      };

      const eventIndex = this.calendarEvents.findIndex(
        (e) => e.id === event.id
      );
      if (eventIndex !== -1) {
        this.calendarEvents[eventIndex] = updatedEvent; 
        this.updateEvents(); 
      }
    },
    updateEvents() {
      this.calendarOptions.events = [...this.calendarEvents]; 
    },
    resetNewEvent() {
      this.newEvent = {
        id: "",
        title: "",
        date: "",
        time: "",
        color: "#ff0000",
      }; 
      this.currentEvent = null; 
    },
  },
};
</script>

<style>
.modal {
  position: absolute; 
  z-index: 1000; 
  background-color: white; 
  border-radius: 10px; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  padding: 20px; 
  border: #808080 solid 1px;
}

.modal-header {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  border-bottom: 1px solid #e5e5e5; 
  padding-bottom: 10px; 
}

.modal-title {
  font-weight: bold;
}

.modal-body {
  padding: 15px 0; 
}

.modal-body input[type="date"],
.modal-body input[type="time"],
.modal-body input.event-title-input {
  width: 100%; 
  padding: 5px 0; 
  border: none; 
  border-bottom: 1px solid #ccc; 
  margin-bottom: 15px; 
  font-size: 14px; 
  color: #43425d; 
  outline: none; 
}

.modal-footer {
  display: flex; 
  justify-content: space-between; 
  padding-top: 10px;
  border-top: 1px solid #e5e5e5; 
}

.btn-discard {
  font-size: 14px;
  font-weight: bold; 
  color: #f44336; 
  background: none; 
  border: none;
  cursor: pointer;
  margin-right: auto; 
}

.btn-save {
  font-size: 14px; 
  font-weight: bold; 
  color: #808080; 
  background: none; 
  border: none; 
  cursor: pointer;
  margin: auto;
}

.close-btn {
  background: none; 
  border: none; 
  font-size: 16px; 
  cursor: pointer; 
  color: #808080; 
}

.close-btn:hover {
  color: #f44336; 
}
.fc .fc-button {
  background-color: white; 
  border-color: #d7dae2; 
  color: #4d4f5c;
  padding: 5px 15px; 
  outline: none; 
  box-shadow: none; 
  transition: border-color 0.3s, color 0.3s; 
}

.fc .fc-button:hover {
  color: #3b86ff; 
  background-color: white;
}

.fc .fc-button:focus,
.fc .fc-button:active {
  outline: none; 
  box-shadow: none; 
  border-color: #d7dae2; 
}

.fc .fc-button.fc-button-active {
  color: #3b86ff; 
  background-color: white;
  border-color: #3b86ff; 
}

.fc .fc-button:disabled {
  background-color: white;
  color: #3b86ff; 
  border-color: #d7dae2; 
}

.fc .fc-day-today {
  background-color: #f0f0f7; 
  border-color: #d7dae2; 
}


.fc-col-header {
  background-color: #f5f6fa; 
  font-size: 11px; 
  color: #a3a6b4; 
}

.fc-col-header-cell {
  text-transform: uppercase; 
  border: none; 
  padding: 16px 50px; 
  text-align: center; 
}

.fc .fc-daygrid-day-number {
  color: #43425d; 
}

.fc .fc-timegrid-day-top {
  height: 38px;
}

.fc-timegrid-slot {
  height: 38px;
}

.fc-daygrid-day-events {
  height: 38px;
  margin: 0;
}

.fc-timegrid-axis-frame {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fc-timegrid-divider {
  padding: 0;
  border: none;
}

.fc-timegrid-slot-label-cushion {
  color: #4d4f5c;
  font-size: 13px;
}

.fc-timegrid-axis-cushion {
  color: #4d4f5c;
  font-size: 13px;
}

.fc .fc-timegrid-now-indicator-line {
  position: absolute;
  z-index: 4;
  left: 0;
  right: 0;
  border-style: solid;
  border-color: #3b86ff; 
  border-width: 1px 0 0;
}
</style>