function distanceFromHqInBlocks(x) {
    return Math.abs(x - 42)
} 
function distanceFromHqInFeet(x) {
    return Math.abs(distanceFromHqInBlocks(x)*264)
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination)*264)
}