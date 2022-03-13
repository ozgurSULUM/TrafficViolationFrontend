import { useEffect, useState } from "react";
import axios from '../../services/axios';
import socket from '../../services/socketio';

const ROUTES = { VIOLATIONS1: '/all-violations1', VIOLATIONS2: '/all-violations2', VIOLATIONS3: '/all-violations3' }

export const useViolations = () =>{
    const [violations1, setViolations1] = useState([]);
    const [violations2, setViolations2] = useState([]);
    const [violations3, setViolations3] = useState([]);

    useEffect(() => {
        socket.on("connect", () => {
        console.log('Connected to server');
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        });
        socket.on("insert", (newViolation) => {
        console.log(`new Violation detected ${newViolation}`);
        switch (newViolation.collection) {
            case "violation1":
            setViolations1((prevViolations) => {
                const newViolations = [...prevViolations];
                newViolations.push(newViolation.fullDocument);
                return newViolations;
            });
            break;
            case "violation2":
            setViolations2((prevViolations) => {
                const newViolations = [...prevViolations];
                newViolations.push(newViolation.fullDocument);
                return newViolations;
            });
            break;
            case "violation3":
            setViolations3((prevViolations) => {
                const newViolations = [...prevViolations];
                newViolations.push(newViolation.fullDocument);
                return newViolations;
            });
            break;
            default:
            console.log("could not find collection type.");
        }
        });
        socket.on("delete", (deletedViolation) => {
        console.log(`Violation deletion detected ${deletedViolation}`);
        switch (deletedViolation.collection) {
            case "violation1":
            setViolations1((prevViolations) => {
                const newViolations = prevViolations.filter((prevViolation) => {
                if (prevViolation._id === deletedViolation._id) { //BURADA SIKINTI VAR
                    console.log(prevViolation._id);
                    return false;
                } else {
                    return true;
                }
                });
                console.log((newViolations));
                return newViolations;
            });
            break;
            case "violation2":
            setViolations2((prevViolations) => {
                const newViolations = prevViolations.filter((violation) => {
                if (violation._id === deletedViolation._id) {
                    return false;
                } else {
                    return true;
                }
                });
                return newViolations;
            });
            break;
            case "violation3":
            setViolations3((prevViolations) => {
                const newViolations = prevViolations.filter((violation) => {
                if (violation._id === deletedViolation._id) {
                    return false;
                } else {
                    return true;
                }
                });
                return newViolations;
            });
            break;
            default:
            console.log("could not find collection type.");
        }
        });
        return () => {
        socket.removeAllListeners();
        };
    }, []);


    const get_all_violations = () => {
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
    }

    useEffect(() => {
        get_all_violations();
    }, []);


    return [violations1, violations2, violations3];
};
