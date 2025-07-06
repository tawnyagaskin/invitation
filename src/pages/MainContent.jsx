import Hero from '@/pages/Hero'
import Events from '@/pages/Events'
import Location from '@/pages/Location';
import Wishes from '@/pages/Wishes';
import Gifts from '@/pages/Gifts';
import Gallery from '@/pages/Gallery';
import RSVP from './RSVP';
import Endnotes from './Endnotes';
import TravelAccommodation from './TravelAccomodation';

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <Events />
            {/* <Location /> */}
            <Gifts />
            <Gallery />
            <TravelAccommodation />
            <RSVP />
            <Wishes />
            <Endnotes />
        </>
    )
}