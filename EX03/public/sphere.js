function volume_sphere(form) {
    var r = form._radius.value;
    form._volume.value = 4/3 * Math.PI * Math.pow(r, 3);
}