const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('.fullScreen');

// 滑动调节音量、播放速度
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

function handleRangeUpdate() {
    video[this.name] = this.value;
}

// 可通过按钮快进、回退
skipButtons.forEach(button => button.addEventListener('click', skip));

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

// 可点击视频画面或按钮播放或暂停视频播放
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


function togglePlay() {
    if (video.paused) {
        video.play();
    } else video.pause();
}

function updateButton() {
    const newIcon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = newIcon;
}


// 可点击或拖动进度条选择视频播放进度
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

video.addEventListener('timeupdate', handleProgress);

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

// 全屏
let isFull = false;
fullScreen.addEventListener('click', makeFull);

function makeFull() {
    if (isFull) {
        document.exitFullscreen();
        isFull = !isFull;
    } else {
        player.requestFullscreen();
        isFull = !isFull;
    }
}

