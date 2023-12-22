import React from "react";
import Card from "./Card";


const villa = [
    {
        img: "images/property-01.jpg",
        amount: "2.264.000",
        title: "18 New Streer Miami, Or 97219",
        bed: "8",
        bath: "8",
        area: "545m2",
        floor: "3",
        parking: "6 spots"
    },
    {
        img: "images/property-02.jpg",
        amount: "1.180.000",
        title: "54 Mid Street Florida, Or 27001",
        bed: "6",
        bath: "5",
        area: "450m2",
        floor: "3",
        parking: "8 spots"
    },
    {
        img: "images/property-03.jpg",
        amount: "1.460.00",
        title: "26 Old Street New York, Or 10001",
        bed: "5",
        bath: "4",
        area: "225m2",
        floor: "3",
        parking: "10 spots"
    },
    {
        img: "images/property-01.jpg",
        amount: "2.264.000",
        title: "18 New Streer Miami, Or 97219",
        bed: "8",
        bath: "8",
        area: "545m2",
        floor: "3",
        parking: "6 spots"
    },
    {
        img: "images/property-02.jpg",
        amount: "1.180.000",
        title: "54 Mid Street Florida, Or 27001",
        bed: "6",
        bath: "5",
        area: "450m2",
        floor: "3",
        parking: "8 spots"
    },
    {
        img: "images/property-03.jpg",
        amount: "1.460.00",
        title: "26 Old Street New York, Or 10001",
        bed: "5",
        bath: "4",
        area: "225m2",
        floor: "3",
        parking: "10 spots"
    }

]


const Fifth = () => {
    return (
        <>
            <div className="container py-5">
                <div className="header d-flex flex-column align-items-center">
                    <h6 className="text-danger">| PROPERTIES</h6>
                    <h2>We Provide The Best Property You Like</h2>
                </div>
                <div className="d-flex flex-wrap justify-content-around mt-5">
                    {
                        villa.map((villa, index) => {
                            return <Card key={index} img={villa.img} amount={villa.amount} title={villa.title} bed={villa.bed} bath={villa.bath} area={villa.area} floor={villa.floor} parking={villa.parking} />
                        })
                    }
                </div>
            </div>
        </>
    )
};


export default Fifth;