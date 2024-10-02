// Tabss.tsx
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CountdownTimer from '@/components/coundown';

export function Tabss() {
    return (
        <div className="tabs_wrape">
            <Tabs
                defaultValue="account"
                className=""
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <TabsList
                    className="tabs_names"
                    style={{
                        minWidth: "16%",
                        margin: "0 auto",
                        backgroundColor: "#ffffff4f",
                        backdropFilter: "blur(27px)",
                        gap: "10px",
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        height: "48px !important",
                    }}
                >
                    <TabsTrigger
                        style={{
                            zIndex: "6",
                            color: "white",
                        }}
                        value="account"
                    >
                        Bid To Buy
                    </TabsTrigger>
                    <TabsTrigger
                        style={{
                            zIndex: "6",
                            color: "white",
                        }}
                        value="password"
                    >
                        Unique bidding
                    </TabsTrigger>
                </TabsList>

                <TabsContent style={{ marginTop: "4rem", paddingBottom : '5rem', }} value="account">
                    <div
                        style={{
                            gap: "3rem 1rem",
                        }}
                        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                    >
                        <div className="relative flex flex-col cards_bid_to_buy">
                            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 inner_image_card">
                                <img src="/assets/images/42313962.jpg" alt="Car Image" />
                            </div>
                            <div className="p-6">
                                <h5 className="cart_title_j mb-3 block leading-snug tracking-normal antialiased">
                                    2012 Suzuki Swift Sport FZ CVT Hatchback
                                </h5>
                                <CountdownTimer targetDate="2024-10-03 1:31:00" />
                            </div>
                            <div className="p-2 px-8">
                                <h5 className="cart_title_js mb-2">
                                <i className="fa-solid fa-dollar-sign"></i> 2,200
                                </h5>
                            </div>
                            <div className="p-6 pt-0">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="variant_button button_to_next_bid_page"
                                >
                                    Click TO Bid <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </div>
                        </div>
                        {/* <div className="relative flex flex-col cards_bid_to_buy">
                            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 inner_image_card">
                                <img src="/assets/images/42312076.jpg" alt="Car Image" />
                            </div>
                            <div className="p-6">
                                <h5 className="cart_title_j mb-3 block leading-snug tracking-normal antialiased">
                                2012 Jeep Grand Cherokee OVERLAND WK Automatic Wagon
                                </h5>
                                <CountdownTimer targetDate="2024-10-04 1:31:00" />
                            </div>
                            <div className="p-6 pt-0">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="variant_button button_to_next_bid_page"
                                >
                                    Click TO Bid <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </div>
                        </div>
                        <div className="relative flex flex-col cards_bid_to_buy">
                            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 inner_image_card">
                                <img src="/assets/images/42315807.jpg" alt="Car Image" />
                            </div>
                            <div className="p-6">
                                <h5 className="cart_title_j mb-3 block leading-snug tracking-normal antialiased">
                                2003 Nissan Elgrand Automatic 8 Seats Van
                                </h5>
                                <CountdownTimer targetDate="2024-10-03 12:31:00" />
                            </div>
                            <div className="p-6 pt-0">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="variant_button button_to_next_bid_page"
                                >
                                    Click TO Bid <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </div>
                        </div>
                        <div className="relative flex flex-col cards_bid_to_buy">
                            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 inner_image_card">
                                <img src="/assets/images/42104944.jpg" alt="Car Image" />
                            </div>
                            <div className="p-6">
                                <h5 className="cart_title_j mb-3 block leading-snug tracking-normal antialiased">
                                2011 Nissan Dualis ST J10 CVT Wagon
                                </h5>
                                <CountdownTimer targetDate="2024-10-03 1:31:00" />
                            </div>
                            <div className="p-6 pt-0">
                                <button
                                    data-ripple-light="true"
                                    type="button"
                                    className="variant_button button_to_next_bid_page"
                                >
                                    Click TO Bid <i className="ri-arrow-right-s-line"></i>
                                </button>
                            </div>
                        </div> */}
                        
                    </div>

                </TabsContent>

                <TabsContent value="password"></TabsContent>
            </Tabs>
        </div>
    );
}
