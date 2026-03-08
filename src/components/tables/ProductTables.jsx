import React from 'react';

const Th = ({ children, colSpan = 1, rowSpan = 1, className = "" }) => (
    <th 
        colSpan={colSpan} 
        rowSpan={rowSpan} 
        className={`p-3 md:p-4 text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider text-center border border-gray-200 dark:border-gray-800 ${className}`}
    >
        {children}
    </th>
);

const Td = ({ children, colSpan = 1, rowSpan = 1, className = "" }) => (
    <td 
        colSpan={colSpan} 
        rowSpan={rowSpan} 
        className={`p-3 md:p-4 text-gray-700 dark:text-gray-300 text-sm md:text-base border border-gray-200 dark:border-gray-800 align-middle text-center ${rowSpan > 1 ? 'bg-gray-50/30 dark:bg-gray-900/10' : ''} ${className}`}
    >
        {children}
    </td>
);

const Tr = ({ children, className="" }) => (
    <tr className={`hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors ${className}`}>
        {children}
    </tr>
);

const TableContainer = ({ children }) => (
    <div className="overflow-x-auto rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-950">
        <table className="w-full text-center border-collapse min-w-[600px] md:min-w-full">
            {children}
        </table>
    </div>
);

export const ProductTable = ({ slug }) => {
    switch (slug) {
        case 'garden-pipe':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th colSpan={4} className="text-xl">PVC Garden Pipe Specifications</Th>
                        </tr>
                        <tr>
                            <Th colSpan={2}>Normal Size</Th>
                            <Th rowSpan={2}>Wall Thickness (mm)</Th>
                            <Th rowSpan={2}>Standard Length (Meters)</Th>
                        </tr>
                        <tr>
                            <Th>Size (mm)</Th>
                            <Th>Size (Inch)</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>12</Td><Td>½"</Td><Td>2.4</Td><Td>30 / 50 / 100</Td></Tr>
                        <Tr><Td>16</Td><Td>⅝"</Td><Td>2.4</Td><Td>30 / 50 / 100</Td></Tr>
                        <Tr><Td>19</Td><Td>¾"</Td><Td>2.4</Td><Td>30 / 50 / 100</Td></Tr>
                        <Tr><Td>25</Td><Td>1"</Td><Td>2.4</Td><Td>30 / 50 / 100</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'braided-pipe':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th colSpan={5} className="text-xl">PVC Braided Pipe Specifications</Th>
                        </tr>
                        <tr>
                            <Th colSpan={2}>Normal Size</Th>
                            <Th rowSpan={2}>Wall Thickness (mm)</Th>
                            <Th rowSpan={2}>Working Pressure (kg/cm²)</Th>
                            <Th rowSpan={2}>Standard Length (Meters)</Th>
                        </tr>
                        <tr>
                            <Th>(mm)</Th>
                            <Th>(inch)</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>12</Td><Td>½"</Td><Td>2</Td><Td>7</Td><Td>50 / 100</Td></Tr>
                        <Tr><Td>15</Td><Td>⅝"</Td><Td>2.5</Td><Td>7</Td><Td>50 / 100</Td></Tr>
                        <Tr><Td>20</Td><Td>¾"</Td><Td>2.5</Td><Td>7</Td><Td>50 / 100</Td></Tr>
                        <Tr><Td>25</Td><Td>1"</Td><Td>3</Td><Td>5</Td><Td>50 / 100</Td></Tr>
                        <Tr><Td>31</Td><Td>1¼"</Td><Td>3.5</Td><Td>5</Td><Td>50 / 100</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'layflat-pipe':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th colSpan={7} className="text-xl">Lay Flat Pipe Specifications</Th>
                        </tr>
                        <tr>
                            <Th colSpan={2}>Nominal Size</Th>
                            <Th>Inside Diameter</Th>
                            <Th>Wall Thickness</Th>
                            <Th colSpan={2}>Pressure (at 30°C)</Th>
                            <Th>Standard Lengths</Th>
                        </tr>
                        <tr>
                            <Th>mm</Th>
                            <Th>inch</Th>
                            <Th>mm</Th>
                            <Th>mm</Th>
                            <Th>Working Pressure (kg/cm²)</Th>
                            <Th>Bursting Pressure (kg/cm²)</Th>
                            <Th>meters</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>25</Td><Td>1"</Td><Td>26 ± 1</Td><Td>1.0 ± 0.1</Td><Td>4</Td><Td>11 – 12</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>40</Td><Td>1½"</Td><Td>41 ± 1</Td><Td>1.0 ± 0.1</Td><Td>4</Td><Td>11 – 12</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>50</Td><Td>2"</Td><Td>53 ± 1</Td><Td>1.1 ± 0.1</Td><Td>3</Td><Td>8 – 9</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>65</Td><Td>2½"</Td><Td>66 ± 1</Td><Td>1.2 ± 0.1</Td><Td>3</Td><Td>6 – 7</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>75</Td><Td>3"</Td><Td>82 ± 1</Td><Td>1.2 ± 0.1</Td><Td>3</Td><Td>6 – 7</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>100</Td><Td>4"</Td><Td>104 ± 2</Td><Td>1.2 ± 0.1</Td><Td>3</Td><Td>6 – 7</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>150</Td><Td>6"</Td><Td>154 ± 3</Td><Td>1.8 ± 0.1</Td><Td>3</Td><Td>5 – 6</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>200</Td><Td>8"</Td><Td>204 ± 3</Td><Td>2.3 ± 0.2</Td><Td>2</Td><Td>3 – 4</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>250</Td><Td>9¾"</Td><Td>257 ± 3</Td><Td>2.5 ± 0.2</Td><Td>2</Td><Td>2.5 – 3</Td><Td>50 / 60 / 100</Td></Tr>
                        <Tr><Td>300</Td><Td>11¾"</Td><Td>310 ± 3</Td><Td>2.7 ± 0.3</Td><Td>2</Td><Td>2.5 – 3</Td><Td>50 / 100</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'suction-pipe':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th colSpan={7} className="text-xl">Suction Pipe specifications</Th>
                        </tr>
                        <tr>
                            <Th colSpan={2}>Normal Size</Th>
                            <Th colSpan={2}>Diameter</Th>
                            <Th colSpan={2}>Pressure (at 30°C)</Th>
                            <Th>Standard Length</Th>
                        </tr>
                        <tr>
                            <Th>(mm)</Th>
                            <Th>(inch)</Th>
                            <Th>ID (mm)</Th>
                            <Th>OD (mm)</Th>
                            <Th>Working (kg/cm2)</Th>
                            <Th>Bursting (kg/cm2)</Th>
                            <Th>(meters)</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>20</Td><Td>¾</Td><Td>19.0 ± 0.5</Td><Td>25.0 ± 1.0</Td><Td>8</Td><Td>25</Td><Td>30</Td></Tr>
                        <Tr><Td>25</Td><Td>1</Td><Td>25.4 ± 0.5</Td><Td>31.5 ± 0.5</Td><Td>8</Td><Td>25</Td><Td>30</Td></Tr>
                        <Tr><Td>30</Td><Td>1¼</Td><Td>31.8 ± 0.5</Td><Td>38.8 ± 0.5</Td><Td>7</Td><Td>21</Td><Td>30</Td></Tr>
                        <Tr><Td>40</Td><Td>1½</Td><Td>38.0 ± 0.5</Td><Td>46.3 ± 1.5</Td><Td>5.5</Td><Td>18</Td><Td>30</Td></Tr>
                        <Tr><Td>50</Td><Td>2</Td><Td>50.8 ± 0.5</Td><Td>60.8 ± 1.5</Td><Td>4.5</Td><Td>18</Td><Td>30</Td></Tr>
                        <Tr><Td>65</Td><Td>2½</Td><Td>63.5 ± 1.0</Td><Td>74.5 ± 1.5</Td><Td>4.5</Td><Td>18</Td><Td>30</Td></Tr>
                        <Tr><Td>75</Td><Td>3</Td><Td>76.2 ± 1.0</Td><Td>87.2 ± 1.5</Td><Td>4.5</Td><Td>18</Td><Td>30</Td></Tr>
                        <Tr><Td>100</Td><Td>4</Td><Td>101.2 ± 1.5</Td><Td>114.2 ± 2.0</Td><Td>4.5</Td><Td>14</Td><Td>15/18/30</Td></Tr>
                        <Tr><Td>125</Td><Td>5</Td><Td>127.0 ± 1.5</Td><Td>141.0 ± 2.0</Td><Td>3</Td><Td>10</Td><Td>15/18</Td></Tr>
                        <Tr><Td>150</Td><Td>6</Td><Td>152.4 ± 1.5</Td><Td>169.4 ± 2.0</Td><Td>2.5</Td><Td>9</Td><Td>15/18</Td></Tr>
                        <Tr><Td>200</Td><Td>8</Td><Td>203.2 ± 2.0</Td><Td>224.4 ± 2.0</Td><Td>2.5</Td><Td>8</Td><Td>4.5/6</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'hdpe-tarpaulin':
        case 'ldpe-tarpaulin':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900 border-b-2 border-brand-blue">
                        <tr>
                            <Th colSpan={2} className="text-xl">HDPE Tarpaulin Specification</Th>
                        </tr>
                        <tr>
                            <Th>Parameter</Th>
                            <Th>Details</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <Th>GSM Range</Th>
                            <Td>90 – 350 GSM</Td>
                        </Tr>
                        <Tr>
                            <Th rowSpan={3}>Material Type</Th>
                            <Td>Virgin</Td>
                        </Tr>
                        <Tr><Td>Semi-Virgin</Td></Tr>
                        <Tr><Td>Commercial</Td></Tr>
                        <Tr>
                            <Th rowSpan={8}>Available Colours</Th>
                            <Td>Blue</Td>
                        </Tr>
                        <Tr><Td>Black</Td></Tr>
                        <Tr><Td>Yellow</Td></Tr>
                        <Tr><Td>Silver/White</Td></Tr>
                        <Tr><Td>Silver/Blue</Td></Tr>
                        <Tr><Td>Blue/Orange</Td></Tr>
                        <Tr><Td>Silver/Black</Td></Tr>
                        <Tr><Td>Custom colours available as per customer requirement</Td></Tr>
                        <Tr>
                            <Th>Size</Th>
                            <Td>Available as per customer requirement</Td>
                        </Tr>
                    </tbody>
                </TableContainer>
            );
            
        case 'hdpe-rope':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th>Nominal Diameter (mm)</Th>
                            <Th>Mass per meter (g/m)</Th>
                            <Th>Weight per 110 m (kg)</Th>
                            <Th>Weight per 220 m (kg)</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>4</Td><Td>8.1</Td><Td>0.891</Td><Td>1.782</Td></Tr>
                        <Tr><Td>6</Td><Td>18.2</Td><Td>2.002</Td><Td>4.004</Td></Tr>
                        <Tr><Td>8</Td><Td>32.7</Td><Td>3.597</Td><Td>7.194</Td></Tr>
                        <Tr><Td>10</Td><Td>40.9</Td><Td>4.5</Td><Td>9</Td></Tr>
                        <Tr><Td>12</Td><Td>72</Td><Td>7.92</Td><Td>15.84</Td></Tr>
                        <Tr><Td>14</Td><Td>95</Td><Td>10.45</Td><Td>20.9</Td></Tr>
                        <Tr><Td>16</Td><Td>128</Td><Td>14.08</Td><Td>28.16</Td></Tr>
                        <Tr><Td>18</Td><Td>161</Td><Td>17.71</Td><Td>35.42</Td></Tr>
                        <Tr><Td>20</Td><Td>200</Td><Td>22</Td><Td>44</Td></Tr>
                        <Tr><Td>22</Td><Td>243</Td><Td>26.73</Td><Td>53.46</Td></Tr>
                        <Tr><Td>24</Td><Td>295</Td><Td>32.45</Td><Td>64.9</Td></Tr>
                        <Tr><Td>28</Td><Td>393</Td><Td>43.23</Td><Td>86.46</Td></Tr>
                        <Tr><Td>32</Td><Td>525</Td><Td>57.75</Td><Td>115.5</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'pp-rope':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th>Diameter (mm)</Th>
                            <Th>Weight (g/m)</Th>
                            <Th>Minimum Breaking Strength (kg)</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>3</Td><Td>4.09</Td><Td>128</Td></Tr>
                        <Tr><Td>4</Td><Td>7.27</Td><Td>214</Td></Tr>
                        <Tr><Td>5</Td><Td>11.36</Td><Td>375</Td></Tr>
                        <Tr><Td>6</Td><Td>16.36</Td><Td>602</Td></Tr>
                        <Tr><Td>7</Td><Td>22.7</Td><Td>—</Td></Tr>
                        <Tr><Td>8</Td><Td>29.09</Td><Td>1060</Td></Tr>
                        <Tr><Td>10</Td><Td>45.45</Td><Td>1560</Td></Tr>
                        <Tr><Td>12</Td><Td>65.45</Td><Td>2210</Td></Tr>
                        <Tr><Td>14</Td><Td>89.09</Td><Td>3050</Td></Tr>
                        <Tr><Td>16</Td><Td>116.36</Td><Td>3770</Td></Tr>
                        <Tr><Td>18</Td><Td>147.27</Td><Td>4810</Td></Tr>
                        <Tr><Td>20</Td><Td>181.81</Td><Td>5800</Td></Tr>
                        <Tr><Td>22</Td><Td>220</Td><Td>6960</Td></Tr>
                        <Tr><Td>24</Td><Td>261.81</Td><Td>8130</Td></Tr>
                        <Tr><Td>26</Td><Td>307.27</Td><Td>9410</Td></Tr>
                        <Tr><Td>28</Td><Td>356.36</Td><Td>10700</Td></Tr>
                        <Tr><Td>30</Td><Td>409.09</Td><Td>12220</Td></Tr>
                        <Tr><Td>32</Td><Td>465.45</Td><Td>13500</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'pp-strap':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th>Width (mm)<br/>(±0.05 mm)</Th>
                            <Th>Thickness (mm)<br/>(±0.03 mm)</Th>
                            <Th>Break Load (kg)</Th>
                            <Th>Surface</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td rowSpan={2}>9</Td><Td>0.6</Td><Td>80</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.7</Td><Td>85</Td><Td>Embossed</Td></Tr>
                        <Tr><Td rowSpan={2}>11</Td><Td>0.6</Td><Td>90</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.7</Td><Td>110</Td><Td>Embossed</Td></Tr>
                        <Tr><Td rowSpan={3}>12</Td><Td>0.6</Td><Td>110</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.7</Td><Td>120</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.8</Td><Td>120</Td><Td>Embossed</Td></Tr>
                        <Tr><Td rowSpan={6}>15</Td><Td>0.6</Td><Td>130</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.6</Td><Td>130</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.7</Td><Td>150</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.7</Td><Td>150</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.8</Td><Td>160</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.9</Td><Td>170</Td><Td>Embossed</Td></Tr>
                        <Tr><Td rowSpan={3}>18</Td><Td>0.6</Td><Td>170</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.7</Td><Td>175</Td><Td>Embossed</Td></Tr>
                        <Tr><Td>0.8</Td><Td>180</Td><Td>Embossed</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'pet-strap':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th>Width (mm)<br/>(± 0.05mm)</Th>
                            <Th>Thickness (mm)<br/>(±0.03 mm)</Th>
                            <Th>Surface</Th>
                            <Th>Length per Kg<br/>(meter)</Th>
                            <Th>Break Strength<br/>Flex (kg)</Th>
                            <Th>Break Strength<br/>Balling (kg)</Th>
                            <Th>Break Strength<br/>Pallet (kg)</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td rowSpan={2}>12</Td><Td rowSpan={2}>0.7</Td><Td>Plain</Td><Td>91</Td><Td>300</Td><Td>250</Td><Td>225</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>103</Td><Td>268</Td><Td>235</Td><Td>210</Td></Tr>
                        <Tr><Td rowSpan={2}>12</Td><Td rowSpan={2}>0.8</Td><Td>Plain</Td><Td>80</Td><Td>345</Td><Td>310</Td><Td>270</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>92</Td><Td>305</Td><Td>280</Td><Td>235</Td></Tr>
                        <Tr><Td rowSpan={2}>13</Td><Td rowSpan={2}>0.85</Td><Td>Plain</Td><Td>70</Td><Td>396</Td><Td>360</Td><Td>315</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>77</Td><Td>355</Td><Td>325</Td><Td>275</Td></Tr>
                        <Tr><Td rowSpan={2}>15</Td><Td rowSpan={2}>0.7</Td><Td>Plain</Td><Td>73</Td><Td>375</Td><Td>340</Td><Td>300</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>80</Td><Td>335</Td><Td>310</Td><Td>260</Td></Tr>
                        <Tr><Td rowSpan={2}>15</Td><Td rowSpan={2}>0.8</Td><Td>Plain</Td><Td>64</Td><Td>430</Td><Td>410</Td><Td>360</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>68</Td><Td>390</Td><Td>370</Td><Td>320</Td></Tr>
                        <Tr><Td rowSpan={2}>15</Td><Td rowSpan={2}>1</Td><Td>Plain</Td><Td>52</Td><Td>535</Td><Td>500</Td><Td>450</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>55</Td><Td>504</Td><Td>465</Td><Td>410</Td></Tr>
                        <Tr><Td rowSpan={2}>16</Td><Td rowSpan={2}>0.8</Td><Td>Plain</Td><Td>61</Td><Td>460</Td><Td>430</Td><Td>385</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>65</Td><Td>415</Td><Td>400</Td><Td>350</Td></Tr>
                        <Tr><Td rowSpan={2}>16</Td><Td rowSpan={2}>1</Td><Td>Plain</Td><Td>48</Td><Td>570</Td><Td>540</Td><Td>480</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>51</Td><Td>535</Td><Td>500</Td><Td>445</Td></Tr>
                        <Tr><Td rowSpan={2}>19</Td><Td rowSpan={2}>1</Td><Td>Plain</Td><Td>40</Td><Td>680</Td><Td>650</Td><Td>600</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>45</Td><Td>635</Td><Td>600</Td><Td>550</Td></Tr>
                        <Tr><Td rowSpan={2}>19</Td><Td rowSpan={2}>1.27</Td><Td>Plain</Td><Td>31</Td><Td>865</Td><Td>800</Td><Td>750</Td></Tr>
                        <Tr><Td>Emboss</Td><Td>35</Td><Td>810</Td><Td>750</Td><Td>700</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        case 'agriculture-shade-net':
        case 'construction-scaffold-net':
            return (
                <TableContainer>
                    <thead className="bg-gray-100 dark:bg-gray-900">
                        <tr>
                            <Th>Shade<br/>Percentage (%)</Th>
                            <Th>GSM<br/>( ±5%)</Th>
                            <Th>Base<br/>Polymer</Th>
                            <Th>Raw Material Grade</Th>
                            <Th>Color<br/>Options</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Tr><Td>95%</Td><Td>135</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>90%</Td><Td>120</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>80%</Td><Td>100</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>75%</Td><Td>95</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>70%</Td><Td>90</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>65%</Td><Td>80</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>50%</Td><Td>60</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>45%</Td><Td>55</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                        <Tr><Td>40%</Td><Td>50</Td><Td>HDPE</Td><Td>Virgin / UV Virgin /<br/>Semi-Virgin / RP</Td><Td>Green /<br/>Custom</Td></Tr>
                    </tbody>
                </TableContainer>
            );

        default:
            return (
                <div className="p-12 text-center bg-gray-50 dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
                    <p className="text-gray-500 italic">Detailed technical specifications for this specific variant are available upon request.</p>
                </div>
            );
    }
};

export default ProductTable;
