import BarbariansCover from '../assets/images/series/barbarians/barbarians_cover.jpg'
import DummyProfileOne from '../assets/images/dummy_profile/1.jpg'
import DummyProfileTwo from '../assets/images/dummy_profile/2.jpg'
import DummyProfileThree from '../assets/images/dummy_profile/3.jpg'
import DummyProfileFour from '../assets/images/dummy_profile/4.jpg'
import DummyProfileFive from '../assets/images/dummy_profile/5.jpg'
import DummyProfileSix from '../assets/images/dummy_profile/6.jpg'
import Barbarians from '../assets/images/series/barbarians/barbarians.jpg'

import PrisionBreakCover from '../assets/images/series/prison_break/prison_break_cover.jpg'
import PrisionBreak from '../assets/images/series/prison_break/prison_break.webp'

export const newSeason = [
    {
        id: 1,
        name: "Barbarians",
        thumbnail: BarbariansCover,
        stillWatching: [
            {
                id: 1,
                profile: DummyProfileOne
            },
            {
                id: 2,
                profile: DummyProfileTwo
            },
            {
                id: 3,
                profile: DummyProfileThree
            },
            {
                id: 4,
                profile: DummyProfileFour
            },
            {
                id: 5,
                profile: DummyProfileFive
            },
            {
                id: 6,
                profile: DummyProfileSix
            },
        ],
        details: {
            image: Barbarians,
            age: "16+",
            genre: "Historical Drama",
            ratings: 7.2,
            season: "SEASON 1",
            currentEpisode: 'S1 : E1 "Episode 1 : Vikings"',
            runningTime: "45m",
            progress: "0%"
        }
    }
]

export const continueWatching = [
    {
        id: 1,
        name: "Prison Break",
        thumbnail: PrisionBreakCover,
        overallProgress: "20%",
        details: {
            image: PrisionBreak,
            age: "16+",
            genre: "Action",
            ratings: 8.3,
            season: "SEASON 1",
            currentEpisode: 'S1 : E8 "Episode 8 : The Old Head"',
            runningTime: "45m",
            progress: "50%"
        }
    },

]

const dummyData = { newSeason, continueWatching };

export default dummyData;