export default function reducer(state, action) {
    switch (action.type) {
      //   when true it sets userMessage state with the new values
      case "setUserMessage": {
        return {
          ...state,
          userMessage: action.data,
        };
      }
      //   when true it sets booked state with the new values
      case "setBooked": {
        return {
          ...state,
          booked: action.data,
        };
      }

      case "setBookings": {
        return {
          ...state,
          bookings: action.data,
        };
      }
     
      case "addBooking": {
        return {
          ...state,
          bookings: [action.data, ...state.bookings],
        };
      }
     
      case "deleteBooking": {
        const updatedBookings = state.bookings.filter((booking) => {
          return booking.id !== parseInt(action.data);
        });
        return {
          ...state,
          bookings: updatedBookings,
        };
      }
      
      case "updateBooking": {
        const booking = state.bookings.find(
          (booking) => booking.id === action.data.id
        );
        const updatedBooking = Object.assign(booking, action.data);
  
        const otherBookings = state.booking.filter(
          (booking) => booking.id !== action.data.id
        );
        return {
          ...state,
          booking: [updatedBooking, ...otherBookings],
        }
      }
      //   when true it sets loggedInUser state with the new values
      case "setLoggedInUser": {
        return {
          ...state,
          loggedInUser: action.data,
        }
      }

      case "setAdminUser": {
        return {
          ...state,
          adminUser: action.data,
        };
      }
      //   when true it sets Token state with the new values
      case "setToken": {
        return {
          ...state,
          auth: {
            ...state.auth,
            token: action.data,
          },
        };
      }
      default: return state;
    }
  }