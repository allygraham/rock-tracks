export default {
    randomiseTracks: (array) => {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array.slice(0, 3);
    },
    selectedTrackName: (tracks, trackIdentifier) => {
        const individualTrack = tracks
            .find((item) => item.trackId.toString() === trackIdentifier);

        if (!individualTrack) {
            return "";
        }

        return individualTrack.trackName;
    },
}