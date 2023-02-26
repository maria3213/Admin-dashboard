import { createContext,  useState, useEffect } from "react";

import { mockDataContacts,mockDataInvoices } from "../data/mockData";

export const ContactContext = createContext(null);

export const ContactContextProvider = (props) =>{
    const [contacts,setContacts] = useState(mockDataContacts);
    const [invoices,setInvoice] = useState(mockDataInvoices);

    const addContact = (data) => {
        // console.log("from context"+data);
        const id = contacts.length+1;
        const newContact = {id,name:data.name,email:data.email,age:data.age,phone:data.contact,address:data.address};
        setContacts((prev)=> ([...prev,newContact]));
    };

    const addInvoice = (data) => {
      // console.log("from context"+data);
      const id = invoices.length+1;
      const formatDate = data.date.toISOString().slice(0,10).replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')
      const newInvoice = {id,name:data.name,email:data.email,cost:data.cost,phone:data.contact,date:formatDate};
      setInvoice((prev)=> ([...prev,newInvoice]));
    };
    

    const contextValue = {
        contacts,
        addContact,
        invoices,
        addInvoice
    };

    return (
        <ContactContext.Provider value={contextValue}>
          {props.children}
        </ContactContext.Provider>
      );

}