import { useEffect, useState } from "react";
import axios from '../../services/axios';
import socket from '../../services/socketio';

const ROUTES = { VIOLATIONS1: '/all-violations1', VIOLATIONS2: '/all-violations2', VIOLATIONS3: '/all-violations3' }

export const useViolations = () => {
    const [violations1, setViolations1] = useState([]);
    const [violations2, setViolations2] = useState([]);
    const [violations3, setViolations3] = useState([]);

    //Adding event listeners for listening add and delete updates from our backend.
    useEffect(() => {
        //deletes deleted violation from violation state.
        const violationDelete = (prevViolations, deletedViolation) => {
            const newViolations = prevViolations.filter((prevViolation) => {
                if (prevViolation._id === deletedViolation._id) {
                    return false;
                } else {
                    return true;
                }
            });
            return newViolations;
        }

        //adds added violation to violation state.
        const vioaltionAdd = (prevViolations, newViolation) => {
            const newViolations = [...prevViolations];
            newViolations.push(newViolation.fullDocument);
            return newViolations;
        };

        //console.log when connected to server
        socket.on("connect", () => {
            console.log('Connected to server');
            console.log(socket.id);
        });

        //when violation is added to mongodb this event updates our violations.
        socket.on("insert", (newViolation) => {
            console.log(`new Violation detected ${newViolation}`);
            switch (newViolation.collection) {
                case "violation1":
                    setViolations1((prevViolations) => vioaltionAdd(prevViolations, newViolation));
                    break;
                case "violation2":
                    setViolations2((prevViolations) => vioaltionAdd(prevViolations, newViolation));
                    break;
                case "violation3":
                    setViolations3((prevViolations) => vioaltionAdd(prevViolations, newViolation));
                    break;
                default:
                    console.log("could not find collection type.");
            }
        });

        //when violation is deleted from mongodb this event updates our violations.
        socket.on("delete", (deletedViolation) => {
            console.log(`Violation deletion detected ${deletedViolation}`);
            switch (deletedViolation.collection) {
                case "violation1":
                    setViolations1((prevViolations) => violationDelete(prevViolations, deletedViolation));
                    break;
                case "violation2":
                    setViolations2((prevViolations) => violationDelete(prevViolations, deletedViolation));
                    break;
                case "violation3":
                    setViolations3((prevViolations) => violationDelete(prevViolations, deletedViolation));
                    break;
                default:
                    console.log("could not find collection type.");
            }
        });
        //remove all socket listeners when unmounting.
        return () => {
            socket.removeAllListeners();
        };
    }, []);

    //Get all violations from mongodb.
    useEffect(() => {
        axios.get(ROUTES.VIOLATIONS1).then((response) => {
            console.log(response.data);
            setViolations1(response.data);
        });
        axios.get(ROUTES.VIOLATIONS2).then((response) => {
            console.log(response.data);
            setViolations2(response.data);
        });
        axios.get(ROUTES.VIOLATIONS3).then((response) => {
            console.log(response.data);
            setViolations3(response.data);
        });
    }, []);


    return [violations1, violations2, violations3];
};
