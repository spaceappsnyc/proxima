/* global AFRAME */

AFRAME.registerComponent('change-time', {

    schema: {
        on: { type: 'string' },
        time: { type: 'string' },
        brightness: { type: 'string' },
        dashboard: { type: 'string' },
        target: { type: 'selector' }
    },

    init: function () {

        var data = this.data;
        var el = this.el;

        el.addEventListener(data.on, function () {
            document.querySelector('#time').setAttribute('text', 'value', data.time + '\nSOL 24');
            document.querySelector('#dashboard').setAttribute('material', 'src', data.dashboard);

            // <a-sky id="image-360" radius="10" src="#sky-1230"></a-sky>

            // TODO: Kris, change the lighting here
            switch (data.time) {
                case '0:00':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 0.25);
                    document.querySelector('#point-light').setAttribute('position', { x: -10, y: 1, z: 0 });
                    data.target.setAttribute('material', 'src', '#sky-0000');
                    document.querySelector('#water').setAttribute('geometry', 'height', .135);
                    document.querySelector('#water').setAttribute('position', { x: 0, y: -0.175, z: 0 });
                    break;
                case '6:15':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 1);
                    document.querySelector('#point-light').setAttribute('position', { x: -4, y: 4, z: 0 });
                    data.target.setAttribute('material', 'src', '#sky-0615');
                    document.querySelector('#water').setAttribute('geometry', 'height', .1);
                    document.querySelector('#water').setAttribute('position', { x: 0, y: -0.175, z: 0 });
                    break;
                case '12:30':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 4);
                    document.querySelector('#point-light').setAttribute('position', { x: 3, y: 8, z: 0 });
                    data.target.setAttribute('material', 'src', '#sky-1230');
                    document.querySelector('#water').setAttribute('geometry', 'height', .165);
                    document.querySelector('#water').setAttribute('position', { x: 0, y: -0.145, z: 0 });
                    break;
                case '18:45':
                    document.querySelector('#point-light').setAttribute('light', 'intensity', 0.25);
                    document.querySelector('#point-light').setAttribute('position', { x: 10, y: 1, z: 0 });
                    data.target.setAttribute('material', 'src', '#sky-1845');
                    document.querySelector('#water').setAttribute('geometry', 'height', .2);
                    document.querySelector('#water').setAttribute('position', { x: 0, y: -0.135, z: 0 });
                    break;
            }
        });
    }

});
