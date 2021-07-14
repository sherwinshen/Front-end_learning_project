const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const ctx = canvas.getContext('2d');

let originData;

// 获取摄像头权限及数据
function getVideo() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
    }).catch(err => {
        console.log('Error:' + err.name);
    });
}

getVideo();

// 截图takePhoto，并显示至Canvas
function takePhoto() {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;


    ctx.drawImage(video, 0, 0, width, height);
    originData = ctx.getImageData(0, 0, width, height);

}

// 保存图片
function savePhoto() {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
}


// 色彩滤镜
slider = document.querySelector('.rgb');
slider.onchange = function (e) {
    ctx.putImageData(originData, 0, 0);
    const target = e.target;
    console.log(target)
    const startPos = {
        'r': 0,
        'g': 1,
        'b': 2
    }[target.name[0]];
    // filterMin和filterMax表示相应的滤色范围上下限
    const tempFilter = checkFilter(target.name, target.value);
    const filterMin = tempFilter.min;
    const filterMax = tempFilter.max;
    // 从canvas获取像素数据
    let img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let imgData = img.data;
    // 色彩过滤
    for (let i = startPos, len = imgData.length; i < len; i += 4) {
        if (imgData[i] < filterMin) {
            imgData[i] = filterMin;
        } else if (imgData[i] > filterMax) {
            imgData[i] = filterMax;
        }
    }
    // 将修改后的像素数据重绘制至canvas
    ctx.putImageData(img, 0, 0);
    img.src = canvas.toDataURL();
};


//滤色范围记录
filter = {
    rMin: 0,
    rMax: 255,
    gMin: 0,
    gMax: 255,
    bMin: 0,
    bMax: 255
};

//滤色函数
function checkFilter(name, value) {
    let _min;
    let _max;
    const _antiname = {
        'rMin': 'rMax',
        'rMax': 'rMin',
        'gMin': 'gMax',
        'gMax': 'gMin',
        'bMin': 'bMax',
        'bMax': 'bMin'
    }[name];
    filter[name] = value;
    //当下限值超过上限时，将两者对调
    _min = Math.min(filter[name], filter[_antiname]);
    _max = Math.max(filter[name], filter[_antiname]);
    return {
        min: _min,
        max: _max
    }
}