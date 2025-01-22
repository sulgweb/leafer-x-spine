/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate$3(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter$2(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const Platform = {
    toURL(text, fileType) {
        let url = encodeURIComponent(text);
        if (fileType === 'text')
            url = 'data:text/plain;charset=utf-8,' + url;
        else if (fileType === 'svg')
            url = 'data:image/svg+xml,' + url;
        return url;
    },
    image: {
        hitCanvasSize: 100,
        maxCacheSize: 2560 * 1600,
        maxPatternSize: 4096 * 2160,
        crossOrigin: 'anonymous',
        getRealURL(url) {
            const { prefix, suffix } = Platform.image;
            if (suffix && !url.startsWith('data:') && !url.startsWith('blob:'))
                url += (url.includes("?") ? "&" : "?") + suffix;
            if (prefix && url[0] === '/')
                url = prefix + url;
            return url;
        }
    }
};

const Creator = {};

const IncrementId = {
    RUNTIME: 'runtime',
    LEAF: 'leaf',
    TASK: 'task',
    CNAVAS: 'canvas',
    IMAGE: 'image',
    types: {},
    create(typeName) {
        const { types } = I$1;
        if (types[typeName]) {
            return types[typeName]++;
        }
        else {
            types[typeName] = 1;
            return 0;
        }
    }
};
const I$1 = IncrementId;

const { round, pow: pow$1, PI: PI$2 } = Math;
const MathHelper = {
    within(value, min, max) {
        if (typeof min === 'object')
            max = min.max, min = min.min;
        if (min !== undefined && value < min)
            value = min;
        if (max !== undefined && value > max)
            value = max;
        return value;
    },
    fourNumber(num, maxValue) {
        let data;
        if (num instanceof Array) {
            switch (num.length) {
                case 4:
                    data = maxValue === undefined ? num : [...num];
                    break;
                case 2:
                    data = [num[0], num[1], num[0], num[1]];
                    break;
                case 3:
                    data = [num[0], num[1], num[2], num[1]];
                    break;
                case 1:
                    num = num[0];
                    break;
                default:
                    num = 0;
            }
        }
        if (!data)
            data = [num, num, num, num];
        if (maxValue)
            for (let i = 0; i < 4; i++)
                if (data[i] > maxValue)
                    data[i] = maxValue;
        return data;
    },
    formatRotation(rotation, unsign) {
        rotation %= 360;
        if (unsign) {
            if (rotation < 0)
                rotation += 360;
        }
        else {
            if (rotation > 180)
                rotation -= 360;
            if (rotation < -180)
                rotation += 360;
        }
        return MathHelper.float(rotation);
    },
    getGapRotation(addRotation, gap, oldRotation = 0) {
        let rotation = addRotation + oldRotation;
        if (gap > 1) {
            const r = Math.abs(rotation % gap);
            if (r < 1 || r > gap - 1)
                rotation = Math.round(rotation / gap) * gap;
        }
        return rotation - oldRotation;
    },
    float(num, maxLength) {
        const a = maxLength !== undefined ? pow$1(10, maxLength) : 1000000000000;
        num = round(num * a) / a;
        return num === -0 ? 0 : num;
    },
    getScaleData(scale, size, originSize, scaleData) {
        if (!scaleData)
            scaleData = {};
        if (size) {
            scaleData.scaleX = (typeof size === 'number' ? size : size.width) / originSize.width;
            scaleData.scaleY = (typeof size === 'number' ? size : size.height) / originSize.height;
        }
        else if (scale)
            MathHelper.assignScale(scaleData, scale);
        return scaleData;
    },
    assignScale(scaleData, scale) {
        if (typeof scale === 'number') {
            scaleData.scaleX = scaleData.scaleY = scale;
        }
        else {
            scaleData.scaleX = scale.x;
            scaleData.scaleY = scale.y;
        }
    }
};
const OneRadian = PI$2 / 180;
const PI2 = PI$2 * 2;
const PI_2 = PI$2 / 2;
function getPointData() { return { x: 0, y: 0 }; }
function getBoundsData() { return { x: 0, y: 0, width: 0, height: 0 }; }
function getMatrixData() { return { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }; }

const { sin: sin$3, cos: cos$3, acos, sqrt: sqrt$3 } = Math;
const { float: float$1 } = MathHelper;
const tempPoint$3 = {};
function getWorld() {
    return Object.assign(Object.assign(Object.assign({}, getMatrixData()), getBoundsData()), { scaleX: 1, scaleY: 1, rotation: 0, skewX: 0, skewY: 0 });
}
const MatrixHelper = {
    defaultMatrix: getMatrixData(),
    defaultWorld: getWorld(),
    tempMatrix: {},
    set(t, a = 1, b = 0, c = 0, d = 1, e = 0, f = 0) {
        t.a = a;
        t.b = b;
        t.c = c;
        t.d = d;
        t.e = e;
        t.f = f;
    },
    get: getMatrixData,
    getWorld,
    copy(t, matrix) {
        t.a = matrix.a;
        t.b = matrix.b;
        t.c = matrix.c;
        t.d = matrix.d;
        t.e = matrix.e;
        t.f = matrix.f;
    },
    translate(t, x, y) {
        t.e += x;
        t.f += y;
    },
    translateInner(t, x, y, hasOrigin) {
        t.e += t.a * x + t.c * y;
        t.f += t.b * x + t.d * y;
        if (hasOrigin)
            t.e -= x, t.f -= y;
    },
    scale(t, scaleX, scaleY = scaleX) {
        t.a *= scaleX;
        t.b *= scaleX;
        t.c *= scaleY;
        t.d *= scaleY;
    },
    scaleOfOuter(t, origin, scaleX, scaleY) {
        M$6.toInnerPoint(t, origin, tempPoint$3);
        M$6.scaleOfInner(t, tempPoint$3, scaleX, scaleY);
    },
    scaleOfInner(t, origin, scaleX, scaleY = scaleX) {
        M$6.translateInner(t, origin.x, origin.y);
        M$6.scale(t, scaleX, scaleY);
        M$6.translateInner(t, -origin.x, -origin.y);
    },
    rotate(t, rotation) {
        const { a, b, c, d } = t;
        rotation *= OneRadian;
        const cosR = cos$3(rotation);
        const sinR = sin$3(rotation);
        t.a = a * cosR - b * sinR;
        t.b = a * sinR + b * cosR;
        t.c = c * cosR - d * sinR;
        t.d = c * sinR + d * cosR;
    },
    rotateOfOuter(t, origin, rotation) {
        M$6.toInnerPoint(t, origin, tempPoint$3);
        M$6.rotateOfInner(t, tempPoint$3, rotation);
    },
    rotateOfInner(t, origin, rotation) {
        M$6.translateInner(t, origin.x, origin.y);
        M$6.rotate(t, rotation);
        M$6.translateInner(t, -origin.x, -origin.y);
    },
    skew(t, skewX, skewY) {
        const { a, b, c, d } = t;
        if (skewY) {
            skewY *= OneRadian;
            t.a = a + c * skewY;
            t.b = b + d * skewY;
        }
        if (skewX) {
            skewX *= OneRadian;
            t.c = c + a * skewX;
            t.d = d + b * skewX;
        }
    },
    skewOfOuter(t, origin, skewX, skewY) {
        M$6.toInnerPoint(t, origin, tempPoint$3);
        M$6.skewOfInner(t, tempPoint$3, skewX, skewY);
    },
    skewOfInner(t, origin, skewX, skewY = 0) {
        M$6.translateInner(t, origin.x, origin.y);
        M$6.skew(t, skewX, skewY);
        M$6.translateInner(t, -origin.x, -origin.y);
    },
    multiply(t, child) {
        const { a, b, c, d, e, f } = t;
        t.a = child.a * a + child.b * c;
        t.b = child.a * b + child.b * d;
        t.c = child.c * a + child.d * c;
        t.d = child.c * b + child.d * d;
        t.e = child.e * a + child.f * c + e;
        t.f = child.e * b + child.f * d + f;
    },
    multiplyParent(t, parent, to, abcdChanged, childScaleData, scrollData) {
        let { e, f } = t;
        if (scrollData)
            e += scrollData.scrollX, f += scrollData.scrollY;
        to || (to = t);
        if (abcdChanged === undefined)
            abcdChanged = t.a !== 1 || t.b || t.c || t.d !== 1;
        if (abcdChanged) {
            const { a, b, c, d } = t;
            to.a = a * parent.a + b * parent.c;
            to.b = a * parent.b + b * parent.d;
            to.c = c * parent.a + d * parent.c;
            to.d = c * parent.b + d * parent.d;
            if (childScaleData) {
                to.scaleX = parent.scaleX * childScaleData.scaleX;
                to.scaleY = parent.scaleY * childScaleData.scaleY;
            }
        }
        else {
            to.a = parent.a;
            to.b = parent.b;
            to.c = parent.c;
            to.d = parent.d;
            if (childScaleData) {
                to.scaleX = parent.scaleX;
                to.scaleY = parent.scaleY;
            }
        }
        to.e = e * parent.a + f * parent.c + parent.e;
        to.f = e * parent.b + f * parent.d + parent.f;
    },
    divide(t, child) {
        M$6.multiply(t, M$6.tempInvert(child));
    },
    divideParent(t, parent) {
        M$6.multiplyParent(t, M$6.tempInvert(parent));
    },
    tempInvert(t) {
        const { tempMatrix } = M$6;
        M$6.copy(tempMatrix, t);
        M$6.invert(tempMatrix);
        return tempMatrix;
    },
    invert(t) {
        const { a, b, c, d, e, f } = t;
        if (!b && !c) {
            if (a === 1 && d === 1) {
                t.e = -e;
                t.f = -f;
            }
            else {
                const s = 1 / (a * d);
                t.a = d * s;
                t.d = a * s;
                t.e = -e * d * s;
                t.f = -f * a * s;
            }
        }
        else {
            const s = 1 / (a * d - b * c);
            t.a = d * s;
            t.b = -b * s;
            t.c = -c * s;
            t.d = a * s;
            t.e = -(e * d - f * c) * s;
            t.f = -(f * a - e * b) * s;
        }
    },
    toOuterPoint(t, inner, to, distance) {
        const { x, y } = inner;
        to || (to = inner);
        to.x = x * t.a + y * t.c;
        to.y = x * t.b + y * t.d;
        if (!distance) {
            to.x += t.e;
            to.y += t.f;
        }
    },
    toInnerPoint(t, outer, to, distance) {
        const { a, b, c, d } = t;
        const s = 1 / (a * d - b * c);
        const { x, y } = outer;
        to || (to = outer);
        to.x = (x * d - y * c) * s;
        to.y = (y * a - x * b) * s;
        if (!distance) {
            const { e, f } = t;
            to.x -= (e * d - f * c) * s;
            to.y -= (f * a - e * b) * s;
        }
    },
    setLayout(t, layout, origin, around, bcChanged) {
        const { x, y, scaleX, scaleY } = layout;
        if (bcChanged === undefined)
            bcChanged = layout.rotation || layout.skewX || layout.skewY;
        if (bcChanged) {
            const { rotation, skewX, skewY } = layout;
            const r = rotation * OneRadian;
            const cosR = cos$3(r);
            const sinR = sin$3(r);
            if (skewX || skewY) {
                const sx = skewX * OneRadian;
                const sy = skewY * OneRadian;
                t.a = (cosR + sy * -sinR) * scaleX;
                t.b = (sinR + sy * cosR) * scaleX;
                t.c = (-sinR + sx * cosR) * scaleY;
                t.d = (cosR + sx * sinR) * scaleY;
            }
            else {
                t.a = cosR * scaleX;
                t.b = sinR * scaleX;
                t.c = -sinR * scaleY;
                t.d = cosR * scaleY;
            }
        }
        else {
            t.a = scaleX;
            t.b = 0;
            t.c = 0;
            t.d = scaleY;
        }
        t.e = x;
        t.f = y;
        if (origin = origin || around)
            M$6.translateInner(t, -origin.x, -origin.y, !around);
    },
    getLayout(t, origin, around, firstSkewY) {
        const { a, b, c, d, e, f } = t;
        let x = e, y = f, scaleX, scaleY, rotation, skewX, skewY;
        if (b || c) {
            const s = a * d - b * c;
            if (c && !firstSkewY) {
                scaleX = sqrt$3(a * a + b * b);
                scaleY = s / scaleX;
                const cosR = a / scaleX;
                rotation = b > 0 ? acos(cosR) : -acos(cosR);
            }
            else {
                scaleY = sqrt$3(c * c + d * d);
                scaleX = s / scaleY;
                const cosR = c / scaleY;
                rotation = PI_2 - (d > 0 ? acos(-cosR) : -acos(cosR));
            }
            const cosR = float$1(cos$3(rotation));
            const sinR = sin$3(rotation);
            scaleX = float$1(scaleX), scaleY = float$1(scaleY);
            skewX = cosR ? float$1((c / scaleY + sinR) / cosR / OneRadian, 9) : 0;
            skewY = cosR ? float$1((b / scaleX - sinR) / cosR / OneRadian, 9) : 0;
            rotation = float$1(rotation / OneRadian);
        }
        else {
            scaleX = a;
            scaleY = d;
            rotation = skewX = skewY = 0;
        }
        if (origin = around || origin) {
            x += origin.x * a + origin.y * c;
            y += origin.x * b + origin.y * d;
            if (!around)
                x -= origin.x, y -= origin.y;
        }
        return { x, y, scaleX, scaleY, rotation, skewX, skewY };
    },
    withScale(t, scaleX, scaleY = scaleX) {
        const world = t;
        if (!scaleX || !scaleY) {
            const { a, b, c, d } = t;
            if (b || c) {
                scaleX = sqrt$3(a * a + b * b);
                scaleY = (a * d - b * c) / scaleX;
            }
            else {
                scaleX = a;
                scaleY = d;
            }
        }
        world.scaleX = scaleX;
        world.scaleY = scaleY;
        return world;
    },
    reset(t) {
        M$6.set(t);
    }
};
const M$6 = MatrixHelper;

const { toInnerPoint: toInnerPoint$2, toOuterPoint: toOuterPoint$3 } = MatrixHelper;
const { sin: sin$2, cos: cos$2, abs: abs$2, sqrt: sqrt$2, atan2: atan2$2, min: min$1, PI: PI$1$1 } = Math;
const PointHelper = {
    defaultPoint: getPointData(),
    tempPoint: {},
    tempRadiusPoint: {},
    set(t, x = 0, y = 0) {
        t.x = x;
        t.y = y;
    },
    setRadius(t, x, y) {
        t.radiusX = x;
        t.radiusY = y === undefined ? x : y;
    },
    copy(t, point) {
        t.x = point.x;
        t.y = point.y;
    },
    copyFrom(t, x, y) {
        t.x = x;
        t.y = y;
    },
    move(t, x, y) {
        t.x += x;
        t.y += y;
    },
    scale(t, scaleX, scaleY = scaleX) {
        if (t.x)
            t.x *= scaleX;
        if (t.y)
            t.y *= scaleY;
    },
    scaleOf(t, origin, scaleX, scaleY = scaleX) {
        t.x += (t.x - origin.x) * (scaleX - 1);
        t.y += (t.y - origin.y) * (scaleY - 1);
    },
    rotate(t, rotation, origin) {
        if (!origin)
            origin = P$5.defaultPoint;
        rotation *= OneRadian;
        const cosR = cos$2(rotation);
        const sinR = sin$2(rotation);
        const rx = t.x - origin.x;
        const ry = t.y - origin.y;
        t.x = origin.x + rx * cosR - ry * sinR;
        t.y = origin.y + rx * sinR + ry * cosR;
    },
    tempToInnerOf(t, matrix) {
        const { tempPoint: temp } = P$5;
        copy$7(temp, t);
        toInnerPoint$2(matrix, temp, temp);
        return temp;
    },
    tempToOuterOf(t, matrix) {
        const { tempPoint: temp } = P$5;
        copy$7(temp, t);
        toOuterPoint$3(matrix, temp, temp);
        return temp;
    },
    tempToInnerRadiusPointOf(t, matrix) {
        const { tempRadiusPoint: temp } = P$5;
        copy$7(temp, t);
        P$5.toInnerRadiusPointOf(t, matrix, temp);
        return temp;
    },
    toInnerRadiusPointOf(t, matrix, to) {
        to || (to = t);
        toInnerPoint$2(matrix, t, to);
        to.radiusX = Math.abs(t.radiusX / matrix.scaleX);
        to.radiusY = Math.abs(t.radiusY / matrix.scaleY);
    },
    toInnerOf(t, matrix, to) {
        toInnerPoint$2(matrix, t, to);
    },
    toOuterOf(t, matrix, to) {
        toOuterPoint$3(matrix, t, to);
    },
    getCenter(t, to) {
        return { x: t.x + (to.x - t.x) / 2, y: t.y + (to.y - t.y) / 2 };
    },
    getCenterX(x1, x2) {
        return x1 + (x2 - x1) / 2;
    },
    getCenterY(y1, y2) {
        return y1 + (y2 - y1) / 2;
    },
    getDistance(t, point) {
        return getDistanceFrom(t.x, t.y, point.x, point.y);
    },
    getDistanceFrom(x1, y1, x2, y2) {
        const x = abs$2(x2 - x1);
        const y = abs$2(y2 - y1);
        return sqrt$2(x * x + y * y);
    },
    getMinDistanceFrom(x1, y1, x2, y2, x3, y3) {
        return min$1(getDistanceFrom(x1, y1, x2, y2), getDistanceFrom(x2, y2, x3, y3));
    },
    getAngle(t, to) {
        return getAtan2(t, to) / OneRadian;
    },
    getRotation(t, origin, to, toOrigin) {
        if (!toOrigin)
            toOrigin = origin;
        return P$5.getRadianFrom(t.x, t.y, origin.x, origin.y, to.x, to.y, toOrigin.x, toOrigin.y) / OneRadian;
    },
    getRadianFrom(fromX, fromY, originX, originY, toX, toY, toOriginX, toOriginY) {
        if (toOriginX === undefined)
            toOriginX = originX, toOriginY = originY;
        let fromAngle = atan2$2(fromY - originY, fromX - originX);
        let toAngle = atan2$2(toY - toOriginY, toX - toOriginX);
        const radian = toAngle - fromAngle;
        return radian < -PI$1$1 ? radian + PI2 : radian;
    },
    getAtan2(t, to) {
        return atan2$2(to.y - t.y, to.x - t.x);
    },
    getDistancePoint(t, to, distance, changeTo) {
        const r = getAtan2(t, to);
        to = changeTo ? to : {};
        to.x = t.x + cos$2(r) * distance;
        to.y = t.y + sin$2(r) * distance;
        return to;
    },
    toNumberPoints(originPoints) {
        let points = originPoints;
        if (typeof originPoints[0] === 'object')
            points = [], originPoints.forEach(p => points.push(p.x, p.y));
        return points;
    },
    reset(t) {
    }
};
const P$5 = PointHelper;
const { getDistanceFrom, copy: copy$7, getAtan2 } = P$5;

class Point {
    constructor(x, y) {
        this.set(x, y);
    }
    set(x, y) {
        typeof x === 'object' ? PointHelper.copy(this, x) : PointHelper.set(this, x, y);
        return this;
    }
    get() {
        const { x, y } = this;
        return { x, y };
    }
    clone() {
        return new Point(this);
    }
    move(x, y) {
        PointHelper.move(this, x, y);
        return this;
    }
    scale(scaleX, scaleY) {
        PointHelper.scale(this, scaleX, scaleY);
        return this;
    }
    scaleOf(origin, scaleX, scaleY) {
        PointHelper.scaleOf(this, origin, scaleX, scaleY);
        return this;
    }
    rotate(rotation, origin) {
        PointHelper.rotate(this, rotation, origin);
        return this;
    }
    rotateOf(origin, rotation) {
        PointHelper.rotate(this, rotation, origin);
        return this;
    }
    getRotation(origin, to, toOrigin) {
        return PointHelper.getRotation(this, origin, to, toOrigin);
    }
    toInnerOf(matrix, to) {
        PointHelper.toInnerOf(this, matrix, to);
        return this;
    }
    toOuterOf(matrix, to) {
        PointHelper.toOuterOf(this, matrix, to);
        return this;
    }
    getCenter(to) {
        return new Point(PointHelper.getCenter(this, to));
    }
    getDistance(to) {
        return PointHelper.getDistance(this, to);
    }
    getDistancePoint(to, distance, changeTo) {
        return new Point(PointHelper.getDistancePoint(this, to, distance, changeTo));
    }
    getAngle(to) {
        return PointHelper.getAngle(this, to);
    }
    getAtan2(to) {
        return PointHelper.getAtan2(this, to);
    }
    reset() {
        return this;
    }
}
new Point();

class Matrix {
    constructor(a, b, c, d, e, f) {
        this.set(a, b, c, d, e, f);
    }
    set(a, b, c, d, e, f) {
        typeof a === 'object' ? MatrixHelper.copy(this, a) : MatrixHelper.set(this, a, b, c, d, e, f);
        return this;
    }
    setWith(dataWithScale) {
        MatrixHelper.copy(this, dataWithScale);
        this.scaleX = dataWithScale.scaleX;
        this.scaleY = dataWithScale.scaleY;
        return this;
    }
    get() {
        const { a, b, c, d, e, f } = this;
        return { a, b, c, d, e, f };
    }
    clone() {
        return new Matrix(this);
    }
    translate(x, y) {
        MatrixHelper.translate(this, x, y);
        return this;
    }
    translateInner(x, y) {
        MatrixHelper.translateInner(this, x, y);
        return this;
    }
    scale(x, y) {
        MatrixHelper.scale(this, x, y);
        return this;
    }
    scaleWith(x, y) {
        MatrixHelper.scale(this, x, y);
        this.scaleX *= x;
        this.scaleY *= y || x;
        return this;
    }
    scaleOfOuter(origin, x, y) {
        MatrixHelper.scaleOfOuter(this, origin, x, y);
        return this;
    }
    scaleOfInner(origin, x, y) {
        MatrixHelper.scaleOfInner(this, origin, x, y);
        return this;
    }
    rotate(angle) {
        MatrixHelper.rotate(this, angle);
        return this;
    }
    rotateOfOuter(origin, angle) {
        MatrixHelper.rotateOfOuter(this, origin, angle);
        return this;
    }
    rotateOfInner(origin, angle) {
        MatrixHelper.rotateOfInner(this, origin, angle);
        return this;
    }
    skew(x, y) {
        MatrixHelper.skew(this, x, y);
        return this;
    }
    skewOfOuter(origin, x, y) {
        MatrixHelper.skewOfOuter(this, origin, x, y);
        return this;
    }
    skewOfInner(origin, x, y) {
        MatrixHelper.skewOfInner(this, origin, x, y);
        return this;
    }
    multiply(child) {
        MatrixHelper.multiply(this, child);
        return this;
    }
    multiplyParent(parent) {
        MatrixHelper.multiplyParent(this, parent);
        return this;
    }
    divide(child) {
        MatrixHelper.divide(this, child);
        return this;
    }
    divideParent(parent) {
        MatrixHelper.divideParent(this, parent);
        return this;
    }
    invert() {
        MatrixHelper.invert(this);
        return this;
    }
    invertWith() {
        MatrixHelper.invert(this);
        this.scaleX = 1 / this.scaleX;
        this.scaleY = 1 / this.scaleY;
        return this;
    }
    toOuterPoint(inner, to, distance) {
        MatrixHelper.toOuterPoint(this, inner, to, distance);
    }
    toInnerPoint(outer, to, distance) {
        MatrixHelper.toInnerPoint(this, outer, to, distance);
    }
    setLayout(data, origin, around) {
        MatrixHelper.setLayout(this, data, origin, around);
        return this;
    }
    getLayout(origin, around, firstSkewY) {
        return MatrixHelper.getLayout(this, origin, around, firstSkewY);
    }
    withScale(scaleX, scaleY) {
        return MatrixHelper.withScale(this, scaleX, scaleY);
    }
    reset() {
        MatrixHelper.reset(this);
    }
}
new Matrix();

const TwoPointBoundsHelper = {
    tempPointBounds: {},
    setPoint(t, minX, minY) {
        t.minX = t.maxX = minX;
        t.minY = t.maxY = minY;
    },
    addPoint(t, x, y) {
        t.minX = x < t.minX ? x : t.minX;
        t.minY = y < t.minY ? y : t.minY;
        t.maxX = x > t.maxX ? x : t.maxX;
        t.maxY = y > t.maxY ? y : t.maxY;
    },
    addBounds(t, x, y, width, height) {
        addPoint$3(t, x, y);
        addPoint$3(t, x + width, y + height);
    },
    copy(t, pb) {
        t.minX = pb.minX;
        t.minY = pb.minY;
        t.maxX = pb.maxX;
        t.maxY = pb.maxY;
    },
    addPointBounds(t, pb) {
        t.minX = pb.minX < t.minX ? pb.minX : t.minX;
        t.minY = pb.minY < t.minY ? pb.minY : t.minY;
        t.maxX = pb.maxX > t.maxX ? pb.maxX : t.maxX;
        t.maxY = pb.maxY > t.maxY ? pb.maxY : t.maxY;
    },
    toBounds(t, setBounds) {
        setBounds.x = t.minX;
        setBounds.y = t.minY;
        setBounds.width = t.maxX - t.minX;
        setBounds.height = t.maxY - t.minY;
    }
};
const { addPoint: addPoint$3 } = TwoPointBoundsHelper;

const { tempPointBounds: tempPointBounds$1, setPoint: setPoint$2, addPoint: addPoint$2, toBounds: toBounds$2 } = TwoPointBoundsHelper;
const { toOuterPoint: toOuterPoint$2 } = MatrixHelper;
const { float, fourNumber } = MathHelper;
const { floor, ceil: ceil$1 } = Math;
let right$1, bottom$1, boundsRight, boundsBottom;
const point = {};
const toPoint$2$1 = {};
const BoundsHelper = {
    tempBounds: {},
    set(t, x = 0, y = 0, width = 0, height = 0) {
        t.x = x;
        t.y = y;
        t.width = width;
        t.height = height;
    },
    copy(t, bounds) {
        t.x = bounds.x;
        t.y = bounds.y;
        t.width = bounds.width;
        t.height = bounds.height;
    },
    copyAndSpread(t, bounds, spread, isShrink, side) {
        const { x, y, width, height } = bounds;
        if (spread instanceof Array) {
            const four = fourNumber(spread);
            isShrink
                ? B.set(t, x + four[3], y + four[0], width - four[1] - four[3], height - four[2] - four[0])
                : B.set(t, x - four[3], y - four[0], width + four[1] + four[3], height + four[2] + four[0]);
        }
        else {
            if (isShrink)
                spread = -spread;
            B.set(t, x - spread, y - spread, width + spread * 2, height + spread * 2);
        }
        if (side) {
            if (side === 'width')
                t.y = y, t.height = height;
            else
                t.x = x, t.width = width;
        }
    },
    minX(t) { return t.width > 0 ? t.x : t.x + t.width; },
    minY(t) { return t.height > 0 ? t.y : t.y + t.height; },
    maxX(t) { return t.width > 0 ? t.x + t.width : t.x; },
    maxY(t) { return t.height > 0 ? t.y + t.height : t.y; },
    move(t, x, y) {
        t.x += x;
        t.y += y;
    },
    getByMove(t, x, y) {
        t = Object.assign({}, t);
        B.move(t, x, y);
        return t;
    },
    toOffsetOutBounds(t, to, parent) {
        if (!to) {
            to = t;
        }
        else {
            copy$6(to, t);
        }
        if (parent) {
            to.offsetX = -(B.maxX(parent) - t.x);
            to.offsetY = -(B.maxY(parent) - t.y);
        }
        else {
            to.offsetX = t.x + t.width;
            to.offsetY = t.y + t.height;
        }
        B.move(to, -to.offsetX, -to.offsetY);
    },
    scale(t, scaleX, scaleY = scaleX) {
        PointHelper.scale(t, scaleX, scaleY);
        t.width *= scaleX;
        t.height *= scaleY;
    },
    scaleOf(t, origin, scaleX, scaleY = scaleX) {
        PointHelper.scaleOf(t, origin, scaleX, scaleY);
        t.width *= scaleX;
        t.height *= scaleY;
    },
    tempToOuterOf(t, matrix) {
        B.copy(B.tempBounds, t);
        B.toOuterOf(B.tempBounds, matrix);
        return B.tempBounds;
    },
    getOuterOf(t, matrix) {
        t = Object.assign({}, t);
        B.toOuterOf(t, matrix);
        return t;
    },
    toOuterOf(t, matrix, to) {
        to || (to = t);
        if (matrix.b === 0 && matrix.c === 0) {
            const { a, d } = matrix;
            if (a > 0) {
                to.width = t.width * a;
                to.x = matrix.e + t.x * a;
            }
            else {
                to.width = t.width * -a;
                to.x = matrix.e + t.x * a - to.width;
            }
            if (d > 0) {
                to.height = t.height * d;
                to.y = matrix.f + t.y * d;
            }
            else {
                to.height = t.height * -d;
                to.y = matrix.f + t.y * d - to.height;
            }
        }
        else {
            point.x = t.x;
            point.y = t.y;
            toOuterPoint$2(matrix, point, toPoint$2$1);
            setPoint$2(tempPointBounds$1, toPoint$2$1.x, toPoint$2$1.y);
            point.x = t.x + t.width;
            toOuterPoint$2(matrix, point, toPoint$2$1);
            addPoint$2(tempPointBounds$1, toPoint$2$1.x, toPoint$2$1.y);
            point.y = t.y + t.height;
            toOuterPoint$2(matrix, point, toPoint$2$1);
            addPoint$2(tempPointBounds$1, toPoint$2$1.x, toPoint$2$1.y);
            point.x = t.x;
            toOuterPoint$2(matrix, point, toPoint$2$1);
            addPoint$2(tempPointBounds$1, toPoint$2$1.x, toPoint$2$1.y);
            toBounds$2(tempPointBounds$1, to);
        }
    },
    toInnerOf(t, matrix, to) {
        to || (to = t);
        B.move(to, -matrix.e, -matrix.f);
        B.scale(to, 1 / matrix.a, 1 / matrix.d);
    },
    getFitMatrix(t, put, baseScale = 1) {
        const scale = Math.min(baseScale, Math.min(t.width / put.width, t.height / put.height));
        return new Matrix(scale, 0, 0, scale, -put.x * scale, -put.y * scale);
    },
    getSpread(t, spread, side) {
        const n = {};
        B.copyAndSpread(n, t, spread, false, side);
        return n;
    },
    spread(t, spread, side) {
        B.copyAndSpread(t, t, spread, false, side);
    },
    shrink(t, shrink, side) {
        B.copyAndSpread(t, t, shrink, true, side);
    },
    ceil(t) {
        const { x, y } = t;
        t.x = floor(t.x);
        t.y = floor(t.y);
        t.width = x > t.x ? ceil$1(t.width + x - t.x) : ceil$1(t.width);
        t.height = y > t.y ? ceil$1(t.height + y - t.y) : ceil$1(t.height);
    },
    unsign(t) {
        if (t.width < 0) {
            t.x += t.width;
            t.width = -t.width;
        }
        if (t.height < 0) {
            t.y += t.height;
            t.height = -t.height;
        }
    },
    float(t, maxLength) {
        t.x = float(t.x, maxLength);
        t.y = float(t.y, maxLength);
        t.width = float(t.width, maxLength);
        t.height = float(t.height, maxLength);
    },
    add(t, bounds, isPoint) {
        right$1 = t.x + t.width;
        bottom$1 = t.y + t.height;
        boundsRight = bounds.x;
        boundsBottom = bounds.y;
        if (!isPoint) {
            boundsRight += bounds.width;
            boundsBottom += bounds.height;
        }
        right$1 = right$1 > boundsRight ? right$1 : boundsRight;
        bottom$1 = bottom$1 > boundsBottom ? bottom$1 : boundsBottom;
        t.x = t.x < bounds.x ? t.x : bounds.x;
        t.y = t.y < bounds.y ? t.y : bounds.y;
        t.width = right$1 - t.x;
        t.height = bottom$1 - t.y;
    },
    addList(t, list) {
        B.setListWithFn(t, list, undefined, true);
    },
    setList(t, list, addMode = false) {
        B.setListWithFn(t, list, undefined, addMode);
    },
    addListWithFn(t, list, boundsDataFn) {
        B.setListWithFn(t, list, boundsDataFn, true);
    },
    setListWithFn(t, list, boundsDataFn, addMode = false) {
        let bounds, first = true;
        for (let i = 0, len = list.length; i < len; i++) {
            bounds = boundsDataFn ? boundsDataFn(list[i]) : list[i];
            if (bounds && (bounds.width || bounds.height)) {
                if (first) {
                    first = false;
                    if (!addMode)
                        copy$6(t, bounds);
                }
                else {
                    add$1(t, bounds);
                }
            }
        }
        if (first)
            B.reset(t);
    },
    setPoints(t, points) {
        points.forEach((point, index) => index === 0 ? setPoint$2(tempPointBounds$1, point.x, point.y) : addPoint$2(tempPointBounds$1, point.x, point.y));
        toBounds$2(tempPointBounds$1, t);
    },
    setPoint(t, point) {
        B.set(t, point.x, point.y);
    },
    addPoint(t, point) {
        add$1(t, point, true);
    },
    getPoints(t) {
        const { x, y, width, height } = t;
        return [
            { x, y },
            { x: x + width, y },
            { x: x + width, y: y + height },
            { x, y: y + height }
        ];
    },
    hitRadiusPoint(t, point, pointMatrix) {
        if (pointMatrix)
            point = PointHelper.tempToInnerRadiusPointOf(point, pointMatrix);
        return (point.x >= t.x - point.radiusX && point.x <= t.x + t.width + point.radiusX) && (point.y >= t.y - point.radiusY && point.y <= t.y + t.height + point.radiusY);
    },
    hitPoint(t, point, pointMatrix) {
        if (pointMatrix)
            point = PointHelper.tempToInnerOf(point, pointMatrix);
        return (point.x >= t.x && point.x <= t.x + t.width) && (point.y >= t.y && point.y <= t.y + t.height);
    },
    hit(t, other, otherMatrix) {
        if (otherMatrix)
            other = B.tempToOuterOf(other, otherMatrix);
        return !((t.y + t.height < other.y) || (other.y + other.height < t.y) || (t.x + t.width < other.x) || (other.x + other.width < t.x));
    },
    includes(t, other, otherMatrix) {
        if (otherMatrix)
            other = B.tempToOuterOf(other, otherMatrix);
        return (t.x <= other.x) && (t.y <= other.y) && (t.x + t.width >= other.x + other.width) && (t.y + t.height >= other.y + other.height);
    },
    getIntersectData(t, other, otherMatrix) {
        if (otherMatrix)
            other = B.tempToOuterOf(other, otherMatrix);
        if (!B.hit(t, other))
            return getBoundsData();
        let { x, y, width, height } = other;
        right$1 = x + width;
        bottom$1 = y + height;
        boundsRight = t.x + t.width;
        boundsBottom = t.y + t.height;
        x = x > t.x ? x : t.x;
        y = y > t.y ? y : t.y;
        right$1 = right$1 < boundsRight ? right$1 : boundsRight;
        bottom$1 = bottom$1 < boundsBottom ? bottom$1 : boundsBottom;
        width = right$1 - x;
        height = bottom$1 - y;
        return { x, y, width, height };
    },
    intersect(t, other, otherMatrix) {
        B.copy(t, B.getIntersectData(t, other, otherMatrix));
    },
    isSame(t, bounds) {
        return t.x === bounds.x && t.y === bounds.y && t.width === bounds.width && t.height === bounds.height;
    },
    isEmpty(t) {
        return t.x === 0 && t.y === 0 && t.width === 0 && t.height === 0;
    },
    reset(t) {
        B.set(t);
    }
};
const B = BoundsHelper;
const { add: add$1, copy: copy$6 } = B;

class Bounds {
    get minX() { return BoundsHelper.minX(this); }
    get minY() { return BoundsHelper.minY(this); }
    get maxX() { return BoundsHelper.maxX(this); }
    get maxY() { return BoundsHelper.maxY(this); }
    constructor(x, y, width, height) {
        this.set(x, y, width, height);
    }
    set(x, y, width, height) {
        typeof x === 'object' ? BoundsHelper.copy(this, x) : BoundsHelper.set(this, x, y, width, height);
        return this;
    }
    get() {
        const { x, y, width, height } = this;
        return { x, y, width, height };
    }
    clone() {
        return new Bounds(this);
    }
    move(x, y) {
        BoundsHelper.move(this, x, y);
        return this;
    }
    scale(scaleX, scaleY) {
        BoundsHelper.scale(this, scaleX, scaleY);
        return this;
    }
    scaleOf(origin, scaleX, scaleY) {
        BoundsHelper.scaleOf(this, origin, scaleX, scaleY);
        return this;
    }
    toOuterOf(matrix, to) {
        BoundsHelper.toOuterOf(this, matrix, to);
        return this;
    }
    toInnerOf(matrix, to) {
        BoundsHelper.toInnerOf(this, matrix, to);
        return this;
    }
    getFitMatrix(put, baseScale) {
        return BoundsHelper.getFitMatrix(this, put, baseScale);
    }
    spread(fourNumber, side) {
        BoundsHelper.spread(this, fourNumber, side);
        return this;
    }
    shrink(fourNumber, side) {
        BoundsHelper.shrink(this, fourNumber, side);
        return this;
    }
    ceil() {
        BoundsHelper.ceil(this);
        return this;
    }
    unsign() {
        BoundsHelper.unsign(this);
        return this;
    }
    float(maxLength) {
        BoundsHelper.float(this, maxLength);
        return this;
    }
    add(bounds) {
        BoundsHelper.add(this, bounds);
        return this;
    }
    addList(boundsList) {
        BoundsHelper.setList(this, boundsList, true);
        return this;
    }
    setList(boundsList) {
        BoundsHelper.setList(this, boundsList);
        return this;
    }
    addListWithFn(list, boundsDataFn) {
        BoundsHelper.setListWithFn(this, list, boundsDataFn, true);
        return this;
    }
    setListWithFn(list, boundsDataFn) {
        BoundsHelper.setListWithFn(this, list, boundsDataFn);
        return this;
    }
    setPoint(point) {
        BoundsHelper.setPoint(this, point);
        return this;
    }
    setPoints(points) {
        BoundsHelper.setPoints(this, points);
        return this;
    }
    addPoint(point) {
        BoundsHelper.addPoint(this, point);
        return this;
    }
    getPoints() {
        return BoundsHelper.getPoints(this);
    }
    hitPoint(point, pointMatrix) {
        return BoundsHelper.hitPoint(this, point, pointMatrix);
    }
    hitRadiusPoint(point, pointMatrix) {
        return BoundsHelper.hitRadiusPoint(this, point, pointMatrix);
    }
    hit(bounds, boundsMatrix) {
        return BoundsHelper.hit(this, bounds, boundsMatrix);
    }
    includes(bounds, boundsMatrix) {
        return BoundsHelper.includes(this, bounds, boundsMatrix);
    }
    intersect(bounds, boundsMatrix) {
        BoundsHelper.intersect(this, bounds, boundsMatrix);
        return this;
    }
    getIntersect(bounds, boundsMatrix) {
        return new Bounds(BoundsHelper.getIntersectData(this, bounds, boundsMatrix));
    }
    isSame(bounds) {
        return BoundsHelper.isSame(this, bounds);
    }
    isEmpty() {
        return BoundsHelper.isEmpty(this);
    }
    reset() {
        BoundsHelper.reset(this);
    }
}
const tempBounds$1 = new Bounds();

class AutoBounds {
    constructor(top, right, bottom, left, width, height) {
        typeof top === 'object' ? this.copy(top) : this.set(top, right, bottom, left, width, height);
    }
    set(top = 0, right = 0, bottom = 0, left = 0, width = 0, height = 0) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.width = width;
        this.height = height;
    }
    copy(autoSize) {
        const { top, right, bottom, left, width, height } = autoSize;
        this.set(top, right, bottom, left, width, height);
    }
    getBoundsFrom(parent) {
        const { top, right, bottom, left, width, height } = this;
        return new Bounds(left, top, width ? width : parent.width - left - right, height ? height : parent.height - top - bottom);
    }
}

var Direction4;
(function (Direction4) {
    Direction4[Direction4["top"] = 0] = "top";
    Direction4[Direction4["right"] = 1] = "right";
    Direction4[Direction4["bottom"] = 2] = "bottom";
    Direction4[Direction4["left"] = 3] = "left";
})(Direction4 || (Direction4 = {}));
var Direction9;
(function (Direction9) {
    Direction9[Direction9["topLeft"] = 0] = "topLeft";
    Direction9[Direction9["top"] = 1] = "top";
    Direction9[Direction9["topRight"] = 2] = "topRight";
    Direction9[Direction9["right"] = 3] = "right";
    Direction9[Direction9["bottomRight"] = 4] = "bottomRight";
    Direction9[Direction9["bottom"] = 5] = "bottom";
    Direction9[Direction9["bottomLeft"] = 6] = "bottomLeft";
    Direction9[Direction9["left"] = 7] = "left";
    Direction9[Direction9["center"] = 8] = "center";
    Direction9[Direction9["top-left"] = 0] = "top-left";
    Direction9[Direction9["top-right"] = 2] = "top-right";
    Direction9[Direction9["bottom-right"] = 4] = "bottom-right";
    Direction9[Direction9["bottom-left"] = 6] = "bottom-left";
})(Direction9 || (Direction9 = {}));

const directionData = [
    { x: 0, y: 0 },
    { x: 0.5, y: 0 },
    { x: 1, y: 0 },
    { x: 1, y: 0.5 },
    { x: 1, y: 1 },
    { x: 0.5, y: 1 },
    { x: 0, y: 1 },
    { x: 0, y: 0.5 },
    { x: 0.5, y: 0.5 }
];
directionData.forEach(item => item.type = 'percent');
const AroundHelper = {
    directionData,
    tempPoint: {},
    get: get$4,
    toPoint(around, bounds, to, onlySize, pointBounds) {
        const point = get$4(around);
        to.x = point.x;
        to.y = point.y;
        if (point.type === 'percent') {
            to.x *= bounds.width;
            to.y *= bounds.height;
            if (pointBounds) {
                to.x -= pointBounds.x;
                to.y -= pointBounds.y;
                if (point.x)
                    to.x -= (point.x === 1) ? pointBounds.width : (point.x === 0.5 ? point.x * pointBounds.width : 0);
                if (point.y)
                    to.y -= (point.y === 1) ? pointBounds.height : (point.y === 0.5 ? point.y * pointBounds.height : 0);
            }
        }
        if (!onlySize) {
            to.x += bounds.x;
            to.y += bounds.y;
        }
    }
};
function get$4(around) {
    return typeof around === 'string' ? directionData[Direction9[around]] : around;
}

const { toPoint: toPoint$1$1 } = AroundHelper;
const AlignHelper = {
    toPoint(align, contentBounds, bounds, to, onlySize) {
        toPoint$1$1(align, bounds, to, onlySize, contentBounds);
    }
};

const StringNumberMap = {
    '0': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1,
    '.': 1,
    'e': 1,
    'E': 1
};

class Debug {
    constructor(name) {
        this.repeatMap = {};
        this.name = name;
    }
    static get(name) {
        return new Debug(name);
    }
    static set filter(name) {
        this.filterList = getNameList(name);
    }
    static set exclude(name) {
        this.excludeList = getNameList(name);
    }
    log(...messages) {
        if (D$4.enable) {
            if (D$4.filterList.length && D$4.filterList.every(name => name !== this.name))
                return;
            if (D$4.excludeList.length && D$4.excludeList.some(name => name === this.name))
                return;
            console.log('%c' + this.name, 'color:#21ae62', ...messages);
        }
    }
    tip(...messages) {
        if (D$4.enable)
            this.warn(...messages);
    }
    warn(...messages) {
        if (D$4.showWarn)
            console.warn(this.name, ...messages);
    }
    repeat(name, ...messages) {
        if (!this.repeatMap[name]) {
            this.warn('repeat:' + name, ...messages);
            this.repeatMap[name] = true;
        }
    }
    error(...messages) {
        try {
            throw new Error();
        }
        catch (e) {
            console.error(this.name, ...messages, e);
        }
    }
}
Debug.filterList = [];
Debug.excludeList = [];
Debug.showWarn = true;
function getNameList(name) {
    if (!name)
        name = [];
    else if (typeof name === 'string')
        name = [name];
    return name;
}
const D$4 = Debug;

const debug$9 = Debug.get('RunTime');
const Run = {
    currentId: 0,
    currentName: '',
    idMap: {},
    nameMap: {},
    nameToIdMap: {},
    start(name, microsecond) {
        const id = IncrementId.create(IncrementId.RUNTIME);
        R.currentId = R.idMap[id] = microsecond ? performance.now() : Date.now();
        R.currentName = R.nameMap[id] = name;
        R.nameToIdMap[name] = id;
        return id;
    },
    end(id, microsecond) {
        const time = R.idMap[id], name = R.nameMap[id];
        const duration = microsecond ? (performance.now() - time) / 1000 : Date.now() - time;
        R.idMap[id] = R.nameMap[id] = R.nameToIdMap[name] = undefined;
        debug$9.log(name, duration, 'ms');
    },
    endOfName(name, microsecond) {
        const id = R.nameToIdMap[name];
        if (id !== undefined)
            R.end(id, microsecond);
    }
};
const R = Run;

const check = [];
const Plugin = {
    list: {},
    add(name, ...needPlugins) {
        this.list[name] = true;
        check.push(...needPlugins);
    },
    has(name, tip) {
        const rs = this.list[name];
        if (!rs && tip)
            this.need(name);
        return rs;
    },
    need(name) {
        console.error('need plugin: ' + (name.includes('-x') ? '' : '@leafer-in/') + name);
    }
};
setTimeout(() => check.forEach(name => Plugin.has(name, true)));

const debug$8 = Debug.get('UICreator');
const UICreator = {
    list: {},
    register(UI) {
        const { __tag: tag } = UI.prototype;
        if (list$1[tag])
            debug$8.repeat(tag);
        list$1[tag] = UI;
    },
    get(tag, data, x, y, width, height) {
        if (!list$1[tag])
            debug$8.error('not register ' + tag);
        const ui = new list$1[tag](data);
        if (x !== undefined) {
            ui.x = x;
            if (y)
                ui.y = y;
            if (width)
                ui.width = width;
            if (height)
                ui.height = height;
        }
        return ui;
    }
};
const { list: list$1 } = UICreator;

const debug$7 = Debug.get('EventCreator');
const EventCreator = {
    nameList: {},
    register(Event) {
        let name;
        Object.keys(Event).forEach(key => {
            name = Event[key];
            if (typeof name === 'string')
                nameList[name] && debug$7.repeat(name), nameList[name] = Event;
        });
    },
    changeName(oldName, newName) {
        const Event = nameList[oldName];
        if (Event) {
            const constName = Object.keys(Event).find(key => Event[key] === oldName);
            if (constName) {
                Event[constName] = newName;
                nameList[newName] = Event;
            }
        }
    },
    has(type) {
        return !!this.nameList[type];
    },
    get(type, ...params) {
        return new nameList[type](...params);
    }
};
const { nameList } = EventCreator;

class CanvasManager {
    constructor() {
        this.list = [];
    }
    add(canvas) {
        canvas.manager = this;
        this.list.push(canvas);
    }
    get(size) {
        let old;
        const { list } = this;
        for (let i = 0, len = list.length; i < len; i++) {
            old = list[i];
            if (old.recycled && old.isSameSize(size)) {
                old.recycled = false;
                old.manager || (old.manager = this);
                return old;
            }
        }
        const canvas = Creator.canvas(size);
        this.add(canvas);
        return canvas;
    }
    recycle(old) {
        old.recycled = true;
    }
    clearRecycled() {
        let canvas;
        const filter = [];
        for (let i = 0, len = this.list.length; i < len; i++) {
            canvas = this.list[i];
            canvas.recycled ? canvas.destroy() : filter.push(canvas);
        }
        this.list = filter;
    }
    clear() {
        this.list.forEach(item => { item.destroy(); });
        this.list.length = 0;
    }
    destroy() {
        this.clear();
    }
}

const DataHelper = {
    default(t, defaultData) {
        assign(defaultData, t);
        assign(t, defaultData);
        return t;
    },
    assign(t, merge, exclude) {
        let value;
        Object.keys(merge).forEach(key => {
            var _a, _b;
            value = merge[key];
            if ((value === null || value === void 0 ? void 0 : value.constructor) === Object && ((_a = t[key]) === null || _a === void 0 ? void 0 : _a.constructor) === Object)
                return assign(t[key], merge[key], exclude && exclude[key]);
            if (exclude && (key in exclude)) {
                if (((_b = exclude[key]) === null || _b === void 0 ? void 0 : _b.constructor) === Object)
                    assign(t[key] = {}, merge[key], exclude[key]);
                return;
            }
            t[key] = merge[key];
        });
    },
    copyAttrs(t, from, include) {
        include.forEach(key => {
            if (from[key] !== undefined)
                t[key] = from[key];
        });
        return t;
    },
    clone(data) {
        return JSON.parse(JSON.stringify(data));
    },
    toMap(list) {
        const map = {};
        for (let i = 0, len = list.length; i < len; i++)
            map[list[i]] = true;
        return map;
    }
};
const { assign } = DataHelper;

class LeafData {
    get __useNaturalRatio() { return true; }
    get __isLinePath() {
        const { path } = this;
        return path && path.length === 6 && path[0] === 1;
    }
    get __blendMode() {
        if (this.eraser && this.eraser !== 'path')
            return 'destination-out';
        const { blendMode } = this;
        return blendMode === 'pass-through' ? null : blendMode;
    }
    constructor(leaf) {
        this.__leaf = leaf;
    }
    __get(name) {
        if (this.__input) {
            const value = this.__input[name];
            if (value !== undefined)
                return value;
        }
        return this[name];
    }
    __getData() {
        const data = { tag: this.__leaf.tag }, { __input } = this;
        let inputValue;
        for (let key in this) {
            if (key[0] !== '_') {
                inputValue = __input ? __input[key] : undefined;
                data[key] = (inputValue === undefined) ? this[key] : inputValue;
            }
        }
        return data;
    }
    __setInput(name, value) {
        this.__input || (this.__input = {});
        this.__input[name] = value;
    }
    __getInput(name) {
        if (this.__input) {
            const value = this.__input[name];
            if (value !== undefined)
                return value;
        }
        if (name === 'path' && !this.__pathInputed)
            return;
        return this['_' + name];
    }
    __removeInput(name) {
        if (this.__input && this.__input[name] !== undefined)
            this.__input[name] = undefined;
    }
    __getInputData(names, options) {
        const data = {};
        if (names) {
            if (names instanceof Array) {
                for (let name of names)
                    data[name] = this.__getInput(name);
            }
            else {
                for (let name in names)
                    data[name] = this.__getInput(name);
            }
        }
        else {
            let value, inputValue, { __input } = this;
            data.tag = this.__leaf.tag;
            for (let key in this) {
                if (key[0] !== '_') {
                    value = this['_' + key];
                    if (value !== undefined) {
                        if (key === 'path' && !this.__pathInputed)
                            continue;
                        inputValue = __input ? __input[key] : undefined;
                        data[key] = (inputValue === undefined) ? value : inputValue;
                    }
                }
            }
        }
        if (options) {
            if (options.matrix) {
                const { a, b, c, d, e, f } = this.__leaf.__localMatrix;
                data.matrix = { a, b, c, d, e, f };
            }
        }
        return data;
    }
    __setMiddle(name, value) {
        this.__middle || (this.__middle = {});
        this.__middle[name] = value;
    }
    __getMiddle(name) {
        return this.__middle && this.__middle[name];
    }
    __checkSingle() {
        const t = this;
        if (t.blendMode === 'pass-through') {
            const leaf = this.__leaf;
            if ((t.opacity < 1 && (leaf.isBranch || t.__hasMultiPaint)) || leaf.__hasEraser || t.eraser) {
                t.__single = true;
            }
            else if (t.__single) {
                t.__single = false;
            }
        }
        else {
            t.__single = true;
        }
    }
    __removeNaturalSize() {
        this.__naturalWidth = this.__naturalHeight = undefined;
    }
    destroy() {
        this.__input = this.__middle = null;
    }
}

var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
    Answer[Answer["NoAndSkip"] = 2] = "NoAndSkip";
    Answer[Answer["YesAndSkip"] = 3] = "YesAndSkip";
})(Answer || (Answer = {}));
const emptyData = {};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate$2(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function contextAttr(realName) {
    return (target, key) => {
        if (!realName)
            realName = key;
        Object.defineProperty(target, key, {
            get() { return this.context[realName]; },
            set(value) { this.context[realName] = value; }
        });
    };
}
const contextMethodNameList = [];
function contextMethod() {
    return (_target, key) => {
        contextMethodNameList.push(key);
    };
}
const emptyArray = [];
let Canvas$1 = class Canvas {
    set blendMode(value) {
        if (value === 'normal')
            value = 'source-over';
        this.context.globalCompositeOperation = value;
    }
    get blendMode() {
        return this.context.globalCompositeOperation;
    }
    set dashPattern(value) {
        this.context.setLineDash(value || emptyArray);
    }
    get dashPattern() {
        return this.context.getLineDash();
    }
    __bindContext() {
        let method;
        contextMethodNameList.forEach(name => {
            method = this.context[name];
            if (method)
                this[name] = method.bind(this.context);
        });
        this.textBaseline = "alphabetic";
    }
    setTransform(_a, _b, _c, _d, _e, _f) { }
    resetTransform() { }
    getTransform() { return void 0; }
    save() { }
    restore() { }
    transform(a, b, c, d, e, f) {
        if (typeof a === 'object') {
            this.context.transform(a.a, a.b, a.c, a.d, a.e, a.f);
        }
        else {
            this.context.transform(a, b, c, d, e, f);
        }
    }
    translate(_x, _y) { }
    scale(_x, _y) { }
    rotate(_angle) { }
    fill(_path2d, _rule) { }
    stroke(_path2d) { }
    clip(_path2d, _rule) { }
    fillRect(_x, _y, _width, _height) { }
    strokeRect(_x, _y, _width, _height) { }
    clearRect(_x, _y, _width, _height) { }
    drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
        switch (arguments.length) {
            case 9:
                if (sx < 0) {
                    const d = (-sx / sw) * dw;
                    sw += sx;
                    sx = 0;
                    dx += d;
                    dw -= d;
                }
                if (sy < 0) {
                    const d = (-sy / sh) * dh;
                    sh += sy;
                    sy = 0;
                    dy += d;
                    dh -= d;
                }
                this.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
                break;
            case 5:
                this.context.drawImage(image, sx, sy, sw, sh);
                break;
            case 3:
                this.context.drawImage(image, sx, sy);
        }
    }
    beginPath() { }
    moveTo(_x, _y) { }
    lineTo(_x, _y) { }
    bezierCurveTo(_cp1x, _cp1y, _cp2x, _cp2y, _x, _y) { }
    quadraticCurveTo(_cpx, _cpy, _x, _y) { }
    closePath() { }
    arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) { }
    arcTo(_x1, _y1, _x2, _y2, _radius) { }
    ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) { }
    rect(_x, _y, _width, _height) { }
    roundRect(_x, _y, _width, _height, _radius) { }
    createConicGradient(_startAngle, _x, _y) { return void 0; }
    createLinearGradient(_x0, _y0, _x1, _y1) { return void 0; }
    createPattern(_image, _repetition) { return void 0; }
    createRadialGradient(_x0, _y0, _r0, _x1, _y1, _r1) { return void 0; }
    fillText(_text, _x, _y, _maxWidth) { }
    measureText(_text) { return void 0; }
    strokeText(_text, _x, _y, _maxWidth) { }
    destroy() {
        this.context = null;
    }
};
__decorate$2([
    contextAttr('imageSmoothingEnabled')
], Canvas$1.prototype, "smooth", void 0);
__decorate$2([
    contextAttr('imageSmoothingQuality')
], Canvas$1.prototype, "smoothLevel", void 0);
__decorate$2([
    contextAttr('globalAlpha')
], Canvas$1.prototype, "opacity", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "fillStyle", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "strokeStyle", void 0);
__decorate$2([
    contextAttr('lineWidth')
], Canvas$1.prototype, "strokeWidth", void 0);
__decorate$2([
    contextAttr('lineCap')
], Canvas$1.prototype, "strokeCap", void 0);
__decorate$2([
    contextAttr('lineJoin')
], Canvas$1.prototype, "strokeJoin", void 0);
__decorate$2([
    contextAttr('lineDashOffset')
], Canvas$1.prototype, "dashOffset", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "miterLimit", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "shadowBlur", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "shadowColor", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "shadowOffsetX", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "shadowOffsetY", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "filter", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "font", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "fontKerning", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "fontStretch", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "fontVariantCaps", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "textAlign", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "textBaseline", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "textRendering", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "wordSpacing", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "letterSpacing", void 0);
__decorate$2([
    contextAttr()
], Canvas$1.prototype, "direction", void 0);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "setTransform", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "resetTransform", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "getTransform", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "save", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "restore", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "translate", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "scale", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "rotate", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "fill", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "stroke", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "clip", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "fillRect", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "strokeRect", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "clearRect", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "beginPath", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "moveTo", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "lineTo", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "bezierCurveTo", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "quadraticCurveTo", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "closePath", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "arc", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "arcTo", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "ellipse", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "rect", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "roundRect", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "createConicGradient", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "createLinearGradient", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "createPattern", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "createRadialGradient", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "fillText", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "measureText", null);
__decorate$2([
    contextMethod()
], Canvas$1.prototype, "strokeText", null);

const { copy: copy$5 } = MatrixHelper;
const minSize = { width: 1, height: 1, pixelRatio: 1 };
const canvasSizeAttrs = ['width', 'height', 'pixelRatio'];
class LeaferCanvasBase extends Canvas$1 {
    get width() { return this.size.width; }
    get height() { return this.size.height; }
    get pixelRatio() { return this.size.pixelRatio; }
    get pixelWidth() { return this.width * this.pixelRatio; }
    get pixelHeight() { return this.height * this.pixelRatio; }
    get allowBackgroundColor() { return this.view && this.parentView; }
    constructor(config, manager) {
        super();
        this.size = {};
        this.worldTransform = {};
        if (!config)
            config = minSize;
        if (!config.pixelRatio)
            config.pixelRatio = Platform.devicePixelRatio;
        this.manager = manager;
        this.innerId = IncrementId.create(IncrementId.CNAVAS);
        const { width, height, pixelRatio } = config;
        this.autoLayout = !width || !height;
        this.size.pixelRatio = pixelRatio;
        this.config = config;
        this.init();
    }
    init() { }
    __createContext() {
        const { view } = this;
        const { contextSettings } = this.config;
        this.context = contextSettings ? view.getContext('2d', contextSettings) : view.getContext('2d');
        this.__bindContext();
    }
    export(_filename, _options) { return undefined; }
    toBlob(_type, _quality) { return undefined; }
    toDataURL(_type, _quality) { return undefined; }
    saveAs(_filename, _quality) { return undefined; }
    resize(size, safeResize = true) {
        if (this.isSameSize(size))
            return;
        let takeCanvas;
        if (this.context && !this.unreal && safeResize && this.width) {
            takeCanvas = this.getSameCanvas();
            takeCanvas.copyWorld(this);
        }
        const s = this.size;
        DataHelper.copyAttrs(s, size, canvasSizeAttrs);
        canvasSizeAttrs.forEach(key => s[key] || (s[key] = 1));
        this.bounds = new Bounds(0, 0, this.width, this.height);
        if (this.context && !this.unreal) {
            this.updateViewSize();
            this.smooth = this.config.smooth;
        }
        this.updateClientBounds();
        if (this.context && !this.unreal && takeCanvas) {
            this.clearWorld(takeCanvas.bounds);
            this.copyWorld(takeCanvas);
            takeCanvas.recycle();
        }
    }
    updateViewSize() { }
    updateClientBounds() { }
    getClientBounds(update) {
        if (update)
            this.updateClientBounds();
        return this.clientBounds || this.bounds;
    }
    startAutoLayout(_autoBounds, _listener) { }
    stopAutoLayout() { }
    setCursor(_cursor) { }
    setWorld(matrix, parentMatrix) {
        const { pixelRatio } = this;
        const w = this.worldTransform;
        if (parentMatrix) {
            const { a, b, c, d, e, f } = parentMatrix;
            this.setTransform(w.a = ((matrix.a * a) + (matrix.b * c)) * pixelRatio, w.b = ((matrix.a * b) + (matrix.b * d)) * pixelRatio, w.c = ((matrix.c * a) + (matrix.d * c)) * pixelRatio, w.d = ((matrix.c * b) + (matrix.d * d)) * pixelRatio, w.e = (((matrix.e * a) + (matrix.f * c) + e)) * pixelRatio, w.f = (((matrix.e * b) + (matrix.f * d) + f)) * pixelRatio);
        }
        else {
            this.setTransform(w.a = matrix.a * pixelRatio, w.b = matrix.b * pixelRatio, w.c = matrix.c * pixelRatio, w.d = matrix.d * pixelRatio, w.e = matrix.e * pixelRatio, w.f = matrix.f * pixelRatio);
        }
    }
    useWorldTransform(worldTransform) {
        if (worldTransform)
            this.worldTransform = worldTransform;
        const w = this.worldTransform;
        if (w)
            this.setTransform(w.a, w.b, w.c, w.d, w.e, w.f);
    }
    setStroke(color, strokeWidth, options) {
        if (strokeWidth)
            this.strokeWidth = strokeWidth;
        if (color)
            this.strokeStyle = color;
        if (options)
            this.setStrokeOptions(options);
    }
    setStrokeOptions(options) {
        this.strokeCap = options.strokeCap === 'none' ? 'butt' : options.strokeCap;
        this.strokeJoin = options.strokeJoin;
        this.dashPattern = options.dashPattern;
        this.dashOffset = options.dashOffset;
        this.miterLimit = options.miterLimit;
    }
    saveBlendMode(blendMode) {
        this.savedBlendMode = this.blendMode;
        this.blendMode = blendMode;
    }
    restoreBlendMode() {
        this.blendMode = this.savedBlendMode;
    }
    hitFill(_point, _fillRule) { return true; }
    hitStroke(_point, _strokeWidth) { return true; }
    hitPixel(_radiusPoint, _offset, _scale = 1) { return true; }
    setWorldShadow(x, y, blur, color) {
        const { pixelRatio } = this;
        this.shadowOffsetX = x * pixelRatio;
        this.shadowOffsetY = y * pixelRatio;
        this.shadowBlur = blur * pixelRatio;
        this.shadowColor = color || 'black';
    }
    setWorldBlur(blur) {
        const { pixelRatio } = this;
        this.filter = `blur(${blur * pixelRatio}px)`;
    }
    copyWorld(canvas, from, to, blendMode) {
        if (blendMode)
            this.blendMode = blendMode;
        if (from) {
            const { pixelRatio } = this;
            if (!to)
                to = from;
            this.drawImage(canvas.view, from.x * pixelRatio, from.y * pixelRatio, from.width * pixelRatio, from.height * pixelRatio, to.x * pixelRatio, to.y * pixelRatio, to.width * pixelRatio, to.height * pixelRatio);
        }
        else {
            this.drawImage(canvas.view, 0, 0);
        }
        if (blendMode)
            this.blendMode = 'source-over';
    }
    copyWorldToInner(canvas, fromWorld, toInnerBounds, blendMode) {
        if (blendMode)
            this.blendMode = blendMode;
        if (fromWorld.b || fromWorld.c) {
            this.save();
            this.resetTransform();
            this.copyWorld(canvas, fromWorld, BoundsHelper.tempToOuterOf(toInnerBounds, fromWorld));
            this.restore();
        }
        else {
            const { pixelRatio } = this;
            this.drawImage(canvas.view, fromWorld.x * pixelRatio, fromWorld.y * pixelRatio, fromWorld.width * pixelRatio, fromWorld.height * pixelRatio, toInnerBounds.x, toInnerBounds.y, toInnerBounds.width, toInnerBounds.height);
        }
        if (blendMode)
            this.blendMode = 'source-over';
    }
    copyWorldByReset(canvas, from, to, blendMode, onlyResetTransform) {
        this.resetTransform();
        this.copyWorld(canvas, from, to, blendMode);
        if (!onlyResetTransform)
            this.useWorldTransform();
    }
    useGrayscaleAlpha(bounds) {
        this.setTempBounds(bounds, true, true);
        let alpha, pixel;
        const { context } = this, imageData = context.getImageData(tempBounds$1.x, tempBounds$1.y, tempBounds$1.width, tempBounds$1.height), { data } = imageData;
        for (let i = 0, len = data.length; i < len; i += 4) {
            pixel = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
            if (alpha = data[i + 3])
                data[i + 3] = alpha === 255 ? pixel : alpha * (pixel / 255);
        }
        context.putImageData(imageData, tempBounds$1.x, tempBounds$1.y);
    }
    useMask(maskCanvas, fromBounds, toBounds) {
        this.copyWorld(maskCanvas, fromBounds, toBounds, 'destination-in');
    }
    useEraser(eraserCanvas, fromBounds, toBounds) {
        this.copyWorld(eraserCanvas, fromBounds, toBounds, 'destination-out');
    }
    fillWorld(bounds, color, blendMode) {
        if (blendMode)
            this.blendMode = blendMode;
        this.fillStyle = color;
        this.setTempBounds(bounds);
        this.fillRect(tempBounds$1.x, tempBounds$1.y, tempBounds$1.width, tempBounds$1.height);
        if (blendMode)
            this.blendMode = 'source-over';
    }
    strokeWorld(bounds, color, blendMode) {
        if (blendMode)
            this.blendMode = blendMode;
        this.strokeStyle = color;
        this.setTempBounds(bounds);
        this.strokeRect(tempBounds$1.x, tempBounds$1.y, tempBounds$1.width, tempBounds$1.height);
        if (blendMode)
            this.blendMode = 'source-over';
    }
    clearWorld(bounds, ceilPixel) {
        this.setTempBounds(bounds, ceilPixel);
        this.clearRect(tempBounds$1.x, tempBounds$1.y, tempBounds$1.width, tempBounds$1.height);
    }
    clipWorld(bounds, ceilPixel) {
        this.beginPath();
        this.setTempBounds(bounds, ceilPixel);
        this.rect(tempBounds$1.x, tempBounds$1.y, tempBounds$1.width, tempBounds$1.height);
        this.clip();
    }
    clear() {
        const { pixelRatio } = this;
        this.clearRect(0, 0, this.width * pixelRatio + 2, this.height * pixelRatio + 2);
    }
    setTempBounds(bounds, ceil, intersect) {
        tempBounds$1.set(bounds);
        if (intersect)
            tempBounds$1.intersect(this.bounds);
        tempBounds$1.scale(this.pixelRatio);
        if (ceil)
            tempBounds$1.ceil();
    }
    isSameSize(size) {
        return this.width === size.width && this.height === size.height && this.pixelRatio === size.pixelRatio;
    }
    getSameCanvas(useSameWorldTransform, useSameSmooth) {
        const canvas = this.manager ? this.manager.get(this.size) : Creator.canvas(Object.assign({}, this.size));
        canvas.save();
        if (useSameWorldTransform)
            copy$5(canvas.worldTransform, this.worldTransform), canvas.useWorldTransform();
        if (useSameSmooth)
            canvas.smooth = this.smooth;
        return canvas;
    }
    recycle(clearBounds) {
        if (!this.recycled) {
            this.restore();
            clearBounds ? this.clearWorld(clearBounds, true) : this.clear();
            this.manager ? this.manager.recycle(this) : this.destroy();
        }
    }
    updateRender(_bounds) { }
    unrealCanvas() { }
    destroy() {
        this.manager = this.view = this.parentView = null;
    }
}

const PathHelper = {
    creator: {},
    parse(_pathString, _curveMode) { return undefined; },
    convertToCanvasData(_old, _curveMode) { return undefined; }
};

const CanvasCommandOnlyMap = {
    N: 21,
    D: 22,
    X: 23,
    G: 24,
    F: 25,
    O: 26,
    P: 27,
    U: 28
};
const PathCommandMap = Object.assign({ M: 1, m: 10, L: 2, l: 20, H: 3, h: 30, V: 4, v: 40, C: 5, c: 50, S: 6, s: 60, Q: 7, q: 70, T: 8, t: 80, A: 9, a: 90, Z: 11, z: 11, R: 12 }, CanvasCommandOnlyMap);
const PathCommandLengthMap = {
    M: 3,
    m: 3,
    L: 3,
    l: 3,
    H: 2,
    h: 2,
    V: 2,
    v: 2,
    C: 7,
    c: 7,
    S: 5,
    s: 5,
    Q: 5,
    q: 5,
    T: 3,
    t: 3,
    A: 8,
    a: 8,
    Z: 1,
    z: 1,
    N: 5,
    D: 9,
    X: 6,
    G: 9,
    F: 5,
    O: 7,
    P: 4,
    U: 6
};
const NeedConvertToCanvasCommandMap = {
    m: 10,
    l: 20,
    H: 3,
    h: 30,
    V: 4,
    v: 40,
    c: 50,
    S: 6,
    s: 60,
    q: 70,
    T: 8,
    t: 80,
    A: 9,
    a: 90,
};
const NeedConvertToCurveCommandMap = Object.assign(Object.assign({}, NeedConvertToCanvasCommandMap), CanvasCommandOnlyMap);
const P$4 = PathCommandMap;
const PathNumberCommandMap = {};
for (let key in P$4) {
    PathNumberCommandMap[P$4[key]] = key;
}
const PathNumberCommandLengthMap = {};
for (let key in P$4) {
    PathNumberCommandLengthMap[P$4[key]] = PathCommandLengthMap[key];
}

const RectHelper = {
    drawRoundRect(drawer, x, y, width, height, cornerRadius) {
        const data = MathHelper.fourNumber(cornerRadius, Math.min(width / 2, height / 2));
        const right = x + width;
        const bottom = y + height;
        data[0] ? drawer.moveTo(x + data[0], y) : drawer.moveTo(x, y);
        data[1] ? drawer.arcTo(right, y, right, bottom, data[1]) : drawer.lineTo(right, y);
        data[2] ? drawer.arcTo(right, bottom, x, bottom, data[2]) : drawer.lineTo(right, bottom);
        data[3] ? drawer.arcTo(x, bottom, x, y, data[3]) : drawer.lineTo(x, bottom);
        data[0] ? drawer.arcTo(x, y, right, y, data[0]) : drawer.lineTo(x, y);
    }
};

const { sin: sin$1$1, cos: cos$1$1, atan2: atan2$1, ceil: ceil$2, abs: abs$1$1, PI: PI$3, sqrt: sqrt$1, pow } = Math;
const { setPoint: setPoint$1, addPoint: addPoint$1 } = TwoPointBoundsHelper;
const { set, toNumberPoints } = PointHelper;
const { M: M$5, L: L$6, C: C$5, Q: Q$4, Z: Z$5 } = PathCommandMap;
const tempPoint$1 = {};
const BezierHelper = {
    points(data, originPoints, curve, close) {
        let points = toNumberPoints(originPoints);
        data.push(M$5, points[0], points[1]);
        if (curve && points.length > 5) {
            let aX, aY, bX, bY, cX, cY, c1X, c1Y, c2X, c2Y;
            let ba, cb, d, len = points.length;
            const t = curve === true ? 0.5 : curve;
            if (close) {
                points = [points[len - 2], points[len - 1], ...points, points[0], points[1], points[2], points[3]];
                len = points.length;
            }
            for (let i = 2; i < len - 2; i += 2) {
                aX = points[i - 2];
                aY = points[i - 1];
                bX = points[i];
                bY = points[i + 1];
                cX = points[i + 2];
                cY = points[i + 3];
                ba = sqrt$1(pow(bX - aX, 2) + pow(bY - aY, 2));
                cb = sqrt$1(pow(cX - bX, 2) + pow(cY - bY, 2));
                d = ba + cb;
                ba = (t * ba) / d;
                cb = (t * cb) / d;
                cX -= aX;
                cY -= aY;
                c1X = bX - ba * cX;
                c1Y = bY - ba * cY;
                if (i === 2) {
                    if (!close)
                        data.push(Q$4, c1X, c1Y, bX, bY);
                }
                else {
                    data.push(C$5, c2X, c2Y, c1X, c1Y, bX, bY);
                }
                c2X = bX + cb * cX;
                c2Y = bY + cb * cY;
            }
            if (!close)
                data.push(Q$4, c2X, c2Y, points[len - 2], points[len - 1]);
        }
        else {
            for (let i = 2, len = points.length; i < len; i += 2) {
                data.push(L$6, points[i], points[i + 1]);
            }
        }
        if (close)
            data.push(Z$5);
    },
    rect(data, x, y, width, height) {
        PathHelper.creator.path = data;
        PathHelper.creator.moveTo(x, y).lineTo(x + width, y).lineTo(x + width, y + height).lineTo(x, y + height).lineTo(x, y);
    },
    roundRect(data, x, y, width, height, radius) {
        PathHelper.creator.path = [];
        RectHelper.drawRoundRect(PathHelper.creator, x, y, width, height, radius);
        data.push(...PathHelper.convertToCanvasData(PathHelper.creator.path, true));
    },
    arcTo(data, fromX, fromY, x1, y1, toX, toY, radius, setPointBounds, setEndPoint, setStartPoint) {
        const BAx = x1 - fromX;
        const BAy = y1 - fromY;
        const CBx = toX - x1;
        const CBy = toY - y1;
        let startRadian = atan2$1(BAy, BAx);
        let endRadian = atan2$1(CBy, CBx);
        let totalRadian = endRadian - startRadian;
        if (totalRadian < 0)
            totalRadian += PI2;
        if (totalRadian === PI$3 || (abs$1$1(BAx + BAy) < 1.e-12) || (abs$1$1(CBx + CBy) < 1.e-12)) {
            if (data)
                data.push(L$6, x1, y1);
            if (setPointBounds) {
                setPoint$1(setPointBounds, fromX, fromY);
                addPoint$1(setPointBounds, x1, y1);
            }
            if (setStartPoint)
                set(setStartPoint, fromX, fromY);
            if (setEndPoint)
                set(setEndPoint, x1, y1);
            return;
        }
        const anticlockwise = BAx * CBy - CBx * BAy < 0;
        const sign = anticlockwise ? -1 : 1;
        const c = radius / cos$1$1(totalRadian / 2);
        const centerX = x1 + c * cos$1$1(startRadian + totalRadian / 2 + PI_2 * sign);
        const centerY = y1 + c * sin$1$1(startRadian + totalRadian / 2 + PI_2 * sign);
        startRadian -= PI_2 * sign;
        endRadian -= PI_2 * sign;
        return ellipse$5(data, centerX, centerY, radius, radius, 0, startRadian / OneRadian, endRadian / OneRadian, anticlockwise, setPointBounds, setEndPoint, setStartPoint);
    },
    arc(data, x, y, radius, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint) {
        return ellipse$5(data, x, y, radius, radius, 0, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint);
    },
    ellipse(data, cx, cy, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise, setPointBounds, setEndPoint, setStartPoint) {
        const rotationRadian = rotation * OneRadian;
        const rotationSin = sin$1$1(rotationRadian);
        const rotationCos = cos$1$1(rotationRadian);
        let startRadian = startAngle * OneRadian;
        let endRadian = endAngle * OneRadian;
        if (startRadian > PI$3)
            startRadian -= PI2;
        if (endRadian < 0)
            endRadian += PI2;
        let totalRadian = endRadian - startRadian;
        if (totalRadian < 0)
            totalRadian += PI2;
        else if (totalRadian > PI2)
            totalRadian -= PI2;
        if (anticlockwise)
            totalRadian -= PI2;
        const parts = ceil$2(abs$1$1(totalRadian / PI_2));
        const partRadian = totalRadian / parts;
        const partRadian4Sin = sin$1$1(partRadian / 4);
        const control = 8 / 3 * partRadian4Sin * partRadian4Sin / sin$1$1(partRadian / 2);
        endRadian = startRadian + partRadian;
        let startCos = cos$1$1(startRadian);
        let startSin = sin$1$1(startRadian);
        let endCos, endSin;
        let x, y, x1, y1, x2, y2;
        let startX = x = rotationCos * radiusX * startCos - rotationSin * radiusY * startSin;
        let startY = y = rotationSin * radiusX * startCos + rotationCos * radiusY * startSin;
        let fromX = cx + x, fromY = cy + y;
        if (data)
            data.push(data.length ? L$6 : M$5, fromX, fromY);
        if (setPointBounds)
            setPoint$1(setPointBounds, fromX, fromY);
        if (setStartPoint)
            set(setStartPoint, fromX, fromY);
        for (let i = 0; i < parts; i++) {
            endCos = cos$1$1(endRadian);
            endSin = sin$1$1(endRadian);
            x = rotationCos * radiusX * endCos - rotationSin * radiusY * endSin;
            y = rotationSin * radiusX * endCos + rotationCos * radiusY * endSin;
            x1 = cx + startX - control * (rotationCos * radiusX * startSin + rotationSin * radiusY * startCos);
            y1 = cy + startY - control * (rotationSin * radiusX * startSin - rotationCos * radiusY * startCos);
            x2 = cx + x + control * (rotationCos * radiusX * endSin + rotationSin * radiusY * endCos);
            y2 = cy + y + control * (rotationSin * radiusX * endSin - rotationCos * radiusY * endCos);
            if (data)
                data.push(C$5, x1, y1, x2, y2, cx + x, cy + y);
            if (setPointBounds)
                toTwoPointBounds$1(cx + startX, cy + startY, x1, y1, x2, y2, cx + x, cy + y, setPointBounds, true);
            startX = x;
            startY = y;
            startCos = endCos;
            startSin = endSin;
            startRadian = endRadian;
            endRadian += partRadian;
        }
        if (setEndPoint)
            set(setEndPoint, cx + x, cy + y);
    },
    quadraticCurveTo(data, fromX, fromY, x1, y1, toX, toY) {
        data.push(C$5, (fromX + 2 * x1) / 3, (fromY + 2 * y1) / 3, (toX + 2 * x1) / 3, (toY + 2 * y1) / 3, toX, toY);
    },
    toTwoPointBoundsByQuadraticCurve(fromX, fromY, x1, y1, toX, toY, pointBounds, addMode) {
        toTwoPointBounds$1(fromX, fromY, (fromX + 2 * x1) / 3, (fromY + 2 * y1) / 3, (toX + 2 * x1) / 3, (toY + 2 * y1) / 3, toX, toY, pointBounds, addMode);
    },
    toTwoPointBounds(fromX, fromY, x1, y1, x2, y2, toX, toY, pointBounds, addMode) {
        const tList = [];
        let a, b, c, t, t1, t2, v, sqrtV;
        let f = fromX, z1 = x1, z2 = x2, o = toX;
        for (let i = 0; i < 2; ++i) {
            if (i == 1) {
                f = fromY, z1 = y1, z2 = y2, o = toY;
            }
            a = -3 * f + 9 * z1 - 9 * z2 + 3 * o;
            b = 6 * f - 12 * z1 + 6 * z2;
            c = 3 * z1 - 3 * f;
            if (Math.abs(a) < 1e-12) {
                if (Math.abs(b) < 1e-12)
                    continue;
                t = -c / b;
                if (0 < t && t < 1)
                    tList.push(t);
                continue;
            }
            v = b * b - 4 * c * a;
            sqrtV = Math.sqrt(v);
            if (v < 0)
                continue;
            t1 = (-b + sqrtV) / (2 * a);
            if (0 < t1 && t1 < 1)
                tList.push(t1);
            t2 = (-b - sqrtV) / (2 * a);
            if (0 < t2 && t2 < 1)
                tList.push(t2);
        }
        addMode ? addPoint$1(pointBounds, fromX, fromY) : setPoint$1(pointBounds, fromX, fromY);
        addPoint$1(pointBounds, toX, toY);
        for (let i = 0, len = tList.length; i < len; i++) {
            getPointAndSet(tList[i], fromX, fromY, x1, y1, x2, y2, toX, toY, tempPoint$1);
            addPoint$1(pointBounds, tempPoint$1.x, tempPoint$1.y);
        }
    },
    getPointAndSet(t, fromX, fromY, x1, y1, x2, y2, toX, toY, setPoint) {
        const o = 1 - t, a = o * o * o, b = 3 * o * o * t, c = 3 * o * t * t, d = t * t * t;
        setPoint.x = a * fromX + b * x1 + c * x2 + d * toX;
        setPoint.y = a * fromY + b * y1 + c * y2 + d * toY;
    },
    getPoint(t, fromX, fromY, x1, y1, x2, y2, toX, toY) {
        const point = {};
        getPointAndSet(t, fromX, fromY, x1, y1, x2, y2, toX, toY, point);
        return point;
    }
};
const { getPointAndSet, toTwoPointBounds: toTwoPointBounds$1, ellipse: ellipse$5 } = BezierHelper;

const { sin: sin$4, cos: cos$4, sqrt, atan2 } = Math;
const { ellipse: ellipse$4 } = BezierHelper;
const EllipseHelper = {
    ellipticalArc(data, fromX, fromY, radiusX, radiusY, rotation, largeFlag, sweepFlag, toX, toY, curveMode) {
        const halfX = (toX - fromX) / 2;
        const halfY = (toY - fromY) / 2;
        const rotationRadian = rotation * OneRadian;
        const rotationSin = sin$4(rotationRadian);
        const rotationCos = cos$4(rotationRadian);
        const px = -rotationCos * halfX - rotationSin * halfY;
        const py = -rotationCos * halfY + rotationSin * halfX;
        const rxSquare = radiusX * radiusX;
        const rySquare = radiusY * radiusY;
        const pySquare = py * py;
        const pxSquare = px * px;
        const a = rxSquare * rySquare - rxSquare * pySquare - rySquare * pxSquare;
        let s = 0;
        if (a < 0) {
            const t = sqrt(1 - a / (rxSquare * rySquare));
            radiusX *= t;
            radiusY *= t;
        }
        else {
            s = (largeFlag === sweepFlag ? -1 : 1) * sqrt(a / (rxSquare * pySquare + rySquare * pxSquare));
        }
        const cx = s * radiusX * py / radiusY;
        const cy = -s * radiusY * px / radiusX;
        const startRadian = atan2((py - cy) / radiusY, (px - cx) / radiusX);
        const endRadian = atan2((-py - cy) / radiusY, (-px - cx) / radiusX);
        let totalRadian = endRadian - startRadian;
        if (sweepFlag === 0 && totalRadian > 0) {
            totalRadian -= PI2;
        }
        else if (sweepFlag === 1 && totalRadian < 0) {
            totalRadian += PI2;
        }
        const centerX = fromX + halfX + rotationCos * cx - rotationSin * cy;
        const centerY = fromY + halfY + rotationSin * cx + rotationCos * cy;
        const anticlockwise = totalRadian < 0 ? 1 : 0;
        if (curveMode || Platform.ellipseToCurve) {
            ellipse$4(data, centerX, centerY, radiusX, radiusY, rotation, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
        }
        else {
            if (radiusX === radiusY && !rotation) {
                data.push(PathCommandMap.O, centerX, centerY, radiusX, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
            }
            else {
                data.push(PathCommandMap.G, centerX, centerY, radiusX, radiusY, rotation, startRadian / OneRadian, endRadian / OneRadian, anticlockwise);
            }
        }
    }
};

const { M: M$4, m, L: L$5, l, H, h, V, v, C: C$4, c, S, s, Q: Q$3, q, T, t, A, a, Z: Z$4, z, N: N$3, D: D$3, X: X$3, G: G$3, F: F$4, O: O$3, P: P$3, U: U$3 } = PathCommandMap;
const { rect: rect$1$1, roundRect: roundRect$2, arcTo: arcTo$3, arc: arc$3, ellipse: ellipse$3, quadraticCurveTo: quadraticCurveTo$1 } = BezierHelper;
const { ellipticalArc } = EllipseHelper;
const debug$6 = Debug.get('PathConvert');
const setEndPoint$1 = {};
const PathConvert = {
    current: { dot: 0 },
    stringify(data, floatLength) {
        let i = 0, len = data.length, count, str = '', command, lastCommand;
        while (i < len) {
            command = data[i];
            count = PathNumberCommandLengthMap[command];
            if (command === lastCommand) {
                str += ' ';
            }
            else {
                str += PathNumberCommandMap[command];
            }
            for (let j = 1; j < count; j++) {
                str += MathHelper.float(data[i + j], floatLength);
                (j === count - 1) || (str += ' ');
            }
            lastCommand = command;
            i += count;
        }
        return str;
    },
    parse(pathString, curveMode) {
        let needConvert, char, lastChar, num = '';
        const data = [];
        const convertCommand = curveMode ? NeedConvertToCurveCommandMap : NeedConvertToCanvasCommandMap;
        for (let i = 0, len = pathString.length; i < len; i++) {
            char = pathString[i];
            if (StringNumberMap[char]) {
                if (char === '.') {
                    if (current.dot) {
                        pushData(data, num);
                        num = '';
                    }
                    current.dot++;
                }
                if (num === '0' && char !== '.') {
                    pushData(data, num);
                    num = '';
                }
                num += char;
            }
            else if (PathCommandMap[char]) {
                if (num) {
                    pushData(data, num);
                    num = '';
                }
                current.name = PathCommandMap[char];
                current.length = PathCommandLengthMap[char];
                current.index = 0;
                pushData(data, current.name);
                if (!needConvert && convertCommand[char])
                    needConvert = true;
            }
            else {
                if (char === '-' || char === '+') {
                    if (lastChar === 'e' || lastChar === 'E') {
                        num += char;
                    }
                    else {
                        if (num)
                            pushData(data, num);
                        num = char;
                    }
                }
                else {
                    if (num) {
                        pushData(data, num);
                        num = '';
                    }
                }
            }
            lastChar = char;
        }
        if (num)
            pushData(data, num);
        return needConvert ? PathConvert.toCanvasData(data, curveMode) : data;
    },
    toCanvasData(old, curveMode) {
        let x = 0, y = 0, x1 = 0, y1 = 0, i = 0, len = old.length, controlX, controlY, command, lastCommand, smooth;
        const data = [];
        while (i < len) {
            command = old[i];
            switch (command) {
                case m:
                    old[i + 1] += x;
                    old[i + 2] += y;
                case M$4:
                    x = old[i + 1];
                    y = old[i + 2];
                    data.push(M$4, x, y);
                    i += 3;
                    break;
                case h:
                    old[i + 1] += x;
                case H:
                    x = old[i + 1];
                    data.push(L$5, x, y);
                    i += 2;
                    break;
                case v:
                    old[i + 1] += y;
                case V:
                    y = old[i + 1];
                    data.push(L$5, x, y);
                    i += 2;
                    break;
                case l:
                    old[i + 1] += x;
                    old[i + 2] += y;
                case L$5:
                    x = old[i + 1];
                    y = old[i + 2];
                    data.push(L$5, x, y);
                    i += 3;
                    break;
                case s:
                    old[i + 1] += x;
                    old[i + 2] += y;
                    old[i + 3] += x;
                    old[i + 4] += y;
                    command = S;
                case S:
                    smooth = (lastCommand === C$4) || (lastCommand === S);
                    x1 = smooth ? (x * 2 - controlX) : old[i + 1];
                    y1 = smooth ? (y * 2 - controlY) : old[i + 2];
                    controlX = old[i + 1];
                    controlY = old[i + 2];
                    x = old[i + 3];
                    y = old[i + 4];
                    data.push(C$4, x1, y1, controlX, controlY, x, y);
                    i += 5;
                    break;
                case c:
                    old[i + 1] += x;
                    old[i + 2] += y;
                    old[i + 3] += x;
                    old[i + 4] += y;
                    old[i + 5] += x;
                    old[i + 6] += y;
                    command = C$4;
                case C$4:
                    controlX = old[i + 3];
                    controlY = old[i + 4];
                    x = old[i + 5];
                    y = old[i + 6];
                    data.push(C$4, old[i + 1], old[i + 2], controlX, controlY, x, y);
                    i += 7;
                    break;
                case t:
                    old[i + 1] += x;
                    old[i + 2] += y;
                    command = T;
                case T:
                    smooth = (lastCommand === Q$3) || (lastCommand === T);
                    controlX = smooth ? (x * 2 - controlX) : old[i + 1];
                    controlY = smooth ? (y * 2 - controlY) : old[i + 2];
                    curveMode ? quadraticCurveTo$1(data, x, y, controlX, controlY, old[i + 1], old[i + 2]) : data.push(Q$3, controlX, controlY, old[i + 1], old[i + 2]);
                    x = old[i + 1];
                    y = old[i + 2];
                    i += 3;
                    break;
                case q:
                    old[i + 1] += x;
                    old[i + 2] += y;
                    old[i + 3] += x;
                    old[i + 4] += y;
                    command = Q$3;
                case Q$3:
                    controlX = old[i + 1];
                    controlY = old[i + 2];
                    curveMode ? quadraticCurveTo$1(data, x, y, controlX, controlY, old[i + 3], old[i + 4]) : data.push(Q$3, controlX, controlY, old[i + 3], old[i + 4]);
                    x = old[i + 3];
                    y = old[i + 4];
                    i += 5;
                    break;
                case a:
                    old[i + 6] += x;
                    old[i + 7] += y;
                case A:
                    ellipticalArc(data, x, y, old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], old[i + 7], curveMode);
                    x = old[i + 6];
                    y = old[i + 7];
                    i += 8;
                    break;
                case z:
                case Z$4:
                    data.push(Z$4);
                    i++;
                    break;
                case N$3:
                    x = old[i + 1];
                    y = old[i + 2];
                    curveMode ? rect$1$1(data, x, y, old[i + 3], old[i + 4]) : copyData(data, old, i, 5);
                    i += 5;
                    break;
                case D$3:
                    x = old[i + 1];
                    y = old[i + 2];
                    curveMode ? roundRect$2(data, x, y, old[i + 3], old[i + 4], [old[i + 5], old[i + 6], old[i + 7], old[i + 8]]) : copyData(data, old, i, 9);
                    i += 9;
                    break;
                case X$3:
                    x = old[i + 1];
                    y = old[i + 2];
                    curveMode ? roundRect$2(data, x, y, old[i + 3], old[i + 4], old[i + 5]) : copyData(data, old, i, 6);
                    i += 6;
                    break;
                case G$3:
                    ellipse$3(curveMode ? data : copyData(data, old, i, 9), old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], old[i + 7], old[i + 8], null, setEndPoint$1);
                    x = setEndPoint$1.x;
                    y = setEndPoint$1.y;
                    i += 9;
                    break;
                case F$4:
                    curveMode ? ellipse$3(data, old[i + 1], old[i + 2], old[i + 3], old[i + 4], 0, 0, 360, false) : copyData(data, old, i, 5);
                    x = old[i + 1] + old[i + 3];
                    y = old[i + 2];
                    i += 5;
                    break;
                case O$3:
                    arc$3(curveMode ? data : copyData(data, old, i, 7), old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], old[i + 6], null, setEndPoint$1);
                    x = setEndPoint$1.x;
                    y = setEndPoint$1.y;
                    i += 7;
                    break;
                case P$3:
                    curveMode ? arc$3(data, old[i + 1], old[i + 2], old[i + 3], 0, 360, false) : copyData(data, old, i, 4);
                    x = old[i + 1] + old[i + 3];
                    y = old[i + 2];
                    i += 4;
                    break;
                case U$3:
                    arcTo$3(curveMode ? data : copyData(data, old, i, 6), x, y, old[i + 1], old[i + 2], old[i + 3], old[i + 4], old[i + 5], null, setEndPoint$1);
                    x = setEndPoint$1.x;
                    y = setEndPoint$1.y;
                    i += 6;
                    break;
                default:
                    debug$6.error(`command: ${command} [index:${i}]`, old);
                    return data;
            }
            lastCommand = command;
        }
        return data;
    },
    objectToCanvasData(list) {
        const data = [];
        list.forEach(item => {
            switch (item.name) {
                case 'M':
                    data.push(M$4, item.x, item.y);
                    break;
                case 'L':
                    data.push(L$5, item.x, item.y);
                    break;
                case 'C':
                    data.push(C$4, item.x1, item.y1, item.x2, item.y2, item.x, item.y);
                    break;
                case 'Q':
                    data.push(Q$3, item.x1, item.y1, item.x, item.y);
                    break;
                case 'Z': data.push(Z$4);
            }
        });
        return data;
    },
    copyData(data, old, index, count) {
        for (let i = index, end = index + count; i < end; i++) {
            data.push(old[i]);
        }
    },
    pushData(data, strNum) {
        if (current.index === current.length) {
            current.index = 1;
            data.push(current.name);
        }
        data.push(Number(strNum));
        current.index++;
        current.dot = 0;
    }
};
const { current, pushData, copyData } = PathConvert;

const { M: M$3, L: L$4, C: C$3, Q: Q$2, Z: Z$3, N: N$2, D: D$2, X: X$2, G: G$2, F: F$3, O: O$2, P: P$2, U: U$2 } = PathCommandMap;
const { getMinDistanceFrom, getRadianFrom } = PointHelper;
const { tan, min, abs: abs$3 } = Math;
const startPoint = {};
const PathCommandDataHelper = {
    beginPath(data) {
        data.length = 0;
    },
    moveTo(data, x, y) {
        data.push(M$3, x, y);
    },
    lineTo(data, x, y) {
        data.push(L$4, x, y);
    },
    bezierCurveTo(data, x1, y1, x2, y2, x, y) {
        data.push(C$3, x1, y1, x2, y2, x, y);
    },
    quadraticCurveTo(data, x1, y1, x, y) {
        data.push(Q$2, x1, y1, x, y);
    },
    closePath(data) {
        data.push(Z$3);
    },
    rect(data, x, y, width, height) {
        data.push(N$2, x, y, width, height);
    },
    roundRect(data, x, y, width, height, cornerRadius) {
        if (typeof cornerRadius === 'number') {
            data.push(X$2, x, y, width, height, cornerRadius);
        }
        else {
            const fourCorners = MathHelper.fourNumber(cornerRadius);
            if (fourCorners) {
                data.push(D$2, x, y, width, height, ...fourCorners);
            }
            else {
                data.push(N$2, x, y, width, height);
            }
        }
    },
    ellipse(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
        if (rotation === undefined) {
            data.push(F$3, x, y, radiusX, radiusY);
        }
        else {
            if (startAngle === undefined)
                startAngle = 0;
            if (endAngle === undefined)
                endAngle = 360;
            data.push(G$2, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise ? 1 : 0);
        }
    },
    arc(data, x, y, radius, startAngle, endAngle, anticlockwise) {
        if (startAngle === undefined) {
            data.push(P$2, x, y, radius);
        }
        else {
            if (endAngle === undefined)
                endAngle = 360;
            data.push(O$2, x, y, radius, startAngle, endAngle, anticlockwise ? 1 : 0);
        }
    },
    arcTo(data, x1, y1, x2, y2, radius, lastX, lastY) {
        if (lastX !== undefined) {
            const maxRadius = tan(getRadianFrom(lastX, lastY, x1, y1, x2, y2) / 2) * (getMinDistanceFrom(lastX, lastY, x1, y1, x2, y2) / 2);
            data.push(U$2, x1, y1, x2, y2, min(radius, abs$3(maxRadius)));
        }
        else {
            data.push(U$2, x1, y1, x2, y2, radius);
        }
    },
    drawEllipse(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
        BezierHelper.ellipse(null, x, y, radiusX, radiusY, rotation === undefined ? 0 : rotation, startAngle === undefined ? 0 : startAngle, endAngle === undefined ? 360 : endAngle, anticlockwise, null, null, startPoint);
        data.push(M$3, startPoint.x, startPoint.y);
        ellipse$2(data, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    },
    drawArc(data, x, y, radius, startAngle, endAngle, anticlockwise) {
        BezierHelper.arc(null, x, y, radius, startAngle === undefined ? 0 : startAngle, endAngle === undefined ? 360 : endAngle, anticlockwise, null, null, startPoint);
        data.push(M$3, startPoint.x, startPoint.y);
        arc$2(data, x, y, radius, startAngle, endAngle, anticlockwise);
    },
    drawPoints(data, points, curve, close) {
        BezierHelper.points(data, points, curve, close);
    }
};
const { ellipse: ellipse$2, arc: arc$2 } = PathCommandDataHelper;

const { moveTo: moveTo$4, lineTo: lineTo$3, quadraticCurveTo, bezierCurveTo, closePath: closePath$3, beginPath, rect: rect$2, roundRect: roundRect$1, ellipse: ellipse$1, arc: arc$1, arcTo: arcTo$2, drawEllipse, drawArc, drawPoints: drawPoints$2 } = PathCommandDataHelper;
class PathCreator {
    set path(value) { this.__path = value; }
    get path() { return this.__path; }
    constructor(path) {
        this.set(path);
    }
    set(path) {
        if (path) {
            this.__path = typeof path === 'string' ? PathHelper.parse(path) : path;
        }
        else {
            this.__path = [];
        }
        return this;
    }
    beginPath() {
        beginPath(this.__path);
        this.paint();
        return this;
    }
    moveTo(x, y) {
        moveTo$4(this.__path, x, y);
        this.paint();
        return this;
    }
    lineTo(x, y) {
        lineTo$3(this.__path, x, y);
        this.paint();
        return this;
    }
    bezierCurveTo(x1, y1, x2, y2, x, y) {
        bezierCurveTo(this.__path, x1, y1, x2, y2, x, y);
        this.paint();
        return this;
    }
    quadraticCurveTo(x1, y1, x, y) {
        quadraticCurveTo(this.__path, x1, y1, x, y);
        this.paint();
        return this;
    }
    closePath() {
        closePath$3(this.__path);
        this.paint();
        return this;
    }
    rect(x, y, width, height) {
        rect$2(this.__path, x, y, width, height);
        this.paint();
        return this;
    }
    roundRect(x, y, width, height, cornerRadius) {
        roundRect$1(this.__path, x, y, width, height, cornerRadius);
        this.paint();
        return this;
    }
    ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
        ellipse$1(this.__path, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        this.paint();
        return this;
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
        arc$1(this.__path, x, y, radius, startAngle, endAngle, anticlockwise);
        this.paint();
        return this;
    }
    arcTo(x1, y1, x2, y2, radius) {
        arcTo$2(this.__path, x1, y1, x2, y2, radius);
        this.paint();
        return this;
    }
    drawEllipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
        drawEllipse(this.__path, x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
        this.paint();
        return this;
    }
    drawArc(x, y, radius, startAngle, endAngle, anticlockwise) {
        drawArc(this.__path, x, y, radius, startAngle, endAngle, anticlockwise);
        this.paint();
        return this;
    }
    drawPoints(points, curve, close) {
        drawPoints$2(this.__path, points, curve, close);
        this.paint();
        return this;
    }
    clearPath() {
        return this.beginPath();
    }
    paint() { }
}

const { M: M$2, L: L$3, C: C$2, Q: Q$1, Z: Z$2, N: N$1, D: D$1, X: X$1, G: G$1, F: F$2, O: O$1, P: P$1, U: U$1 } = PathCommandMap;
const debug$5 = Debug.get('PathDrawer');
const PathDrawer = {
    drawPathByData(drawer, data) {
        if (!data)
            return;
        let command;
        let i = 0, len = data.length;
        while (i < len) {
            command = data[i];
            switch (command) {
                case M$2:
                    drawer.moveTo(data[i + 1], data[i + 2]);
                    i += 3;
                    break;
                case L$3:
                    drawer.lineTo(data[i + 1], data[i + 2]);
                    i += 3;
                    break;
                case C$2:
                    drawer.bezierCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
                    i += 7;
                    break;
                case Q$1:
                    drawer.quadraticCurveTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
                    i += 5;
                    break;
                case Z$2:
                    drawer.closePath();
                    i += 1;
                    break;
                case N$1:
                    drawer.rect(data[i + 1], data[i + 2], data[i + 3], data[i + 4]);
                    i += 5;
                    break;
                case D$1:
                    drawer.roundRect(data[i + 1], data[i + 2], data[i + 3], data[i + 4], [data[i + 5], data[i + 6], data[i + 7], data[i + 8]]);
                    i += 9;
                    break;
                case X$1:
                    drawer.roundRect(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5]);
                    i += 6;
                    break;
                case G$1:
                    drawer.ellipse(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5] * OneRadian, data[i + 6] * OneRadian, data[i + 7] * OneRadian, data[i + 8]);
                    i += 9;
                    break;
                case F$2:
                    drawer.ellipse(data[i + 1], data[i + 2], data[i + 3], data[i + 4], 0, 0, PI2, false);
                    i += 5;
                    break;
                case O$1:
                    drawer.arc(data[i + 1], data[i + 2], data[i + 3], data[i + 4] * OneRadian, data[i + 5] * OneRadian, data[i + 6]);
                    i += 7;
                    break;
                case P$1:
                    drawer.arc(data[i + 1], data[i + 2], data[i + 3], 0, PI2, false);
                    i += 4;
                    break;
                case U$1:
                    drawer.arcTo(data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5]);
                    i += 6;
                    break;
                default:
                    debug$5.error(`command: ${command} [index:${i}]`, data);
                    return;
            }
        }
    }
};

const { M: M$1, L: L$2, C: C$1, Q, Z: Z$1, N, D, X, G, F: F$1, O, P, U } = PathCommandMap;
const { toTwoPointBounds, toTwoPointBoundsByQuadraticCurve, arcTo: arcTo$1, arc, ellipse: ellipse$6 } = BezierHelper;
const { addPointBounds, copy: copy$4, addPoint, setPoint, addBounds, toBounds: toBounds$1 } = TwoPointBoundsHelper;
const debug$4$1 = Debug.get('PathBounds');
let radius, radiusX, radiusY;
const tempPointBounds = {};
const setPointBounds = {};
const setEndPoint = {};
const PathBounds = {
    toBounds(data, setBounds) {
        PathBounds.toTwoPointBounds(data, setPointBounds);
        toBounds$1(setPointBounds, setBounds);
    },
    toTwoPointBounds(data, setPointBounds) {
        if (!data || !data.length)
            return setPoint(setPointBounds, 0, 0);
        let i = 0, x = 0, y = 0, x1, y1, toX, toY, command;
        const len = data.length;
        while (i < len) {
            command = data[i];
            if (i === 0) {
                if (command === Z$1 || command === C$1 || command === Q) {
                    setPoint(setPointBounds, x, y);
                }
                else {
                    setPoint(setPointBounds, data[i + 1], data[i + 2]);
                }
            }
            switch (command) {
                case M$1:
                case L$2:
                    x = data[i + 1];
                    y = data[i + 2];
                    addPoint(setPointBounds, x, y);
                    i += 3;
                    break;
                case C$1:
                    toX = data[i + 5];
                    toY = data[i + 6];
                    toTwoPointBounds(x, y, data[i + 1], data[i + 2], data[i + 3], data[i + 4], toX, toY, tempPointBounds);
                    addPointBounds(setPointBounds, tempPointBounds);
                    x = toX;
                    y = toY;
                    i += 7;
                    break;
                case Q:
                    x1 = data[i + 1];
                    y1 = data[i + 2];
                    toX = data[i + 3];
                    toY = data[i + 4];
                    toTwoPointBoundsByQuadraticCurve(x, y, x1, y1, toX, toY, tempPointBounds);
                    addPointBounds(setPointBounds, tempPointBounds);
                    x = toX;
                    y = toY;
                    i += 5;
                    break;
                case Z$1:
                    i += 1;
                    break;
                case N:
                    x = data[i + 1];
                    y = data[i + 2];
                    addBounds(setPointBounds, x, y, data[i + 3], data[i + 4]);
                    i += 5;
                    break;
                case D:
                case X:
                    x = data[i + 1];
                    y = data[i + 2];
                    addBounds(setPointBounds, x, y, data[i + 3], data[i + 4]);
                    i += (command === D ? 9 : 6);
                    break;
                case G:
                    ellipse$6(null, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], data[i + 7], data[i + 8], tempPointBounds, setEndPoint);
                    i === 0 ? copy$4(setPointBounds, tempPointBounds) : addPointBounds(setPointBounds, tempPointBounds);
                    x = setEndPoint.x;
                    y = setEndPoint.y;
                    i += 9;
                    break;
                case F$1:
                    x = data[i + 1];
                    y = data[i + 2];
                    radiusX = data[i + 3];
                    radiusY = data[i + 4];
                    addBounds(setPointBounds, x - radiusX, y - radiusY, radiusX * 2, radiusY * 2);
                    x += radiusX;
                    i += 5;
                    break;
                case O:
                    arc(null, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6], tempPointBounds, setEndPoint);
                    i === 0 ? copy$4(setPointBounds, tempPointBounds) : addPointBounds(setPointBounds, tempPointBounds);
                    x = setEndPoint.x;
                    y = setEndPoint.y;
                    i += 7;
                    break;
                case P:
                    x = data[i + 1];
                    y = data[i + 2];
                    radius = data[i + 3];
                    addBounds(setPointBounds, x - radius, y - radius, radius * 2, radius * 2);
                    x += radius;
                    i += 4;
                    break;
                case U:
                    arcTo$1(null, x, y, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], tempPointBounds, setEndPoint);
                    i === 0 ? copy$4(setPointBounds, tempPointBounds) : addPointBounds(setPointBounds, tempPointBounds);
                    x = setEndPoint.x;
                    y = setEndPoint.y;
                    i += 6;
                    break;
                default:
                    debug$4$1.error(`command: ${command} [index:${i}]`, data);
                    return;
            }
        }
    }
};

const { M, L: L$1, C, Z } = PathCommandMap;
const { getCenterX, getCenterY } = PointHelper;
const { arcTo } = PathCommandDataHelper;
const PathCorner = {
    smooth(data, cornerRadius, _cornerSmoothing) {
        let command;
        let i = 0, x = 0, y = 0, startX = 0, startY = 0, secondX = 0, secondY = 0, lastX = 0, lastY = 0;
        const len = data.length;
        const smooth = [];
        while (i < len) {
            command = data[i];
            switch (command) {
                case M:
                    startX = lastX = data[i + 1];
                    startY = lastY = data[i + 2];
                    i += 3;
                    if (data[i] === L$1) {
                        secondX = data[i + 1];
                        secondY = data[i + 2];
                        smooth.push(M, getCenterX(startX, secondX), getCenterY(startY, secondY));
                    }
                    else {
                        smooth.push(M, startX, startY);
                    }
                    break;
                case L$1:
                    x = data[i + 1];
                    y = data[i + 2];
                    i += 3;
                    switch (data[i]) {
                        case L$1:
                            arcTo(smooth, x, y, data[i + 1], data[i + 2], cornerRadius, lastX, lastY);
                            break;
                        case Z:
                            arcTo(smooth, x, y, startX, startY, cornerRadius, lastX, lastY);
                            break;
                        default:
                            smooth.push(L$1, x, y);
                    }
                    lastX = x;
                    lastY = y;
                    break;
                case C:
                    smooth.push(C, data[i + 1], data[i + 2], data[i + 3], data[i + 4], data[i + 5], data[i + 6]);
                    i += 7;
                    break;
                case Z:
                    arcTo(smooth, startX, startY, secondX, secondY, cornerRadius, lastX, lastY);
                    smooth.push(Z);
                    i += 1;
                    break;
            }
        }
        if (command !== Z) {
            smooth[1] = startX;
            smooth[2] = startY;
        }
        return smooth;
    }
};

PathHelper.creator = new PathCreator();
PathHelper.parse = PathConvert.parse;
PathHelper.convertToCanvasData = PathConvert.toCanvasData;
const pen = new PathCreator();

const { drawRoundRect } = RectHelper;
function roundRect(drawer) {
    if (drawer && !drawer.roundRect) {
        drawer.roundRect = function (x, y, width, height, cornerRadius) {
            drawRoundRect(this, x, y, width, height, cornerRadius);
        };
    }
}

function canvasPatch(drawer) {
    roundRect(drawer);
}

const FileHelper = {
    opacityTypes: ['png', 'webp', 'svg'],
    upperCaseTypeMap: {},
    mineType(type) {
        if (!type || type.startsWith('image'))
            return type;
        if (type === 'jpg')
            type = 'jpeg';
        return 'image/' + type;
    },
    fileType(filename) {
        const l = filename.split('.');
        return l[l.length - 1];
    },
    isOpaqueImage(filename) {
        const type = F.fileType(filename);
        return ['jpg', 'jpeg'].some(item => item === type);
    },
    getExportOptions(options) {
        switch (typeof options) {
            case 'object': return options;
            case 'number': return { quality: options };
            case 'boolean': return { blob: options };
            default: return {};
        }
    }
};
const F = FileHelper;
F.opacityTypes.forEach(type => F.upperCaseTypeMap[type] = type.toUpperCase());

const debug$3$1 = Debug.get('TaskProcessor');
class TaskItem {
    constructor(task) {
        this.parallel = true;
        this.time = 1;
        this.id = IncrementId.create(IncrementId.TASK);
        this.task = task;
    }
    run() {
        return __awaiter$1(this, void 0, void 0, function* () {
            try {
                if (this.task && !this.isComplete && this.parent.running)
                    yield this.task();
            }
            catch (error) {
                debug$3$1.error(error);
            }
        });
    }
    complete() {
        this.isComplete = true;
        this.parent = null;
        this.task = null;
    }
    cancel() {
        this.isCancel = true;
        this.complete();
    }
}

class TaskProcessor {
    get total() { return this.list.length + this.delayNumber; }
    get finishedIndex() {
        return this.isComplete ? 0 : this.index + this.parallelSuccessNumber;
    }
    get remain() {
        return this.isComplete ? this.total : this.total - this.finishedIndex;
    }
    get percent() {
        const { total } = this;
        let totalTime = 0, runTime = 0;
        for (let i = 0; i < total; i++) {
            if (i <= this.finishedIndex) {
                runTime += this.list[i].time;
                if (i === this.finishedIndex)
                    totalTime = runTime;
            }
            else {
                totalTime += this.list[i].time;
            }
        }
        return this.isComplete ? 1 : (runTime / totalTime);
    }
    constructor(config) {
        this.config = { parallel: 6 };
        this.list = [];
        this.running = false;
        this.isComplete = true;
        this.index = 0;
        this.delayNumber = 0;
        if (config)
            DataHelper.assign(this.config, config);
        this.empty();
    }
    add(taskCallback, options) {
        let start, parallel, time, delay;
        const task = new TaskItem(taskCallback);
        task.parent = this;
        if (typeof options === 'number') {
            delay = options;
        }
        else if (options) {
            parallel = options.parallel;
            start = options.start;
            time = options.time;
            delay = options.delay;
        }
        if (time)
            task.time = time;
        if (parallel === false)
            task.parallel = false;
        if (delay === undefined) {
            this.push(task, start);
        }
        else {
            this.delayNumber++;
            setTimeout(() => {
                if (this.delayNumber) {
                    this.delayNumber--;
                    this.push(task, start);
                }
            }, delay);
        }
        this.isComplete = false;
        return task;
    }
    push(task, start) {
        this.list.push(task);
        if (start !== false && !this.timer) {
            this.timer = setTimeout(() => this.start());
        }
    }
    empty() {
        this.index = 0;
        this.parallelSuccessNumber = 0;
        this.list = [];
        this.parallelList = [];
        this.delayNumber = 0;
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.isComplete = false;
            this.run();
        }
    }
    pause() {
        clearTimeout(this.timer);
        this.timer = null;
        this.running = false;
    }
    resume() {
        this.start();
    }
    skip() {
        this.index++;
        this.resume();
    }
    stop() {
        this.isComplete = true;
        this.list.forEach(task => { if (!task.isComplete)
            task.cancel(); });
        this.pause();
        this.empty();
    }
    run() {
        if (!this.running)
            return;
        this.setParallelList();
        if (this.parallelList.length > 1) {
            this.runParallelTasks();
        }
        else {
            this.remain ? this.runTask() : this.onComplete();
        }
    }
    runTask() {
        const task = this.list[this.index];
        if (!task) {
            this.nextTask();
            return;
        }
        task.run().then(() => {
            this.onTask(task);
            this.index++;
            this.nextTask();
        }).catch(error => {
            this.onError(error);
        });
    }
    runParallelTasks() {
        this.parallelList.forEach(task => this.runParallelTask(task));
    }
    runParallelTask(task) {
        task.run().then(() => {
            this.onTask(task);
            this.fillParallelTask();
        }).catch(error => {
            this.onParallelError(error);
        });
    }
    nextTask() {
        if (this.total === this.finishedIndex) {
            this.onComplete();
        }
        else {
            this.timer = setTimeout(() => this.run());
        }
    }
    setParallelList() {
        let task;
        this.parallelList = [];
        this.parallelSuccessNumber = 0;
        let end = this.index + this.config.parallel;
        if (end > this.list.length)
            end = this.list.length;
        for (let i = this.index; i < end; i++) {
            task = this.list[i];
            if (task.parallel) {
                this.parallelList.push(task);
            }
            else {
                break;
            }
        }
    }
    fillParallelTask() {
        let task;
        const parallelList = this.parallelList;
        this.parallelSuccessNumber++;
        parallelList.pop();
        const parallelWaitNumber = parallelList.length;
        const nextIndex = this.finishedIndex + parallelWaitNumber;
        if (parallelList.length) {
            if (!this.running)
                return;
            if (nextIndex < this.total) {
                task = this.list[nextIndex];
                if (task && task.parallel) {
                    parallelList.push(task);
                    this.runParallelTask(task);
                }
            }
        }
        else {
            this.index += this.parallelSuccessNumber;
            this.parallelSuccessNumber = 0;
            this.nextTask();
        }
    }
    onComplete() {
        this.stop();
        if (this.config.onComplete)
            this.config.onComplete();
    }
    onTask(task) {
        task.complete();
        if (this.config.onTask)
            this.config.onTask();
    }
    onParallelError(error) {
        this.parallelList.forEach(task => {
            task.parallel = false;
        });
        this.parallelList.length = 0;
        this.parallelSuccessNumber = 0;
        this.onError(error);
    }
    onError(error) {
        this.pause();
        if (this.config.onError)
            this.config.onError(error);
    }
    destroy() {
        this.stop();
    }
}

const ImageManager = {
    map: {},
    recycledList: [],
    tasker: new TaskProcessor(),
    patternTasker: new TaskProcessor(),
    get isComplete() { return I$2.tasker.isComplete; },
    get(config) {
        let image = I$2.map[config.url];
        if (!image) {
            image = Creator.image(config);
            I$2.map[config.url] = image;
        }
        image.use++;
        return image;
    },
    recycle(image) {
        image.use--;
        setTimeout(() => { if (!image.use)
            I$2.recycledList.push(image); });
    },
    clearRecycled() {
        const list = I$2.recycledList;
        if (list.length > 100) {
            list.forEach(image => {
                if (!image.use && image.url) {
                    delete I$2.map[image.url];
                    image.destroy();
                }
            });
            list.length = 0;
        }
    },
    hasOpacityPixel(config) {
        return FileHelper.opacityTypes.some(item => I$2.isFormat(item, config));
    },
    isFormat(format, config) {
        if (config.format === format)
            return true;
        const { url } = config;
        if (url.startsWith('data:')) {
            if (url.startsWith('data:' + FileHelper.mineType(format)))
                return true;
        }
        else {
            if (url.includes('.' + format) || url.includes('.' + FileHelper.upperCaseTypeMap[format]))
                return true;
            else if (format === 'png' && !url.includes('.'))
                return true;
        }
        return false;
    },
    destroy() {
        I$2.map = {};
        I$2.recycledList = [];
    }
};
const I$2 = ImageManager;

const { IMAGE, create: create$1 } = IncrementId;
class LeaferImage {
    get url() { return this.config.url; }
    get completed() { return this.ready || !!this.error; }
    constructor(config) {
        this.use = 0;
        this.waitComplete = [];
        this.innerId = create$1(IMAGE);
        this.config = config || { url: '' };
        this.isSVG = ImageManager.isFormat('svg', config);
        this.hasOpacityPixel = ImageManager.hasOpacityPixel(config);
    }
    load(onSuccess, onError) {
        if (!this.loading) {
            this.loading = true;
            ImageManager.tasker.add(() => __awaiter$1(this, void 0, void 0, function* () {
                return yield Platform.origin.loadImage(this.url).then((img) => {
                    this.ready = true;
                    this.width = img.naturalWidth || img.width;
                    this.height = img.naturalHeight || img.height;
                    this.view = img;
                    this.onComplete(true);
                }).catch((e) => {
                    this.error = e;
                    this.onComplete(false);
                });
            }));
        }
        this.waitComplete.push(onSuccess, onError);
        return this.waitComplete.length - 2;
    }
    unload(index, stopEvent) {
        const l = this.waitComplete;
        if (stopEvent) {
            const error = l[index + 1];
            if (error)
                error({ type: 'stop' });
        }
        l[index] = l[index + 1] = undefined;
    }
    onComplete(isSuccess) {
        let odd;
        this.waitComplete.forEach((item, index) => {
            odd = index % 2;
            if (item) {
                if (isSuccess) {
                    if (!odd)
                        item(this);
                }
                else {
                    if (odd)
                        item(this.error);
                }
            }
        });
        this.waitComplete.length = 0;
        this.loading = false;
    }
    getCanvas(width, height, opacity, _filters) {
        width || (width = this.width);
        height || (height = this.height);
        if (this.cache) {
            let { params, data } = this.cache;
            for (let i in params) {
                if (params[i] !== arguments[i]) {
                    data = null;
                    break;
                }
            }
            if (data)
                return data;
        }
        const canvas = Platform.origin.createCanvas(width, height);
        const ctx = canvas.getContext('2d');
        if (opacity)
            ctx.globalAlpha = opacity;
        ctx.drawImage(this.view, 0, 0, width, height);
        this.cache = this.use > 1 ? { data: canvas, params: arguments } : null;
        return canvas;
    }
    getPattern(canvas, repeat, transform, paint) {
        const pattern = Platform.canvas.createPattern(canvas, repeat);
        try {
            if (transform && pattern.setTransform) {
                pattern.setTransform(transform);
                transform = null;
            }
        }
        catch (_a) { }
        if (paint)
            paint.transform = transform;
        return pattern;
    }
    destroy() {
        this.config = { url: '' };
        this.cache = null;
        this.waitComplete.length = 0;
    }
}

function defineKey(target, key, descriptor, noConfigurable) {
    if (!noConfigurable)
        descriptor.configurable = descriptor.enumerable = true;
    Object.defineProperty(target, key, descriptor);
}
function getDescriptor(object, name) {
    return Object.getOwnPropertyDescriptor(object, name);
}
function getNames(object) {
    return Object.getOwnPropertyNames(object);
}

function decorateLeafAttr(defaultValue, descriptorFn) {
    return (target, key) => defineLeafAttr(target, key, defaultValue, descriptorFn && descriptorFn(key));
}
function attr(partDescriptor) {
    return partDescriptor;
}
function defineLeafAttr(target, key, defaultValue, partDescriptor) {
    const defaultDescriptor = {
        get() { return this.__getAttr(key); },
        set(value) { this.__setAttr(key, value); }
    };
    defineKey(target, key, Object.assign(defaultDescriptor, partDescriptor || {}));
    defineDataProcessor(target, key, defaultValue);
}
function dataType(defaultValue) {
    return decorateLeafAttr(defaultValue);
}
function positionType(defaultValue, checkFiniteNumber) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value, checkFiniteNumber) && (this.__layout.matrixChanged || this.__layout.matrixChange());
        }
    }));
}
function autoLayoutType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            if (this.__setAttr(key, value)) {
                this.__layout.matrixChanged || this.__layout.matrixChange();
                this.__hasAutoLayout = !!(this.origin || this.around || this.flow);
                if (!this.__local)
                    this.__layout.createLocal();
            }
        }
    }));
}
function scaleType(defaultValue, checkFiniteNumber) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value, checkFiniteNumber) && (this.__layout.scaleChanged || this.__layout.scaleChange());
        }
    }));
}
function rotationType(defaultValue, checkFiniteNumber) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value, checkFiniteNumber) && (this.__layout.rotationChanged || this.__layout.rotationChange());
        }
    }));
}
function boundsType(defaultValue, checkFiniteNumber) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value, checkFiniteNumber) && doBoundsType(this);
        }
    }));
}
function naturalBoundsType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value) && (doBoundsType(this), this.__.__removeNaturalSize());
        }
    }));
}
function doBoundsType(leaf) {
    leaf.__layout.boxChanged || leaf.__layout.boxChange();
    if (leaf.__hasAutoLayout)
        leaf.__layout.matrixChanged || leaf.__layout.matrixChange();
}
function pathInputType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            const data = this.__;
            if (data.__pathInputed !== 2)
                data.__pathInputed = value ? 1 : 0;
            if (!value)
                data.__pathForRender = undefined;
            this.__setAttr(key, value);
            doBoundsType(this);
        }
    }));
}
const pathType = boundsType;
function affectStrokeBoundsType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value) && doStrokeType(this);
        }
    }));
}
function doStrokeType(leaf) {
    leaf.__layout.strokeChanged || leaf.__layout.strokeChange();
    if (leaf.__.__useArrow)
        doBoundsType(leaf);
}
const strokeType = affectStrokeBoundsType;
function affectRenderBoundsType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value);
            this.__layout.renderChanged || this.__layout.renderChange();
        }
    }));
}
function surfaceType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value) && (this.__layout.surfaceChanged || this.__layout.surfaceChange());
        }
    }));
}
function opacityType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value) && (this.__layout.opacityChanged || this.__layout.opacityChange());
            if (this.mask)
                checkMask(this);
        }
    }));
}
function visibleType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            const oldValue = this.visible;
            if (oldValue === true && value === 0) {
                if (this.animationOut)
                    return this.__runAnimation('out', () => doVisible(this, key, value, oldValue));
            }
            else if (oldValue === 0 && value === true) {
                if (this.animation)
                    this.__runAnimation('in');
            }
            doVisible(this, key, value, oldValue);
            if (this.mask)
                checkMask(this);
        }
    }));
}
function checkMask(leaf) {
    const { parent } = leaf;
    if (parent) {
        const { __hasMask } = parent;
        parent.__updateMask();
        if (__hasMask !== parent.__hasMask)
            parent.forceUpdate();
    }
}
function doVisible(leaf, key, value, oldValue) {
    if (leaf.__setAttr(key, value)) {
        leaf.__layout.opacityChanged || leaf.__layout.opacityChange();
        if (oldValue === 0 || value === 0)
            doBoundsType(leaf);
    }
}
function sortType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            if (this.__setAttr(key, value)) {
                this.__layout.surfaceChanged || this.__layout.surfaceChange();
                this.waitParent(() => { this.parent.__layout.childrenSortChange(); });
            }
        }
    }));
}
function maskType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            if (this.__setAttr(key, value)) {
                this.__layout.boxChanged || this.__layout.boxChange();
                this.waitParent(() => { this.parent.__updateMask(value); });
            }
        }
    }));
}
function eraserType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value) && this.waitParent(() => { this.parent.__updateEraser(value); });
        }
    }));
}
function hitType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            if (this.__setAttr(key, value)) {
                this.__layout.hitCanvasChanged = true;
                if (Debug.showHitView) {
                    this.__layout.surfaceChanged || this.__layout.surfaceChange();
                }
                if (this.leafer)
                    this.leafer.updateCursor();
            }
        }
    }));
}
function cursorType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value);
            if (this.leafer)
                this.leafer.updateCursor();
        }
    }));
}
function dataProcessor(processor) {
    return (target, _key) => {
        defineKey(target, '__DataProcessor', {
            get() { return processor; }
        });
    };
}
function getSetMethodName(key) {
    return 'set' + key.charAt(0).toUpperCase() + key.slice(1);
}
function defineDataProcessor(target, key, defaultValue) {
    const data = target.__DataProcessor.prototype;
    const computedKey = '_' + key;
    const setMethodName = getSetMethodName(key);
    const property = {
        get() {
            const v = this[computedKey];
            return v === undefined ? defaultValue : v;
        },
        set(value) {
            this[computedKey] = value;
        }
    };
    if (defaultValue === undefined) {
        property.get = function () { return this[computedKey]; };
    }
    else if (typeof defaultValue === 'object') {
        const { clone } = DataHelper;
        property.get = function () {
            let v = this[computedKey];
            if (v === undefined)
                this[computedKey] = v = clone(defaultValue);
            return v;
        };
    }
    if (key === 'width') {
        property.get = function () {
            const v = this[computedKey];
            if (v === undefined) {
                const t = this;
                return t._height && t.__naturalWidth && t.__useNaturalRatio ? t._height * t.__naturalWidth / t.__naturalHeight : t.__naturalWidth || defaultValue;
            }
            else {
                return v;
            }
        };
    }
    else if (key === 'height') {
        property.get = function () {
            const v = this[computedKey];
            if (v === undefined) {
                const t = this;
                return t._width && t.__naturalHeight && t.__useNaturalRatio ? t._width * t.__naturalHeight / t.__naturalWidth : t.__naturalHeight || defaultValue;
            }
            else {
                return v;
            }
        };
    }
    let descriptor, find = data;
    while (!descriptor && find) {
        descriptor = getDescriptor(find, key);
        find = find.__proto__;
    }
    if (descriptor && descriptor.set)
        property.set = descriptor.set;
    if (data[setMethodName]) {
        property.set = data[setMethodName];
        delete data[setMethodName];
    }
    defineKey(data, key, property);
}

const debug$2$1 = new Debug('rewrite');
const list = [];
const excludeNames = ['destroy', 'constructor'];
function rewrite(method) {
    return (target, key) => {
        list.push({ name: target.constructor.name + '.' + key, run: () => { target[key] = method; } });
    };
}
function rewriteAble() {
    return (_target) => {
        doRewrite();
    };
}
function doRewrite(error) {
    if (list.length) {
        list.forEach(item => {
            if (error)
                debug$2$1.error(item.name, '需在Class上装饰@rewriteAble()');
            item.run();
        });
        list.length = 0;
    }
}
setTimeout(() => doRewrite(true));
function useModule(module, exclude) {
    return (target) => {
        const names = module.prototype ? getNames(module.prototype) : Object.keys(module);
        names.forEach(name => {
            if (!excludeNames.includes(name) && (!exclude || !exclude.includes(name))) {
                if (module.prototype) {
                    const d = getDescriptor(module.prototype, name);
                    if (d.writable)
                        target.prototype[name] = module.prototype[name];
                }
                else {
                    target.prototype[name] = module[name];
                }
            }
        });
    };
}

function registerUI() {
    return (target) => {
        UICreator.register(target);
    };
}
function registerUIEvent() {
    return (target) => {
        EventCreator.register(target);
    };
}

const { copy: copy$3$1, toInnerPoint: toInnerPoint$1, toOuterPoint: toOuterPoint$1, scaleOfOuter: scaleOfOuter$2, rotateOfOuter: rotateOfOuter$2, skewOfOuter, multiplyParent: multiplyParent$2, divideParent, getLayout } = MatrixHelper;
const matrix$1 = {};
const LeafHelper = {
    updateAllMatrix(leaf, checkAutoLayout, waitAutoLayout) {
        if (checkAutoLayout && leaf.__hasAutoLayout && leaf.__layout.matrixChanged)
            waitAutoLayout = true;
        updateMatrix$1(leaf, checkAutoLayout, waitAutoLayout);
        if (leaf.isBranch) {
            const { children } = leaf;
            for (let i = 0, len = children.length; i < len; i++) {
                updateAllMatrix$1$1(children[i], checkAutoLayout, waitAutoLayout);
            }
        }
    },
    updateMatrix(leaf, checkAutoLayout, waitAutoLayout) {
        const layout = leaf.__layout;
        if (checkAutoLayout) {
            if (waitAutoLayout) {
                layout.waitAutoLayout = true;
                if (leaf.__hasAutoLayout)
                    layout.matrixChanged = false;
            }
        }
        else if (layout.waitAutoLayout) {
            layout.waitAutoLayout = false;
        }
        if (layout.matrixChanged)
            leaf.__updateLocalMatrix();
        if (!layout.waitAutoLayout)
            leaf.__updateWorldMatrix();
    },
    updateBounds(leaf) {
        const layout = leaf.__layout;
        if (layout.boundsChanged)
            leaf.__updateLocalBounds();
        if (!layout.waitAutoLayout)
            leaf.__updateWorldBounds();
    },
    updateAllWorldOpacity(leaf) {
        leaf.__updateWorldOpacity();
        if (leaf.isBranch) {
            const { children } = leaf;
            for (let i = 0, len = children.length; i < len; i++) {
                updateAllWorldOpacity$1(children[i]);
            }
        }
    },
    updateAllChange(leaf) {
        updateAllWorldOpacity$1(leaf);
        leaf.__updateChange();
        if (leaf.isBranch) {
            const { children } = leaf;
            for (let i = 0, len = children.length; i < len; i++) {
                updateAllChange$1(children[i]);
            }
        }
    },
    worldHittable(t) {
        while (t) {
            if (!t.__.hittable)
                return false;
            t = t.parent;
        }
        return true;
    },
    moveWorld(t, x, y = 0, isInnerPoint, transition) {
        const local = typeof x === 'object' ? Object.assign({}, x) : { x, y };
        isInnerPoint ? toOuterPoint$1(t.localTransform, local, local, true) : (t.parent && toInnerPoint$1(t.parent.worldTransform, local, local, true));
        L.moveLocal(t, local.x, local.y, transition);
    },
    moveLocal(t, x, y = 0, transition) {
        if (typeof x === 'object')
            y = x.y, x = x.x;
        x += t.x;
        y += t.y;
        transition ? t.animate({ x, y }, transition) : (t.x = x, t.y = y);
    },
    zoomOfWorld(t, origin, scaleX, scaleY, resize) {
        L.zoomOfLocal(t, getTempLocal(t, origin), scaleX, scaleY, resize);
    },
    zoomOfLocal(t, origin, scaleX, scaleY = scaleX, resize) {
        copy$3$1(matrix$1, t.__localMatrix);
        scaleOfOuter$2(matrix$1, origin, scaleX, scaleY);
        if (t.origin || t.around) {
            L.setTransform(t, matrix$1, resize);
        }
        else {
            moveByMatrix(t, matrix$1);
            t.scaleResize(scaleX, scaleY, resize !== true);
        }
    },
    rotateOfWorld(t, origin, angle) {
        L.rotateOfLocal(t, getTempLocal(t, origin), angle);
    },
    rotateOfLocal(t, origin, angle) {
        copy$3$1(matrix$1, t.__localMatrix);
        rotateOfOuter$2(matrix$1, origin, angle);
        if (t.origin || t.around) {
            L.setTransform(t, matrix$1);
        }
        else {
            moveByMatrix(t, matrix$1);
            t.rotation = MathHelper.formatRotation(t.rotation + angle);
        }
    },
    skewOfWorld(t, origin, skewX, skewY, resize) {
        L.skewOfLocal(t, getTempLocal(t, origin), skewX, skewY, resize);
    },
    skewOfLocal(t, origin, skewX, skewY = 0, resize) {
        copy$3$1(matrix$1, t.__localMatrix);
        skewOfOuter(matrix$1, origin, skewX, skewY);
        L.setTransform(t, matrix$1, resize);
    },
    transformWorld(t, transform, resize) {
        copy$3$1(matrix$1, t.worldTransform);
        multiplyParent$2(matrix$1, transform);
        if (t.parent)
            divideParent(matrix$1, t.parent.worldTransform);
        L.setTransform(t, matrix$1, resize);
    },
    transform(t, transform, resize) {
        copy$3$1(matrix$1, t.localTransform);
        multiplyParent$2(matrix$1, transform);
        L.setTransform(t, matrix$1, resize);
    },
    setTransform(t, transform, resize) {
        const data = t.__, originPoint = data.origin && L.getInnerOrigin(t, data.origin);
        const layout = getLayout(transform, originPoint, data.around && L.getInnerOrigin(t, data.around));
        if (resize) {
            const scaleX = layout.scaleX / t.scaleX, scaleY = layout.scaleY / t.scaleY;
            delete layout.scaleX, delete layout.scaleY;
            if (originPoint) {
                BoundsHelper.scale(t.boxBounds, Math.abs(scaleX), Math.abs(scaleY));
                const changedPoint = L.getInnerOrigin(t, data.origin);
                PointHelper.move(layout, originPoint.x - changedPoint.x, originPoint.y - changedPoint.y);
            }
            t.set(layout);
            t.scaleResize(scaleX, scaleY, false);
        }
        else
            t.set(layout);
    },
    getFlipTransform(t, axis) {
        const m = getMatrixData();
        const sign = axis === 'x' ? 1 : -1;
        scaleOfOuter$2(m, L.getLocalOrigin(t, 'center'), -1 * sign, 1 * sign);
        return m;
    },
    getLocalOrigin(t, origin) {
        return PointHelper.tempToOuterOf(L.getInnerOrigin(t, origin), t.localTransform);
    },
    getInnerOrigin(t, origin) {
        const innerOrigin = {};
        AroundHelper.toPoint(origin, t.boxBounds, innerOrigin);
        return innerOrigin;
    },
    getRelativeWorld(t, relative, temp) {
        copy$3$1(matrix$1, t.worldTransform);
        divideParent(matrix$1, relative.worldTransform);
        return temp ? matrix$1 : Object.assign({}, matrix$1);
    },
    drop(t, parent, index, resize) {
        t.setTransform(L.getRelativeWorld(t, parent, true), resize);
        parent.add(t, index);
    },
    hasParent(p, parent) {
        if (!parent)
            return false;
        while (p) {
            if (parent === p)
                return true;
            p = p.parent;
        }
    }
};
const L = LeafHelper;
const { updateAllMatrix: updateAllMatrix$1$1, updateMatrix: updateMatrix$1, updateAllWorldOpacity: updateAllWorldOpacity$1, updateAllChange: updateAllChange$1 } = L;
function moveByMatrix(t, matrix) {
    const { e, f } = t.__localMatrix;
    t.x += matrix.e - e;
    t.y += matrix.f - f;
}
function getTempLocal(t, world) {
    t.__layout.update();
    return t.parent ? PointHelper.tempToInnerOf(world, t.parent.__world) : world;
}

const LeafBoundsHelper = {
    worldBounds(target) {
        return target.__world;
    },
    localBoxBounds(target) {
        return target.__.eraser || target.__.visible === 0 ? null : (target.__local || target.__layout);
    },
    localStrokeBounds(target) {
        return target.__.eraser || target.__.visible === 0 ? null : target.__layout.localStrokeBounds;
    },
    localRenderBounds(target) {
        return target.__.eraser || target.__.visible === 0 ? null : target.__layout.localRenderBounds;
    },
    maskLocalBoxBounds(target) {
        return target.__.mask ? target.__localBoxBounds : null;
    },
    maskLocalStrokeBounds(target) {
        return target.__.mask ? target.__layout.localStrokeBounds : null;
    },
    maskLocalRenderBounds(target) {
        return target.__.mask ? target.__layout.localRenderBounds : null;
    },
    excludeRenderBounds(child, options) {
        if (options.bounds && !options.bounds.hit(child.__world, options.matrix))
            return true;
        if (options.hideBounds && options.hideBounds.includes(child.__world, options.matrix))
            return true;
        return false;
    }
};

const { updateBounds: updateBounds$1 } = LeafHelper;
const BranchHelper = {
    sort(a, b) {
        return (a.__.zIndex === b.__.zIndex) ? (a.__tempNumber - b.__tempNumber) : (a.__.zIndex - b.__.zIndex);
    },
    pushAllChildBranch(branch, leafList) {
        branch.__tempNumber = 1;
        if (branch.__.__childBranchNumber) {
            const { children } = branch;
            for (let i = 0, len = children.length; i < len; i++) {
                branch = children[i];
                if (branch.isBranch) {
                    branch.__tempNumber = 1;
                    leafList.add(branch);
                    pushAllChildBranch$1(branch, leafList);
                }
            }
        }
    },
    pushAllParent(leaf, leafList) {
        const { keys } = leafList;
        if (keys) {
            while (leaf.parent) {
                if (keys[leaf.parent.innerId] === undefined) {
                    leafList.add(leaf.parent);
                    leaf = leaf.parent;
                }
                else {
                    break;
                }
            }
        }
        else {
            while (leaf.parent) {
                leafList.add(leaf.parent);
                leaf = leaf.parent;
            }
        }
    },
    pushAllBranchStack(branch, pushList) {
        let start = pushList.length;
        const { children } = branch;
        for (let i = 0, len = children.length; i < len; i++) {
            if (children[i].isBranch) {
                pushList.push(children[i]);
            }
        }
        for (let i = start, len = pushList.length; i < len; i++) {
            pushAllBranchStack(pushList[i], pushList);
        }
    },
    updateBounds(branch, exclude) {
        const branchStack = [branch];
        pushAllBranchStack(branch, branchStack);
        updateBoundsByBranchStack(branchStack, exclude);
    },
    updateBoundsByBranchStack(branchStack, exclude) {
        let branch, children;
        for (let i = branchStack.length - 1; i > -1; i--) {
            branch = branchStack[i];
            children = branch.children;
            for (let j = 0, len = children.length; j < len; j++) {
                updateBounds$1(children[j]);
            }
            if (exclude && exclude === branch)
                continue;
            updateBounds$1(branch);
        }
    }
};
const { pushAllChildBranch: pushAllChildBranch$1, pushAllBranchStack, updateBoundsByBranchStack } = BranchHelper;

const WaitHelper = {
    run(wait) {
        if (wait && wait.length) {
            const len = wait.length;
            for (let i = 0; i < len; i++) {
                wait[i]();
            }
            wait.length === len ? wait.length = 0 : wait.splice(0, len);
        }
    }
};

const { getRelativeWorld: getRelativeWorld$1 } = LeafHelper;
const { toOuterOf: toOuterOf$2, getPoints, copy: copy$2$1 } = BoundsHelper;
const localContent = '_localContentBounds';
const worldContent = '_worldContentBounds', worldBox = '_worldBoxBounds', worldStroke = '_worldStrokeBounds';
class LeafLayout {
    get contentBounds() { return this._contentBounds || this.boxBounds; }
    set contentBounds(bounds) { this._contentBounds = bounds; }
    get strokeBounds() { return this._strokeBounds || this.boxBounds; }
    get renderBounds() { return this._renderBounds || this.boxBounds; }
    get localContentBounds() { toOuterOf$2(this.contentBounds, this.leaf.__localMatrix, this[localContent] || (this[localContent] = {})); return this[localContent]; }
    get localStrokeBounds() { return this._localStrokeBounds || this; }
    get localRenderBounds() { return this._localRenderBounds || this; }
    get worldContentBounds() { toOuterOf$2(this.contentBounds, this.leaf.__world, this[worldContent] || (this[worldContent] = {})); return this[worldContent]; }
    get worldBoxBounds() { toOuterOf$2(this.boxBounds, this.leaf.__world, this[worldBox] || (this[worldBox] = {})); return this[worldBox]; }
    get worldStrokeBounds() { toOuterOf$2(this.strokeBounds, this.leaf.__world, this[worldStroke] || (this[worldStroke] = {})); return this[worldStroke]; }
    get a() { return 1; }
    get b() { return 0; }
    get c() { return 0; }
    get d() { return 1; }
    get e() { return this.leaf.__.x; }
    get f() { return this.leaf.__.y; }
    get x() { return this.e + this.boxBounds.x; }
    get y() { return this.f + this.boxBounds.y; }
    get width() { return this.boxBounds.width; }
    get height() { return this.boxBounds.height; }
    constructor(leaf) {
        this.leaf = leaf;
        this.boxBounds = { x: 0, y: 0, width: 0, height: 0 };
        if (this.leaf.__local)
            this._localRenderBounds = this._localStrokeBounds = this.leaf.__local;
        this.boxChange();
        this.matrixChange();
    }
    createLocal() {
        const local = this.leaf.__local = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, x: 0, y: 0, width: 0, height: 0 };
        if (!this._localStrokeBounds)
            this._localStrokeBounds = local;
        if (!this._localRenderBounds)
            this._localRenderBounds = local;
    }
    update() {
        const { leafer } = this.leaf;
        if (leafer) {
            if (leafer.ready)
                leafer.watcher.changed && leafer.layouter.layout();
            else
                leafer.start();
        }
        else {
            let root = this.leaf;
            while (root.parent && !root.parent.leafer) {
                root = root.parent;
            }
            Platform.layout(root);
        }
    }
    getTransform(relative = 'world') {
        this.update();
        const { leaf } = this;
        switch (relative) {
            case 'world':
                return leaf.__world;
            case 'local':
                return leaf.__localMatrix;
            case 'inner':
                return MatrixHelper.defaultMatrix;
            case 'page':
                relative = leaf.zoomLayer;
            default:
                return getRelativeWorld$1(leaf, relative);
        }
    }
    getBounds(type, relative = 'world') {
        this.update();
        switch (relative) {
            case 'world':
                return this.getWorldBounds(type);
            case 'local':
                return this.getLocalBounds(type);
            case 'inner':
                return this.getInnerBounds(type);
            case 'page':
                relative = this.leaf.zoomLayer;
            default:
                return new Bounds(this.getInnerBounds(type)).toOuterOf(this.getTransform(relative));
        }
    }
    getInnerBounds(type = 'box') {
        switch (type) {
            case 'render':
                return this.renderBounds;
            case 'content':
                if (this.contentBounds)
                    return this.contentBounds;
            case 'box':
                return this.boxBounds;
            case 'stroke':
                return this.strokeBounds;
        }
    }
    getLocalBounds(type = 'box') {
        switch (type) {
            case 'render':
                return this.localRenderBounds;
            case 'stroke':
                return this.localStrokeBounds;
            case 'content':
                if (this.contentBounds)
                    return this.localContentBounds;
            case 'box':
                return this.leaf.__localBoxBounds;
        }
    }
    getWorldBounds(type = 'box') {
        switch (type) {
            case 'render':
                return this.leaf.__world;
            case 'stroke':
                return this.worldStrokeBounds;
            case 'content':
                if (this.contentBounds)
                    return this.worldContentBounds;
            case 'box':
                return this.worldBoxBounds;
        }
    }
    getLayoutBounds(type, relative = 'world', unscale) {
        const { leaf } = this;
        let point, matrix, layoutBounds, bounds = this.getInnerBounds(type);
        switch (relative) {
            case 'world':
                point = leaf.getWorldPoint(bounds);
                matrix = leaf.__world;
                break;
            case 'local':
                const { scaleX, scaleY, rotation, skewX, skewY } = leaf.__;
                layoutBounds = { scaleX, scaleY, rotation, skewX, skewY };
                point = leaf.getLocalPointByInner(bounds);
                break;
            case 'inner':
                point = bounds;
                matrix = MatrixHelper.defaultMatrix;
                break;
            case 'page':
                relative = leaf.zoomLayer;
            default:
                point = leaf.getWorldPoint(bounds, relative);
                matrix = getRelativeWorld$1(leaf, relative, true);
        }
        if (!layoutBounds)
            layoutBounds = MatrixHelper.getLayout(matrix);
        copy$2$1(layoutBounds, bounds);
        PointHelper.copy(layoutBounds, point);
        if (unscale) {
            const { scaleX, scaleY } = layoutBounds;
            const uScaleX = Math.abs(scaleX);
            const uScaleY = Math.abs(scaleY);
            if (uScaleX !== 1 || uScaleY !== 1) {
                layoutBounds.scaleX /= uScaleX;
                layoutBounds.scaleY /= uScaleY;
                layoutBounds.width *= uScaleX;
                layoutBounds.height *= uScaleY;
            }
        }
        return layoutBounds;
    }
    getLayoutPoints(type, relative = 'world') {
        const { leaf } = this;
        const points = getPoints(this.getInnerBounds(type));
        let relativeLeaf;
        switch (relative) {
            case 'world':
                relativeLeaf = null;
                break;
            case 'local':
                relativeLeaf = leaf.parent;
                break;
            case 'inner':
                break;
            case 'page':
                relative = leaf.zoomLayer;
            default:
                relativeLeaf = relative;
        }
        if (relativeLeaf !== undefined)
            points.forEach(point => leaf.innerToWorld(point, null, false, relativeLeaf));
        return points;
    }
    shrinkContent() {
        const { x, y, width, height } = this.boxBounds;
        this._contentBounds = { x, y, width, height };
    }
    spreadStroke() {
        const { x, y, width, height } = this.strokeBounds;
        this._strokeBounds = { x, y, width, height };
        this._localStrokeBounds = { x, y, width, height };
        if (!this.renderSpread)
            this.spreadRenderCancel();
    }
    spreadRender() {
        const { x, y, width, height } = this.renderBounds;
        this._renderBounds = { x, y, width, height };
        this._localRenderBounds = { x, y, width, height };
    }
    shrinkContentCancel() {
        this._contentBounds = undefined;
    }
    spreadStrokeCancel() {
        const same = this.renderBounds === this.strokeBounds;
        this._strokeBounds = this.boxBounds;
        this._localStrokeBounds = this.leaf.__localBoxBounds;
        if (same)
            this.spreadRenderCancel();
    }
    spreadRenderCancel() {
        this._renderBounds = this._strokeBounds;
        this._localRenderBounds = this._localStrokeBounds;
    }
    boxChange() {
        this.boxChanged = true;
        this.localBoxChanged || this.localBoxChange();
        this.hitCanvasChanged = true;
    }
    localBoxChange() {
        this.localBoxChanged = true;
        this.boundsChanged = true;
    }
    strokeChange() {
        this.strokeChanged = true;
        this.strokeSpread || (this.strokeSpread = 1);
        this.boundsChanged = true;
        this.hitCanvasChanged = true;
    }
    renderChange() {
        this.renderChanged = true;
        this.renderSpread || (this.renderSpread = 1);
        this.boundsChanged = true;
    }
    scaleChange() {
        this.scaleChanged = true;
        this._scaleOrRotationChange();
    }
    rotationChange() {
        this.rotationChanged = true;
        this.affectRotation = true;
        this._scaleOrRotationChange();
    }
    _scaleOrRotationChange() {
        this.affectScaleOrRotation = true;
        this.matrixChange();
        if (!this.leaf.__local)
            this.createLocal();
    }
    matrixChange() {
        this.matrixChanged = true;
        this.localBoxChanged || this.localBoxChange();
    }
    surfaceChange() {
        this.surfaceChanged = true;
    }
    opacityChange() {
        this.opacityChanged = true;
        this.surfaceChanged || this.surfaceChange();
    }
    childrenSortChange() {
        if (!this.childrenSortChanged) {
            this.childrenSortChanged = true;
            this.leaf.forceUpdate('surface');
        }
    }
    destroy() { }
}

let Event$1 = class Event {
    constructor(type, target) {
        this.bubbles = false;
        this.type = type;
        if (target)
            this.target = target;
    }
    stopDefault() {
        this.isStopDefault = true;
        if (this.origin)
            Platform.event.stopDefault(this.origin);
    }
    stopNow() {
        this.isStopNow = true;
        this.isStop = true;
        if (this.origin)
            Platform.event.stopNow(this.origin);
    }
    stop() {
        this.isStop = true;
        if (this.origin)
            Platform.event.stop(this.origin);
    }
};

class ChildEvent extends Event$1 {
    constructor(type, child, parent) {
        super(type, child);
        this.parent = parent;
        this.child = child;
    }
}
ChildEvent.ADD = 'child.add';
ChildEvent.REMOVE = 'child.remove';
ChildEvent.CREATED = 'created';
ChildEvent.MOUNTED = 'mounted';
ChildEvent.UNMOUNTED = 'unmounted';
ChildEvent.DESTROY = 'destroy';

class PropertyEvent extends Event$1 {
    constructor(type, target, attrName, oldValue, newValue) {
        super(type, target);
        this.attrName = attrName;
        this.oldValue = oldValue;
        this.newValue = newValue;
    }
}
PropertyEvent.CHANGE = 'property.change';
PropertyEvent.LEAFER_CHANGE = 'property.leafer_change';

class ImageEvent extends Event$1 {
    constructor(type, data) {
        super(type);
        Object.assign(this, data);
    }
}
ImageEvent.LOAD = 'image.load';
ImageEvent.LOADED = 'image.loaded';
ImageEvent.ERROR = 'image.error';

class ResizeEvent extends Event$1 {
    get bigger() {
        if (!this.old)
            return true;
        const { width, height } = this.old;
        return this.width >= width && this.height >= height;
    }
    get smaller() {
        return !this.bigger;
    }
    get samePixelRatio() {
        if (!this.old)
            return true;
        return this.pixelRatio === this.old.pixelRatio;
    }
    constructor(size, oldSize) {
        if (typeof size === 'object') {
            super(ResizeEvent.RESIZE);
            Object.assign(this, size);
        }
        else {
            super(size);
        }
        this.old = oldSize;
    }
}
ResizeEvent.RESIZE = 'resize';

class WatchEvent extends Event$1 {
    constructor(type, data) {
        super(type);
        this.data = data;
    }
}
WatchEvent.REQUEST = 'watch.request';
WatchEvent.DATA = 'watch.data';

class LayoutEvent extends Event$1 {
    constructor(type, data, times) {
        super(type);
        if (data) {
            this.data = data;
            this.times = times;
        }
    }
}
LayoutEvent.REQUEST = 'layout.request';
LayoutEvent.START = 'layout.start';
LayoutEvent.BEFORE = 'layout.before';
LayoutEvent.LAYOUT = 'layout';
LayoutEvent.AFTER = 'layout.after';
LayoutEvent.AGAIN = 'layout.again';
LayoutEvent.END = 'layout.end';

class RenderEvent extends Event$1 {
    constructor(type, times, bounds, options) {
        super(type);
        if (times)
            this.times = times;
        if (bounds) {
            this.renderBounds = bounds;
            this.renderOptions = options;
        }
    }
}
RenderEvent.REQUEST = 'render.request';
RenderEvent.CHILD_START = 'render.child_start';
RenderEvent.START = 'render.start';
RenderEvent.BEFORE = 'render.before';
RenderEvent.RENDER = 'render';
RenderEvent.AFTER = 'render.after';
RenderEvent.AGAIN = 'render.again';
RenderEvent.END = 'render.end';
RenderEvent.NEXT = 'render.next';

class LeaferEvent extends Event$1 {
}
LeaferEvent.START = 'leafer.start';
LeaferEvent.BEFORE_READY = 'leafer.before_ready';
LeaferEvent.READY = 'leafer.ready';
LeaferEvent.AFTER_READY = 'leafer.after_ready';
LeaferEvent.VIEW_READY = 'leafer.view_ready';
LeaferEvent.VIEW_COMPLETED = 'leafer.view_completed';
LeaferEvent.STOP = 'leafer.stop';
LeaferEvent.RESTART = 'leafer.restart';
LeaferEvent.END = 'leafer.end';

const empty = {};
class Eventer {
    set event(map) { this.on(map); }
    on(type, listener, options) {
        if (!listener) {
            let event, map = type;
            for (let key in map)
                event = map[key], event instanceof Array ? this.on(key, event[0], event[1]) : this.on(key, event);
            return;
        }
        let capture, once;
        if (options) {
            if (options === 'once') {
                once = true;
            }
            else if (typeof options === 'boolean') {
                capture = options;
            }
            else {
                capture = options.capture;
                once = options.once;
            }
        }
        let events;
        const map = __getListenerMap(this, capture, true);
        const typeList = typeof type === 'string' ? type.split(' ') : type;
        const item = once ? { listener, once } : { listener };
        typeList.forEach(type => {
            if (type) {
                events = map[type];
                if (events) {
                    if (events.findIndex(item => item.listener === listener) === -1)
                        events.push(item);
                }
                else {
                    map[type] = [item];
                }
            }
        });
    }
    off(type, listener, options) {
        if (type) {
            const typeList = typeof type === 'string' ? type.split(' ') : type;
            if (listener) {
                let capture;
                if (options)
                    capture = typeof options === 'boolean' ? options : (options === 'once' ? false : options.capture);
                let events, index;
                const map = __getListenerMap(this, capture);
                typeList.forEach(type => {
                    if (type) {
                        events = map[type];
                        if (events) {
                            index = events.findIndex(item => item.listener === listener);
                            if (index > -1)
                                events.splice(index, 1);
                            if (!events.length)
                                delete map[type];
                        }
                    }
                });
            }
            else {
                const { __bubbleMap: b, __captureMap: c } = this;
                typeList.forEach(type => {
                    if (b)
                        delete b[type];
                    if (c)
                        delete c[type];
                });
            }
        }
        else {
            this.__bubbleMap = this.__captureMap = undefined;
        }
    }
    on_(type, listener, bind, options) {
        if (bind)
            listener = listener.bind(bind);
        this.on(type, listener, options);
        return { type, current: this, listener, options };
    }
    off_(id) {
        if (!id)
            return;
        const list = id instanceof Array ? id : [id];
        list.forEach(item => item.current.off(item.type, item.listener, item.options));
        list.length = 0;
    }
    once(type, listener, capture) {
        this.on(type, listener, { once: true, capture });
    }
    emit(type, event, capture) {
        if (!event && EventCreator.has(type))
            event = EventCreator.get(type, { type, target: this, current: this });
        const map = __getListenerMap(this, capture);
        const list = map[type];
        if (list) {
            let item;
            for (let i = 0, len = list.length; i < len; i++) {
                if (item = list[i]) {
                    item.listener(event);
                    if (item.once) {
                        this.off(type, item.listener, capture);
                        i--, len--;
                    }
                    if (event && event.isStopNow)
                        break;
                }
            }
        }
        this.syncEventer && this.syncEventer.emitEvent(event, capture);
    }
    emitEvent(event, capture) {
        event.current = this;
        this.emit(event.type, event, capture);
    }
    hasEvent(type, capture) {
        if (this.syncEventer && this.syncEventer.hasEvent(type, capture))
            return true;
        const { __bubbleMap: b, __captureMap: c } = this;
        const hasB = b && b[type], hasC = c && c[type];
        return !!(capture === undefined ? (hasB || hasC) : (capture ? hasC : hasB));
    }
    destroy() {
        this.__captureMap = this.__bubbleMap = this.syncEventer = null;
    }
}
function __getListenerMap(eventer, capture, create) {
    if (capture) {
        const { __captureMap: c } = eventer;
        if (c) {
            return c;
        }
        else {
            return create ? eventer.__captureMap = {} : empty;
        }
    }
    else {
        const { __bubbleMap: b } = eventer;
        if (b) {
            return b;
        }
        else {
            return create ? eventer.__bubbleMap = {} : empty;
        }
    }
}

const { on, on_, off, off_, once, emit: emit$2, emitEvent: emitEvent$1, hasEvent, destroy } = Eventer.prototype;
const LeafEventer = { on, on_, off, off_, once, emit: emit$2, emitEvent: emitEvent$1, hasEvent, destroyEventer: destroy };

const { isFinite } = Number;
const debug$1$2 = Debug.get('setAttr');
const LeafDataProxy = {
    __setAttr(name, newValue, checkFiniteNumber) {
        if (this.leaferIsCreated) {
            const oldValue = this.__.__getInput(name);
            if (checkFiniteNumber && !isFinite(newValue) && newValue !== undefined) {
                debug$1$2.warn(this.innerName, name, newValue);
                newValue = undefined;
            }
            if (typeof newValue === 'object' || oldValue !== newValue) {
                this.__realSetAttr(name, newValue);
                const { CHANGE } = PropertyEvent;
                const event = new PropertyEvent(CHANGE, this, name, oldValue, newValue);
                if (this.isLeafer) {
                    this.emitEvent(new PropertyEvent(PropertyEvent.LEAFER_CHANGE, this, name, oldValue, newValue));
                }
                else {
                    if (this.hasEvent(CHANGE))
                        this.emitEvent(event);
                }
                this.leafer.emitEvent(event);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            this.__realSetAttr(name, newValue);
            return true;
        }
    },
    __realSetAttr(name, newValue) {
        const data = this.__;
        data[name] = newValue;
        if (this.__proxyData)
            this.setProxyAttr(name, newValue);
        if (data.normalStyle)
            this.lockNormalStyle || data.normalStyle[name] === undefined || (data.normalStyle[name] = newValue);
    },
    __getAttr(name) {
        if (this.__proxyData)
            return this.getProxyAttr(name);
        return this.__.__get(name);
    }
};

const { setLayout, multiplyParent: multiplyParent$1, translateInner, defaultWorld } = MatrixHelper;
const { toPoint: toPoint$3, tempPoint: tempPoint$2 } = AroundHelper;
const LeafMatrix = {
    __updateWorldMatrix() {
        multiplyParent$1(this.__local || this.__layout, this.parent ? this.parent.__world : defaultWorld, this.__world, !!this.__layout.affectScaleOrRotation, this.__, this.parent && this.parent.__);
    },
    __updateLocalMatrix() {
        if (this.__local) {
            const layout = this.__layout, local = this.__local, data = this.__;
            if (layout.affectScaleOrRotation) {
                if (layout.scaleChanged || layout.rotationChanged) {
                    setLayout(local, data, null, null, layout.affectRotation);
                    layout.scaleChanged = layout.rotationChanged = false;
                }
            }
            local.e = data.x + data.offsetX;
            local.f = data.y + data.offsetY;
            if (data.around || data.origin) {
                toPoint$3(data.around || data.origin, layout.boxBounds, tempPoint$2);
                translateInner(local, -tempPoint$2.x, -tempPoint$2.y, !data.around);
            }
        }
        this.__layout.matrixChanged = false;
    }
};

const { updateMatrix: updateMatrix$2, updateAllMatrix: updateAllMatrix$2 } = LeafHelper;
const { updateBounds: updateBounds$2 } = BranchHelper;
const { toOuterOf: toOuterOf$1, copyAndSpread: copyAndSpread$1, copy: copy$1$1 } = BoundsHelper;
const { toBounds: toBounds$3 } = PathBounds;
const LeafBounds = {
    __updateWorldBounds() {
        toOuterOf$1(this.__layout.renderBounds, this.__world, this.__world);
        if (this.__layout.resized) {
            this.__onUpdateSize();
            this.__layout.resized = false;
        }
    },
    __updateLocalBounds() {
        const layout = this.__layout;
        if (layout.boxChanged) {
            if (!this.__.__pathInputed)
                this.__updatePath();
            this.__updateRenderPath();
            this.__updateBoxBounds();
            layout.resized = true;
        }
        if (layout.localBoxChanged) {
            if (this.__local)
                this.__updateLocalBoxBounds();
            layout.localBoxChanged = false;
            if (layout.strokeSpread)
                layout.strokeChanged = true;
            if (layout.renderSpread)
                layout.renderChanged = true;
            if (this.parent)
                this.parent.__layout.boxChange();
        }
        layout.boxChanged = false;
        if (layout.strokeChanged) {
            layout.strokeSpread = this.__updateStrokeSpread();
            if (layout.strokeSpread) {
                if (layout.strokeBounds === layout.boxBounds)
                    layout.spreadStroke();
                this.__updateStrokeBounds();
                this.__updateLocalStrokeBounds();
            }
            else {
                layout.spreadStrokeCancel();
            }
            layout.strokeChanged = false;
            if (layout.renderSpread || layout.strokeSpread !== layout.strokeBoxSpread)
                layout.renderChanged = true;
            if (this.parent)
                this.parent.__layout.strokeChange();
            layout.resized = true;
        }
        if (layout.renderChanged) {
            layout.renderSpread = this.__updateRenderSpread();
            if (layout.renderSpread) {
                if (layout.renderBounds === layout.boxBounds || layout.renderBounds === layout.strokeBounds)
                    layout.spreadRender();
                this.__updateRenderBounds();
                this.__updateLocalRenderBounds();
            }
            else {
                layout.spreadRenderCancel();
            }
            layout.renderChanged = false;
            if (this.parent)
                this.parent.__layout.renderChange();
        }
        layout.boundsChanged = false;
    },
    __updateLocalBoxBounds() {
        if (this.__hasMotionPath)
            this.__updateMotionPath();
        if (this.__hasAutoLayout)
            this.__updateAutoLayout();
        toOuterOf$1(this.__layout.boxBounds, this.__local, this.__local);
    },
    __updateLocalStrokeBounds() {
        toOuterOf$1(this.__layout.strokeBounds, this.__localMatrix, this.__layout.localStrokeBounds);
    },
    __updateLocalRenderBounds() {
        toOuterOf$1(this.__layout.renderBounds, this.__localMatrix, this.__layout.localRenderBounds);
    },
    __updateBoxBounds() {
        const b = this.__layout.boxBounds;
        const data = this.__;
        if (data.__pathInputed) {
            toBounds$3(data.path, b);
        }
        else {
            b.x = 0;
            b.y = 0;
            b.width = data.width;
            b.height = data.height;
        }
    },
    __updateAutoLayout() {
        this.__layout.matrixChanged = true;
        if (this.isBranch) {
            if (this.leaferIsReady)
                this.leafer.layouter.addExtra(this);
            if (this.__.flow) {
                if (this.__layout.boxChanged)
                    this.__updateFlowLayout();
                updateAllMatrix$2(this);
                updateBounds$2(this, this);
                if (this.__.__autoSide)
                    this.__updateBoxBounds(true);
            }
            else {
                updateAllMatrix$2(this);
                updateBounds$2(this, this);
            }
        }
        else {
            updateMatrix$2(this);
        }
    },
    __updateNaturalSize() {
        const { __: data, __layout: layout } = this;
        data.__naturalWidth = layout.boxBounds.width;
        data.__naturalHeight = layout.boxBounds.height;
    },
    __updateStrokeBounds() {
        const layout = this.__layout;
        copyAndSpread$1(layout.strokeBounds, layout.boxBounds, layout.strokeBoxSpread);
    },
    __updateRenderBounds() {
        const layout = this.__layout;
        layout.renderSpread > 0 ? copyAndSpread$1(layout.renderBounds, layout.boxBounds, layout.renderSpread) : copy$1$1(layout.renderBounds, layout.strokeBounds);
    }
};

const LeafRender = {
    __render(canvas, options) {
        if (this.__worldOpacity) {
            canvas.setWorld(this.__nowWorld = this.__getNowWorld(options));
            canvas.opacity = this.__.opacity;
            if (this.__.__single) {
                if (this.__.eraser === 'path')
                    return this.__renderEraser(canvas, options);
                const tempCanvas = canvas.getSameCanvas(true, true);
                this.__draw(tempCanvas, options);
                if (this.__worldFlipped) {
                    canvas.copyWorldByReset(tempCanvas, this.__nowWorld, null, this.__.__blendMode, true);
                }
                else {
                    canvas.copyWorldToInner(tempCanvas, this.__nowWorld, this.__layout.renderBounds, this.__.__blendMode);
                }
                tempCanvas.recycle(this.__nowWorld);
            }
            else {
                this.__draw(canvas, options);
            }
        }
    },
    __clip(canvas, options) {
        if (this.__worldOpacity) {
            canvas.setWorld(this.__nowWorld = this.__getNowWorld(options));
            this.__drawRenderPath(canvas);
            this.windingRule ? canvas.clip(this.windingRule) : canvas.clip();
        }
    },
    __updateWorldOpacity() {
        this.__worldOpacity = this.__.visible ? (this.parent ? this.parent.__worldOpacity * this.__.opacity : this.__.opacity) : 0;
        if (this.__layout.opacityChanged)
            this.__layout.opacityChanged = false;
    }
};

const { excludeRenderBounds: excludeRenderBounds$1 } = LeafBoundsHelper;
const BranchRender = {
    __updateChange() {
        const { __layout: layout } = this;
        if (layout.childrenSortChanged) {
            this.__updateSortChildren();
            layout.childrenSortChanged = false;
        }
        this.__.__checkSingle();
    },
    __render(canvas, options) {
        this.__nowWorld = this.__getNowWorld(options);
        if (this.__worldOpacity) {
            if (this.__.__single) {
                if (this.__.eraser === 'path')
                    return this.__renderEraser(canvas, options);
                const tempCanvas = canvas.getSameCanvas(false, true);
                this.__renderBranch(tempCanvas, options);
                const nowWorld = this.__nowWorld;
                canvas.opacity = this.__.opacity;
                canvas.copyWorldByReset(tempCanvas, nowWorld, nowWorld, this.__.__blendMode, true);
                tempCanvas.recycle(nowWorld);
            }
            else {
                this.__renderBranch(canvas, options);
            }
        }
    },
    __renderBranch(canvas, options) {
        if (this.__hasMask) {
            this.__renderMask(canvas, options);
        }
        else {
            const { children } = this;
            for (let i = 0, len = children.length; i < len; i++) {
                if (excludeRenderBounds$1(children[i], options))
                    continue;
                children[i].__render(canvas, options);
            }
        }
    },
    __clip(canvas, options) {
        if (this.__worldOpacity) {
            const { children } = this;
            for (let i = 0, len = children.length; i < len; i++) {
                if (excludeRenderBounds$1(children[i], options))
                    continue;
                children[i].__clip(canvas, options);
            }
        }
    }
};

const { LEAF, create } = IncrementId;
const { toInnerPoint, toOuterPoint, multiplyParent } = MatrixHelper;
const { toOuterOf } = BoundsHelper;
const { copy: copy$8, move } = PointHelper;
const { moveLocal, zoomOfLocal, rotateOfLocal, skewOfLocal, moveWorld, zoomOfWorld, rotateOfWorld, skewOfWorld, transform, transformWorld, setTransform, getFlipTransform, getLocalOrigin, getRelativeWorld, drop } = LeafHelper;
let Leaf = class Leaf {
    get tag() { return this.__tag; }
    set tag(_value) { }
    get __tag() { return 'Leaf'; }
    get innerName() { return this.__.name || this.tag + this.innerId; }
    get __DataProcessor() { return LeafData; }
    get __LayoutProcessor() { return LeafLayout; }
    get leaferIsCreated() { return this.leafer && this.leafer.created; }
    get leaferIsReady() { return this.leafer && this.leafer.ready; }
    get isLeafer() { return false; }
    get isBranch() { return false; }
    get isBranchLeaf() { return false; }
    get __localMatrix() { return this.__local || this.__layout; }
    get __localBoxBounds() { return this.__local || this.__layout; }
    get worldTransform() { return this.__layout.getTransform('world'); }
    get localTransform() { return this.__layout.getTransform('local'); }
    get boxBounds() { return this.getBounds('box', 'inner'); }
    get renderBounds() { return this.getBounds('render', 'inner'); }
    get worldBoxBounds() { return this.getBounds('box'); }
    get worldStrokeBounds() { return this.getBounds('stroke'); }
    get worldRenderBounds() { return this.getBounds('render'); }
    get worldOpacity() { this.__layout.update(); return this.__worldOpacity; }
    get __worldFlipped() { return this.__world.scaleX < 0 || this.__world.scaleY < 0; }
    get __onlyHitMask() { return this.__hasMask && !this.__.hitChildren; }
    get __ignoreHitWorld() { return (this.__hasMask || this.__hasEraser) && this.__.hitChildren; }
    get __inLazyBounds() { const { leafer } = this; return leafer && leafer.created && leafer.lazyBounds.hit(this.__world); }
    get pathInputed() { return this.__.__pathInputed; }
    set event(map) { this.on(map); }
    constructor(data) {
        this.innerId = create(LEAF);
        this.reset(data);
        if (this.__bubbleMap)
            this.__emitLifeEvent(ChildEvent.CREATED);
    }
    reset(data) {
        if (this.leafer)
            this.leafer.forceRender(this.__world);
        this.__world = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, x: 0, y: 0, width: 0, height: 0, scaleX: 1, scaleY: 1 };
        if (data !== null)
            this.__local = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0, x: 0, y: 0, width: 0, height: 0 };
        this.__worldOpacity = 1;
        this.__ = new this.__DataProcessor(this);
        this.__layout = new this.__LayoutProcessor(this);
        if (this.__level)
            this.resetCustom();
        if (data) {
            if (data.__)
                data = data.toJSON();
            data.children ? this.set(data) : Object.assign(this, data);
        }
    }
    resetCustom() {
        this.__hasMask = this.__hasEraser = null;
        this.forceUpdate();
    }
    waitParent(item, bind) {
        if (bind)
            item = item.bind(bind);
        this.parent ? item() : this.on(ChildEvent.ADD, item, 'once');
    }
    waitLeafer(item, bind) {
        if (bind)
            item = item.bind(bind);
        this.leafer ? item() : this.on(ChildEvent.MOUNTED, item, 'once');
    }
    nextRender(item, bind, off) {
        this.leafer ? this.leafer.nextRender(item, bind, off) : this.waitLeafer(() => this.leafer.nextRender(item, bind, off));
    }
    removeNextRender(item) {
        this.nextRender(item, null, 'off');
    }
    __bindLeafer(leafer) {
        if (this.isLeafer && leafer !== null)
            leafer = this;
        if (this.leafer && !leafer)
            this.leafer.leafs--;
        this.leafer = leafer;
        if (leafer) {
            leafer.leafs++;
            this.__level = this.parent ? this.parent.__level + 1 : 1;
            if (this.animation)
                this.__runAnimation('in');
            if (this.__bubbleMap)
                this.__emitLifeEvent(ChildEvent.MOUNTED);
        }
        else {
            this.__emitLifeEvent(ChildEvent.UNMOUNTED);
        }
        if (this.isBranch) {
            const { children } = this;
            for (let i = 0, len = children.length; i < len; i++) {
                children[i].__bindLeafer(leafer);
            }
        }
    }
    set(_data, _isTemp) { }
    get(_name) { return undefined; }
    setAttr(name, value) { this[name] = value; }
    getAttr(name) { return this[name]; }
    getComputedAttr(name) { return this.__[name]; }
    toJSON(options) {
        if (options)
            this.__layout.update();
        return this.__.__getInputData(null, options);
    }
    toString(options) {
        return JSON.stringify(this.toJSON(options));
    }
    toSVG() { return undefined; }
    __SVG(_data) { }
    toHTML() { return undefined; }
    __setAttr(_attrName, _newValue) { return true; }
    __getAttr(_attrName) { return undefined; }
    setProxyAttr(_attrName, _newValue) { }
    getProxyAttr(_attrName) { return undefined; }
    find(_condition, _options) { return undefined; }
    findTag(_tag) { return undefined; }
    findOne(_condition, _options) { return undefined; }
    findId(_id) { return undefined; }
    focus(_value) { }
    updateState() { }
    updateLayout() {
        this.__layout.update();
    }
    forceUpdate(attrName) {
        if (attrName === undefined)
            attrName = 'width';
        else if (attrName === 'surface')
            attrName = 'blendMode';
        const value = this.__.__getInput(attrName);
        this.__[attrName] = value === undefined ? null : undefined;
        this[attrName] = value;
    }
    forceRender(_bounds, _sync) {
        this.forceUpdate('surface');
    }
    __updateWorldMatrix() { }
    __updateLocalMatrix() { }
    __updateWorldBounds() { }
    __updateLocalBounds() { }
    __updateLocalBoxBounds() { }
    __updateLocalStrokeBounds() { }
    __updateLocalRenderBounds() { }
    __updateBoxBounds() { }
    __updateContentBounds() { }
    __updateStrokeBounds() { }
    __updateRenderBounds() { }
    __updateAutoLayout() { }
    __updateFlowLayout() { }
    __updateNaturalSize() { }
    __updateStrokeSpread() { return 0; }
    __updateRenderSpread() { return 0; }
    __onUpdateSize() { }
    __updateEraser(value) {
        this.__hasEraser = value ? true : this.children.some(item => item.__.eraser);
    }
    __renderEraser(canvas, options) {
        canvas.save();
        this.__clip(canvas, options);
        const { renderBounds: r } = this.__layout;
        canvas.clearRect(r.x, r.y, r.width, r.height);
        canvas.restore();
    }
    __updateMask(_value) {
        this.__hasMask = this.children.some(item => item.__.mask && item.__.visible && item.__.opacity);
    }
    __renderMask(_canvas, _options) { }
    __getNowWorld(options) {
        if (options.matrix) {
            if (!this.__cameraWorld)
                this.__cameraWorld = {};
            const cameraWorld = this.__cameraWorld;
            multiplyParent(this.__world, options.matrix, cameraWorld, undefined, this.__world);
            toOuterOf(this.__layout.renderBounds, cameraWorld, cameraWorld);
            return cameraWorld;
        }
        else {
            return this.__world;
        }
    }
    getTransform(relative) {
        return this.__layout.getTransform(relative || 'local');
    }
    getBounds(type, relative) {
        return this.__layout.getBounds(type, relative);
    }
    getLayoutBounds(type, relative, unscale) {
        return this.__layout.getLayoutBounds(type, relative, unscale);
    }
    getLayoutPoints(type, relative) {
        return this.__layout.getLayoutPoints(type, relative);
    }
    getWorldBounds(inner, relative, change) {
        const matrix = relative ? getRelativeWorld(this, relative) : this.worldTransform;
        const to = change ? inner : {};
        toOuterOf(inner, matrix, to);
        return to;
    }
    worldToLocal(world, to, distance, relative) {
        if (this.parent) {
            this.parent.worldToInner(world, to, distance, relative);
        }
        else {
            if (to)
                copy$8(to, world);
        }
    }
    localToWorld(local, to, distance, relative) {
        if (this.parent) {
            this.parent.innerToWorld(local, to, distance, relative);
        }
        else {
            if (to)
                copy$8(to, local);
        }
    }
    worldToInner(world, to, distance, relative) {
        if (relative) {
            relative.innerToWorld(world, to, distance);
            world = to ? to : world;
        }
        toInnerPoint(this.worldTransform, world, to, distance);
    }
    innerToWorld(inner, to, distance, relative) {
        toOuterPoint(this.worldTransform, inner, to, distance);
        if (relative)
            relative.worldToInner(to ? to : inner, null, distance);
    }
    getBoxPoint(world, relative, distance, change) {
        return this.getBoxPointByInner(this.getInnerPoint(world, relative, distance, change), null, null, true);
    }
    getBoxPointByInner(inner, _relative, _distance, change) {
        const point = change ? inner : Object.assign({}, inner), { x, y } = this.boxBounds;
        move(point, -x, -y);
        return point;
    }
    getInnerPoint(world, relative, distance, change) {
        const point = change ? world : {};
        this.worldToInner(world, point, distance, relative);
        return point;
    }
    getInnerPointByBox(box, _relative, _distance, change) {
        const point = change ? box : Object.assign({}, box), { x, y } = this.boxBounds;
        move(point, x, y);
        return point;
    }
    getInnerPointByLocal(local, _relative, distance, change) {
        return this.getInnerPoint(local, this.parent, distance, change);
    }
    getLocalPoint(world, relative, distance, change) {
        const point = change ? world : {};
        this.worldToLocal(world, point, distance, relative);
        return point;
    }
    getLocalPointByInner(inner, _relative, distance, change) {
        return this.getWorldPoint(inner, this.parent, distance, change);
    }
    getPagePoint(world, relative, distance, change) {
        const layer = this.leafer ? this.leafer.zoomLayer : this;
        return layer.getInnerPoint(world, relative, distance, change);
    }
    getWorldPoint(inner, relative, distance, change) {
        const point = change ? inner : {};
        this.innerToWorld(inner, point, distance, relative);
        return point;
    }
    getWorldPointByBox(box, relative, distance, change) {
        return this.getWorldPoint(this.getInnerPointByBox(box, null, null, change), relative, distance, true);
    }
    getWorldPointByLocal(local, relative, distance, change) {
        const point = change ? local : {};
        this.localToWorld(local, point, distance, relative);
        return point;
    }
    getWorldPointByPage(page, relative, distance, change) {
        const layer = this.leafer ? this.leafer.zoomLayer : this;
        return layer.getWorldPoint(page, relative, distance, change);
    }
    setTransform(matrix, resize) {
        setTransform(this, matrix, resize);
    }
    transform(matrix, resize) {
        transform(this, matrix, resize);
    }
    move(x, y, transition) {
        moveLocal(this, x, y, transition);
    }
    moveInner(x, y, transition) {
        moveWorld(this, x, y, true, transition);
    }
    scaleOf(origin, scaleX, scaleY, resize) {
        zoomOfLocal(this, getLocalOrigin(this, origin), scaleX, scaleY, resize);
    }
    rotateOf(origin, rotation) {
        rotateOfLocal(this, getLocalOrigin(this, origin), rotation);
    }
    skewOf(origin, skewX, skewY, resize) {
        skewOfLocal(this, getLocalOrigin(this, origin), skewX, skewY, resize);
    }
    transformWorld(worldTransform, resize) {
        transformWorld(this, worldTransform, resize);
    }
    moveWorld(x, y, transition) {
        moveWorld(this, x, y, false, transition);
    }
    scaleOfWorld(worldOrigin, scaleX, scaleY, resize) {
        zoomOfWorld(this, worldOrigin, scaleX, scaleY, resize);
    }
    rotateOfWorld(worldOrigin, rotation) {
        rotateOfWorld(this, worldOrigin, rotation);
    }
    skewOfWorld(worldOrigin, skewX, skewY, resize) {
        skewOfWorld(this, worldOrigin, skewX, skewY, resize);
    }
    flip(axis) {
        transform(this, getFlipTransform(this, axis));
    }
    scaleResize(scaleX, scaleY = scaleX, _noResize) {
        this.scaleX *= scaleX;
        this.scaleY *= scaleY;
    }
    __scaleResize(_scaleX, _scaleY) { }
    resizeWidth(_width) { }
    resizeHeight(_height) { }
    __hitWorld(_point) { return true; }
    __hit(_local) { return true; }
    __hitFill(_inner) { return true; }
    __hitStroke(_inner, _strokeWidth) { return true; }
    __hitPixel(_inner) { return true; }
    __drawHitPath(_canvas) { }
    __updateHitCanvas() { }
    __render(_canvas, _options) { }
    __drawFast(_canvas, _options) { }
    __draw(_canvas, _options) { }
    __clip(_canvas, _options) { }
    __renderShape(_canvas, _options, _ignoreFill, _ignoreStroke) { }
    __updateWorldOpacity() { }
    __updateChange() { }
    __drawPath(_canvas) { }
    __drawRenderPath(_canvas) { }
    __updatePath() { }
    __updateRenderPath() { }
    getMotionPathData() {
        return Plugin.need('path');
    }
    getMotionPoint(_motionDistance) {
        return Plugin.need('path');
    }
    getMotionTotal() {
        return 0;
    }
    __updateMotionPath() { }
    __runAnimation(_type, _complete) { }
    __updateSortChildren() { }
    add(_child, _index) { }
    remove(_child, destroy) {
        if (this.parent)
            this.parent.remove(this, destroy);
    }
    dropTo(parent, index, resize) {
        drop(this, parent, index, resize);
    }
    on(_type, _listener, _options) { }
    off(_type, _listener, _options) { }
    on_(_type, _listener, _bind, _options) { return undefined; }
    off_(_id) { }
    once(_type, _listener, _capture) { }
    emit(_type, _event, _capture) { }
    emitEvent(_event, _capture) { }
    hasEvent(_type, _capture) { return false; }
    static changeAttr(attrName, defaultValue, fn) {
        fn ? this.addAttr(attrName, defaultValue, fn) : defineDataProcessor(this.prototype, attrName, defaultValue);
    }
    static addAttr(attrName, defaultValue, fn) {
        if (!fn)
            fn = boundsType;
        fn(defaultValue)(this.prototype, attrName);
    }
    __emitLifeEvent(type) {
        if (this.hasEvent(type))
            this.emitEvent(new ChildEvent(type, this, this.parent));
    }
    destroy() {
        if (!this.destroyed) {
            if (this.parent)
                this.remove();
            if (this.children)
                this.clear();
            this.__emitLifeEvent(ChildEvent.DESTROY);
            this.__.destroy();
            this.__layout.destroy();
            this.destroyEventer();
            this.destroyed = true;
        }
    }
};
Leaf = __decorate$2([
    useModule(LeafDataProxy),
    useModule(LeafMatrix),
    useModule(LeafBounds),
    useModule(LeafEventer),
    useModule(LeafRender)
], Leaf);

const { setListWithFn } = BoundsHelper;
const { sort } = BranchHelper;
const { localBoxBounds, localStrokeBounds, localRenderBounds, maskLocalBoxBounds, maskLocalStrokeBounds, maskLocalRenderBounds } = LeafBoundsHelper;
const debug$a = new Debug('Branch');
let Branch = class Branch extends Leaf {
    __updateStrokeSpread() {
        const { children } = this;
        for (let i = 0, len = children.length; i < len; i++) {
            if (children[i].__layout.strokeSpread)
                return 1;
        }
        return 0;
    }
    __updateRenderSpread() {
        const { children } = this;
        for (let i = 0, len = children.length; i < len; i++) {
            if (children[i].__layout.renderSpread)
                return 1;
        }
        return 0;
    }
    __updateBoxBounds() {
        setListWithFn(this.__layout.boxBounds, this.children, this.__hasMask ? maskLocalBoxBounds : localBoxBounds);
    }
    __updateStrokeBounds() {
        setListWithFn(this.__layout.strokeBounds, this.children, this.__hasMask ? maskLocalStrokeBounds : localStrokeBounds);
    }
    __updateRenderBounds() {
        setListWithFn(this.__layout.renderBounds, this.children, this.__hasMask ? maskLocalRenderBounds : localRenderBounds);
    }
    __updateSortChildren() {
        let affectSort;
        const { children } = this;
        if (children.length > 1) {
            for (let i = 0, len = children.length; i < len; i++) {
                children[i].__tempNumber = i;
                if (children[i].__.zIndex)
                    affectSort = true;
            }
            children.sort(sort);
            this.__layout.affectChildrenSort = affectSort;
        }
    }
    add(child, index) {
        if (child === this || child.destroyed)
            return debug$a.warn('add self or destroyed');
        const noIndex = index === undefined;
        if (!child.__) {
            if (child instanceof Array)
                return child.forEach(item => { this.add(item, index); noIndex || index++; });
            else
                child = UICreator.get(child.tag, child);
        }
        if (child.parent)
            child.parent.remove(child);
        child.parent = this;
        noIndex ? this.children.push(child) : this.children.splice(index, 0, child);
        if (child.isBranch)
            this.__.__childBranchNumber = (this.__.__childBranchNumber || 0) + 1;
        const childLayout = child.__layout;
        childLayout.boxChanged || childLayout.boxChange();
        childLayout.matrixChanged || childLayout.matrixChange();
        if (child.__bubbleMap)
            child.__emitLifeEvent(ChildEvent.ADD);
        if (this.leafer) {
            child.__bindLeafer(this.leafer);
            if (this.leafer.created)
                this.__emitChildEvent(ChildEvent.ADD, child);
        }
        this.__layout.affectChildrenSort && this.__layout.childrenSortChange();
    }
    addMany(...children) { this.add(children); }
    remove(child, destroy) {
        if (child) {
            if (child.__) {
                if (child.animationOut)
                    child.__runAnimation('out', () => this.__remove(child, destroy));
                else
                    this.__remove(child, destroy);
            }
            else
                this.find(child).forEach(item => this.remove(item, destroy));
        }
        else if (child === undefined) {
            super.remove(null, destroy);
        }
    }
    removeAll(destroy) {
        const { children } = this;
        if (children.length) {
            this.children = [];
            this.__preRemove();
            this.__.__childBranchNumber = 0;
            children.forEach(child => {
                this.__realRemoveChild(child);
                if (destroy)
                    child.destroy();
            });
        }
    }
    clear() {
        this.removeAll(true);
    }
    __remove(child, destroy) {
        const index = this.children.indexOf(child);
        if (index > -1) {
            this.children.splice(index, 1);
            if (child.isBranch)
                this.__.__childBranchNumber = (this.__.__childBranchNumber || 1) - 1;
            this.__preRemove();
            this.__realRemoveChild(child);
            if (destroy)
                child.destroy();
        }
    }
    __preRemove() {
        if (this.__hasMask)
            this.__updateMask();
        if (this.__hasEraser)
            this.__updateEraser();
        this.__layout.boxChange();
        this.__layout.affectChildrenSort && this.__layout.childrenSortChange();
    }
    __realRemoveChild(child) {
        child.__emitLifeEvent(ChildEvent.REMOVE);
        child.parent = null;
        if (this.leafer) {
            child.__bindLeafer(null);
            if (this.leafer.created) {
                this.__emitChildEvent(ChildEvent.REMOVE, child);
                if (this.leafer.hitCanvasManager)
                    this.leafer.hitCanvasManager.clear();
            }
        }
    }
    __emitChildEvent(type, child) {
        const event = new ChildEvent(type, child, this);
        if (this.hasEvent(type) && !this.isLeafer)
            this.emitEvent(event);
        this.leafer.emitEvent(event);
    }
};
Branch = __decorate$2([
    useModule(BranchRender)
], Branch);

class LeafList {
    get length() { return this.list.length; }
    constructor(item) {
        this.reset();
        if (item)
            item instanceof Array ? this.addList(item) : this.add(item);
    }
    has(leaf) {
        return leaf && this.keys[leaf.innerId] !== undefined;
    }
    indexAt(index) {
        return this.list[index];
    }
    indexOf(leaf) {
        const index = this.keys[leaf.innerId];
        return index === undefined ? -1 : index;
    }
    add(leaf) {
        const { list, keys } = this;
        if (keys[leaf.innerId] === undefined) {
            list.push(leaf);
            keys[leaf.innerId] = list.length - 1;
        }
    }
    addAt(leaf, index = 0) {
        const { keys } = this;
        if (keys[leaf.innerId] === undefined) {
            const { list } = this;
            for (let i = index, len = list.length; i < len; i++)
                keys[list[i].innerId]++;
            if (index === 0) {
                list.unshift(leaf);
            }
            else {
                if (index > list.length)
                    index = list.length;
                list.splice(index, 0, leaf);
            }
            keys[leaf.innerId] = index;
        }
    }
    addList(list) {
        for (let i = 0; i < list.length; i++)
            this.add(list[i]);
    }
    remove(leaf) {
        const { list } = this;
        let findIndex;
        for (let i = 0, len = list.length; i < len; i++) {
            if (findIndex !== undefined) {
                this.keys[list[i].innerId] = i - 1;
            }
            else if (list[i].innerId === leaf.innerId) {
                findIndex = i;
                delete this.keys[leaf.innerId];
            }
        }
        if (findIndex !== undefined)
            list.splice(findIndex, 1);
    }
    sort(reverse) {
        const { list } = this;
        if (reverse) {
            list.sort((a, b) => b.__level - a.__level);
        }
        else {
            list.sort((a, b) => a.__level - b.__level);
        }
    }
    forEach(itemCallback) {
        this.list.forEach(itemCallback);
    }
    clone() {
        const list = new LeafList();
        list.list = [...this.list];
        list.keys = Object.assign({}, this.keys);
        return list;
    }
    update() {
        this.keys = {};
        const { list, keys } = this;
        for (let i = 0, len = list.length; i < len; i++)
            keys[list[i].innerId] = i;
    }
    reset() {
        this.list = [];
        this.keys = {};
    }
    destroy() {
        this.reset();
    }
}

class LeafLevelList {
    get length() { return this._length; }
    constructor(item) {
        this._length = 0;
        this.reset();
        if (item)
            item instanceof Array ? this.addList(item) : this.add(item);
    }
    has(leaf) {
        return this.keys[leaf.innerId] !== undefined;
    }
    without(leaf) {
        return this.keys[leaf.innerId] === undefined;
    }
    sort(reverse) {
        const { levels } = this;
        if (reverse) {
            levels.sort((a, b) => b - a);
        }
        else {
            levels.sort((a, b) => a - b);
        }
    }
    addList(list) {
        list.forEach(leaf => { this.add(leaf); });
    }
    add(leaf) {
        const { keys, levelMap } = this;
        if (!keys[leaf.innerId]) {
            keys[leaf.innerId] = 1;
            if (!levelMap[leaf.__level]) {
                levelMap[leaf.__level] = [leaf];
                this.levels.push(leaf.__level);
            }
            else {
                levelMap[leaf.__level].push(leaf);
            }
            this._length++;
        }
    }
    forEach(itemCallback) {
        let list;
        this.levels.forEach(level => {
            list = this.levelMap[level];
            for (let i = 0, len = list.length; i < len; i++) {
                itemCallback(list[i]);
            }
        });
    }
    reset() {
        this.levelMap = {};
        this.keys = {};
        this.levels = [];
        this._length = 0;
    }
    destroy() {
        this.levelMap = null;
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function effectType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value);
            if (value)
                this.__.__useEffect = true;
            this.__layout.renderChanged || this.__layout.renderChange();
        }
    }));
}
function resizeType(defaultValue) {
    return decorateLeafAttr(defaultValue, (key) => attr({
        set(value) {
            this.__setAttr(key, value);
            this.__layout.boxChanged || this.__layout.boxChange();
            this.__updateSize();
        }
    }));
}
function zoomLayerType() {
    return (target, key) => {
        const privateKey = '_' + key;
        defineKey(target, key, {
            set(value) { if (this.isLeafer)
                this[privateKey] = value; },
            get() {
                return this.isApp
                    ? this.tree.zoomLayer
                    : (this.isLeafer ? (this[privateKey] || this) : this.leafer && this.leafer.zoomLayer);
            }
        });
    };
}

const TextConvert = {};
const ColorConvert = {};
const UnitConvert = {
    number(value, percentRefer) {
        if (typeof value === 'object')
            return value.type === 'percent' ? value.value * percentRefer : value.value;
        return value;
    }
};
const PathArrow = {};
const Paint = {};
const PaintImage = {};
const PaintGradient = {};
const Effect = {};
const Export = {};
const State = {
    setStyleName(_leaf, _styleName, _value) { return Plugin.need('state'); },
    set(_leaf, _stateName) { return Plugin.need('state'); }
};

const { parse, objectToCanvasData } = PathConvert;
const emptyPaint = {};
const debug$1$1 = Debug.get('UIData');
class UIData extends LeafData {
    get scale() { const { scaleX, scaleY } = this; return scaleX !== scaleY ? { x: scaleX, y: scaleY } : scaleX; }
    get __strokeWidth() {
        const { strokeWidth, strokeWidthFixed } = this;
        if (strokeWidthFixed) {
            const ui = this.__leaf;
            let { scaleX } = ui.__nowWorld || ui.__world;
            if (scaleX < 0)
                scaleX = -scaleX;
            return scaleX > 1 ? strokeWidth / scaleX : strokeWidth;
        }
        else
            return strokeWidth;
    }
    get __hasStroke() { return this.stroke && this.strokeWidth; }
    get __hasMultiPaint() {
        const t = this;
        if ((t.__isFills && t.fill.length > 1) || (t.__isStrokes && t.stroke.length > 1) || t.__useEffect)
            return true;
        return t.fill && this.__hasStroke;
    }
    get __clipAfterFill() { const t = this; return (t.cornerRadius || t.innerShadow || t.__pathInputed); }
    get __autoWidth() { return !this._width; }
    get __autoHeight() { return !this._height; }
    get __autoSide() { return !this._width || !this._height; }
    get __autoSize() { return !this._width && !this._height; }
    setVisible(value) {
        this._visible = value;
        const { leafer } = this.__leaf;
        if (leafer)
            leafer.watcher.hasVisible = true;
    }
    setWidth(value) {
        if (value < 0) {
            this._width = -value;
            this.__leaf.scaleX *= -1;
            debug$1$1.warn('width < 0, instead -scaleX ', this);
        }
        else
            this._width = value;
    }
    setHeight(value) {
        if (value < 0) {
            this._height = -value;
            this.__leaf.scaleY *= -1;
            debug$1$1.warn('height < 0, instead -scaleY', this);
        }
        else
            this._height = value;
    }
    setFill(value) {
        if (this.__naturalWidth)
            this.__removeNaturalSize();
        if (typeof value === 'string' || !value) {
            if (this.__isFills) {
                this.__removeInput('fill');
                PaintImage.recycleImage('fill', this);
                this.__isFills = false;
                if (this.__pixelFill)
                    this.__pixelFill = false;
            }
            this._fill = value;
        }
        else if (typeof value === 'object') {
            this.__setInput('fill', value);
            this.__leaf.__layout.boxChanged || this.__leaf.__layout.boxChange();
            this.__isFills = true;
            this._fill || (this._fill = emptyPaint);
        }
    }
    setStroke(value) {
        if (typeof value === 'string' || !value) {
            if (this.__isStrokes) {
                this.__removeInput('stroke');
                PaintImage.recycleImage('stroke', this);
                this.__isStrokes = false;
                if (this.__pixelStroke)
                    this.__pixelStroke = false;
            }
            this._stroke = value;
        }
        else if (typeof value === 'object') {
            this.__setInput('stroke', value);
            this.__leaf.__layout.boxChanged || this.__leaf.__layout.boxChange();
            this.__isStrokes = true;
            this._stroke || (this._stroke = emptyPaint);
        }
    }
    setPath(value) {
        const isString = typeof value === 'string';
        if (isString || (value && typeof value[0] === 'object')) {
            this.__setInput('path', value);
            this._path = isString ? parse(value) : objectToCanvasData(value);
        }
        else {
            if (this.__input)
                this.__removeInput('path');
            this._path = value;
        }
    }
    setShadow(value) {
        this.__setInput('shadow', value);
        if (value instanceof Array) {
            if (value.some((item) => item.visible === false))
                value = value.filter((item) => item.visible !== false);
            this._shadow = value.length ? value : null;
        }
        else
            this._shadow = value && value.visible !== false ? [value] : null;
    }
    setInnerShadow(value) {
        this.__setInput('innerShadow', value);
        if (value instanceof Array) {
            if (value.some((item) => item.visible === false))
                value = value.filter((item) => item.visible !== false);
            this._innerShadow = value.length ? value : null;
        }
        else
            this._innerShadow = value && value.visible !== false ? [value] : null;
    }
    __computePaint() {
        const { fill, stroke } = this.__input;
        if (fill)
            Paint.compute('fill', this.__leaf);
        if (stroke)
            Paint.compute('stroke', this.__leaf);
        this.__needComputePaint = false;
    }
}

class GroupData extends UIData {
}

class BoxData extends GroupData {
    get __boxStroke() { return !this.__pathInputed; }
    get __drawAfterFill() { const t = this; return (t.overflow === 'hide' && (t.__clipAfterFill || t.innerShadow) && t.__leaf.children.length); }
    get __clipAfterFill() { return this.__leaf.isOverflow || super.__clipAfterFill; }
}

class LeaferData extends GroupData {
    __getInputData(names, options) {
        const data = super.__getInputData(names, options);
        canvasSizeAttrs.forEach(key => delete data[key]);
        return data;
    }
}

class FrameData extends BoxData {
}

class LineData extends UIData {
}

class RectData extends UIData {
    get __boxStroke() { return !this.__pathInputed; }
}

class EllipseData extends UIData {
    get __boxStroke() { return !this.__pathInputed; }
}

class PolygonData extends UIData {
}

class StarData extends UIData {
}

class PathData extends UIData {
    get __pathInputed() { return 2; }
}

class PenData extends GroupData {
}

const fontWeightMap = {
    'thin': 100,
    'extra-light': 200,
    'light': 300,
    'normal': 400,
    'medium': 500,
    'semi-bold': 600,
    'bold': 700,
    'extra-bold': 800,
    'black': 900
};
class TextData extends UIData {
    get __useNaturalRatio() { return false; }
    setFontWeight(value) {
        if (typeof value === 'string') {
            this.__setInput('fontWeight', value);
            this._fontWeight = fontWeightMap[value] || 400;
        }
        else {
            if (this.__input)
                this.__removeInput('fontWeight');
            this._fontWeight = value;
        }
    }
}

class ImageData extends RectData {
    setUrl(value) {
        this.__setImageFill(value);
        this._url = value;
    }
    __setImageFill(value) {
        if (this.__leaf.image)
            this.__leaf.image = null;
        this.fill = value ? { type: 'image', mode: 'stretch', url: value } : undefined;
    }
    __getData() {
        const data = super.__getData();
        delete data.fill;
        return data;
    }
    __getInputData(names, options) {
        const data = super.__getInputData(names, options);
        delete data.fill;
        return data;
    }
}

class CanvasData extends RectData {
    get __isCanvas() { return true; }
    get __drawAfterFill() { return true; }
    __getInputData(names, options) {
        const data = super.__getInputData(names, options);
        data.url = this.__leaf.canvas.toDataURL('image/png');
        return data;
    }
}

const UIBounds = {
    __updateStrokeSpread() {
        let width = 0, boxWidth = 0;
        const data = this.__, { strokeAlign, strokeWidth } = data;
        if ((data.stroke || data.hitStroke === 'all') && strokeWidth && strokeAlign !== 'inside') {
            boxWidth = width = strokeAlign === 'center' ? strokeWidth / 2 : strokeWidth;
            if (!data.__boxStroke) {
                const miterLimitAddWidth = data.__isLinePath ? 0 : 10 * width;
                const storkeCapAddWidth = data.strokeCap === 'none' ? 0 : strokeWidth;
                width += Math.max(miterLimitAddWidth, storkeCapAddWidth);
            }
        }
        if (data.__useArrow)
            width += strokeWidth * 5;
        this.__layout.strokeBoxSpread = boxWidth;
        return width;
    },
    __updateRenderSpread() {
        let width = 0;
        const { shadow, innerShadow, blur, backgroundBlur } = this.__;
        if (shadow)
            shadow.forEach(item => width = Math.max(width, Math.max(Math.abs(item.y), Math.abs(item.x)) + (item.spread > 0 ? item.spread : 0) + item.blur * 1.5));
        if (blur)
            width = Math.max(width, blur);
        let shapeWidth = width = Math.ceil(width);
        if (innerShadow)
            innerShadow.forEach(item => shapeWidth = Math.max(shapeWidth, Math.max(Math.abs(item.y), Math.abs(item.x)) + (item.spread < 0 ? -item.spread : 0) + item.blur * 1.5));
        if (backgroundBlur)
            shapeWidth = Math.max(shapeWidth, backgroundBlur);
        this.__layout.renderShapeSpread = shapeWidth;
        return width + (this.__layout.strokeSpread || 0);
    }
};

const UIRender = {
    __updateChange() {
        const data = this.__;
        if (data.__useEffect) {
            const { shadow, innerShadow, blur, backgroundBlur } = this.__;
            data.__useEffect = !!(shadow || innerShadow || blur || backgroundBlur);
        }
        data.__checkSingle();
        const complex = data.__isFills || data.__isStrokes || data.cornerRadius || data.__useEffect;
        if (complex) {
            data.__complex = true;
        }
        else {
            data.__complex && (data.__complex = false);
        }
    },
    __drawFast(canvas, options) {
        drawFast(this, canvas, options);
    },
    __draw(canvas, options) {
        const data = this.__;
        if (data.__complex) {
            if (data.__needComputePaint)
                data.__computePaint();
            const { fill, stroke, __drawAfterFill } = data;
            this.__drawRenderPath(canvas);
            if (data.__useEffect) {
                const shape = Paint.shape(this, canvas, options);
                this.__nowWorld = this.__getNowWorld(options);
                const { shadow, innerShadow } = data;
                if (shadow)
                    Effect.shadow(this, canvas, shape);
                if (fill)
                    data.__isFills ? Paint.fills(fill, this, canvas) : Paint.fill(fill, this, canvas);
                if (__drawAfterFill)
                    this.__drawAfterFill(canvas, options);
                if (innerShadow)
                    Effect.innerShadow(this, canvas, shape);
                if (stroke)
                    data.__isStrokes ? Paint.strokes(stroke, this, canvas) : Paint.stroke(stroke, this, canvas);
                if (shape.worldCanvas)
                    shape.worldCanvas.recycle();
                shape.canvas.recycle();
            }
            else {
                if (fill)
                    data.__isFills ? Paint.fills(fill, this, canvas) : Paint.fill(fill, this, canvas);
                if (__drawAfterFill)
                    this.__drawAfterFill(canvas, options);
                if (stroke)
                    data.__isStrokes ? Paint.strokes(stroke, this, canvas) : Paint.stroke(stroke, this, canvas);
            }
        }
        else {
            if (data.__pathInputed) {
                drawFast(this, canvas, options);
            }
            else {
                this.__drawFast(canvas, options);
            }
        }
    },
    __renderShape(canvas, options, ignoreFill, ignoreStroke) {
        if (this.__worldOpacity) {
            canvas.setWorld(this.__nowWorld = this.__getNowWorld(options));
            const { fill, stroke } = this.__;
            this.__drawRenderPath(canvas);
            if (fill && !ignoreFill)
                this.__.__pixelFill ? Paint.fills(fill, this, canvas) : Paint.fill('#000000', this, canvas);
            if (this.__.__isCanvas)
                this.__drawAfterFill(canvas, options);
            if (stroke && !ignoreStroke)
                this.__.__pixelStroke ? Paint.strokes(stroke, this, canvas) : Paint.stroke('#000000', this, canvas);
        }
    },
    __drawAfterFill(canvas, options) {
        if (this.__.__clipAfterFill) {
            canvas.save();
            this.windingRule ? canvas.clip(this.windingRule) : canvas.clip();
            this.__drawContent(canvas, options);
            canvas.restore();
        }
        else
            this.__drawContent(canvas, options);
    }
};
function drawFast(ui, canvas, options) {
    const { fill, stroke, __drawAfterFill } = ui.__;
    ui.__drawRenderPath(canvas);
    if (fill)
        Paint.fill(fill, ui, canvas);
    if (__drawAfterFill)
        ui.__drawAfterFill(canvas, options);
    if (stroke)
        Paint.stroke(stroke, ui, canvas);
}

const RectRender = {
    __drawFast(canvas, options) {
        let { width, height, fill, stroke, __drawAfterFill } = this.__;
        if (fill) {
            canvas.fillStyle = fill;
            canvas.fillRect(0, 0, width, height);
        }
        if (__drawAfterFill)
            this.__drawAfterFill(canvas, options);
        if (stroke) {
            const { strokeAlign, __strokeWidth } = this.__;
            if (!__strokeWidth)
                return;
            canvas.setStroke(stroke, __strokeWidth, this.__);
            const half = __strokeWidth / 2;
            switch (strokeAlign) {
                case 'center':
                    canvas.strokeRect(0, 0, width, height);
                    break;
                case 'inside':
                    width -= __strokeWidth, height -= __strokeWidth;
                    if (width < 0 || height < 0) {
                        canvas.save();
                        this.__clip(canvas, options);
                        canvas.strokeRect(half, half, width, height);
                        canvas.restore();
                    }
                    else
                        canvas.strokeRect(half, half, width, height);
                    break;
                case 'outside':
                    canvas.strokeRect(-half, -half, width + __strokeWidth, height + __strokeWidth);
                    break;
            }
        }
    }
};

var UI_1;
let UI = UI_1 = class UI extends Leaf {
    get app() { return this.leafer && this.leafer.app; }
    get isFrame() { return false; }
    set scale(value) { MathHelper.assignScale(this, value); }
    get scale() { return this.__.scale; }
    get pen() {
        const { path } = this.__;
        pen.set(this.path = path || []);
        if (!path)
            this.__drawPathByBox(pen);
        return pen;
    }
    get editConfig() { return undefined; }
    get editOuter() { return ''; }
    get editInner() { return ''; }
    constructor(data) {
        super(data);
    }
    reset(_data) { }
    set(data, transition) {
        if (data) {
            if (transition) {
                if (transition === 'temp') {
                    this.lockNormalStyle = true;
                    Object.assign(this, data);
                    this.lockNormalStyle = false;
                }
                else
                    this.animate(data, transition);
            }
            else
                Object.assign(this, data);
        }
    }
    get(name) {
        return typeof name === 'string' ? this.__.__getInput(name) : this.__.__getInputData(name);
    }
    createProxyData() { return undefined; }
    find(_condition, _options) { return Plugin.need('find'); }
    findTag(tag) { return this.find({ tag }); }
    findOne(_condition, _options) { return Plugin.need('find'); }
    findId(id) { return this.findOne({ id }); }
    getPath(curve, pathForRender) {
        this.__layout.update();
        let path = pathForRender ? this.__.__pathForRender : this.__.path;
        if (!path)
            pen.set(path = []), this.__drawPathByBox(pen);
        return curve ? PathConvert.toCanvasData(path, true) : path;
    }
    getPathString(curve, pathForRender, floatLength) {
        return PathConvert.stringify(this.getPath(curve, pathForRender), floatLength);
    }
    load() {
        this.__.__computePaint();
    }
    __onUpdateSize() {
        if (this.__.__input) {
            const data = this.__;
            (data.lazy && !this.__inLazyBounds && !Export.running) ? data.__needComputePaint = true : data.__computePaint();
        }
    }
    __updateRenderPath() {
        if (this.__.path) {
            const data = this.__;
            data.__pathForRender = data.cornerRadius ? PathCorner.smooth(data.path, data.cornerRadius, data.cornerSmoothing) : data.path;
            if (data.__useArrow)
                PathArrow.addArrows(this, !data.cornerRadius);
        }
    }
    __drawRenderPath(canvas) {
        canvas.beginPath();
        this.__drawPathByData(canvas, this.__.__pathForRender);
    }
    __drawPath(canvas) {
        canvas.beginPath();
        this.__drawPathByData(canvas, this.__.path);
    }
    __drawPathByData(drawer, data) {
        data ? PathDrawer.drawPathByData(drawer, data) : this.__drawPathByBox(drawer);
    }
    __drawPathByBox(drawer) {
        const { x, y, width, height } = this.__layout.boxBounds;
        if (this.__.cornerRadius) {
            const { cornerRadius } = this.__;
            drawer.roundRect(x, y, width, height, typeof cornerRadius === 'number' ? [cornerRadius] : cornerRadius);
        }
        else
            drawer.rect(x, y, width, height);
    }
    animate(_keyframe, _options, _type, _isTemp) {
        return Plugin.need('animate');
    }
    killAnimate(_type, _nextStyle) { }
    export(_filename, _options) {
        return Plugin.need('export');
    }
    clone(data) {
        const json = this.toJSON();
        if (data)
            Object.assign(json, data);
        return UI_1.one(json);
    }
    static one(data, x, y, width, height) {
        return UICreator.get(data.tag || this.prototype.__tag, data, x, y, width, height);
    }
    static registerUI() {
        registerUI()(this);
    }
    static registerData(data) {
        dataProcessor(data)(this.prototype);
    }
    static setEditConfig(_config) { }
    static setEditOuter(_toolName) { }
    static setEditInner(_editorName) { }
    destroy() {
        this.fill = this.stroke = null;
        if (this.__animate)
            this.killAnimate();
        super.destroy();
    }
};
__decorate$1([
    dataProcessor(UIData)
], UI.prototype, "__", void 0);
__decorate$1([
    zoomLayerType()
], UI.prototype, "zoomLayer", void 0);
__decorate$1([
    dataType('')
], UI.prototype, "id", void 0);
__decorate$1([
    dataType('')
], UI.prototype, "name", void 0);
__decorate$1([
    dataType('')
], UI.prototype, "className", void 0);
__decorate$1([
    surfaceType('pass-through')
], UI.prototype, "blendMode", void 0);
__decorate$1([
    opacityType(1)
], UI.prototype, "opacity", void 0);
__decorate$1([
    visibleType(true)
], UI.prototype, "visible", void 0);
__decorate$1([
    surfaceType(false)
], UI.prototype, "locked", void 0);
__decorate$1([
    sortType(0)
], UI.prototype, "zIndex", void 0);
__decorate$1([
    maskType(false)
], UI.prototype, "mask", void 0);
__decorate$1([
    eraserType(false)
], UI.prototype, "eraser", void 0);
__decorate$1([
    positionType(0, true)
], UI.prototype, "x", void 0);
__decorate$1([
    positionType(0, true)
], UI.prototype, "y", void 0);
__decorate$1([
    boundsType(100, true)
], UI.prototype, "width", void 0);
__decorate$1([
    boundsType(100, true)
], UI.prototype, "height", void 0);
__decorate$1([
    scaleType(1, true)
], UI.prototype, "scaleX", void 0);
__decorate$1([
    scaleType(1, true)
], UI.prototype, "scaleY", void 0);
__decorate$1([
    rotationType(0, true)
], UI.prototype, "rotation", void 0);
__decorate$1([
    rotationType(0, true)
], UI.prototype, "skewX", void 0);
__decorate$1([
    rotationType(0, true)
], UI.prototype, "skewY", void 0);
__decorate$1([
    positionType(0, true)
], UI.prototype, "offsetX", void 0);
__decorate$1([
    positionType(0, true)
], UI.prototype, "offsetY", void 0);
__decorate$1([
    positionType(0, true)
], UI.prototype, "scrollX", void 0);
__decorate$1([
    positionType(0, true)
], UI.prototype, "scrollY", void 0);
__decorate$1([
    autoLayoutType()
], UI.prototype, "origin", void 0);
__decorate$1([
    autoLayoutType()
], UI.prototype, "around", void 0);
__decorate$1([
    dataType(false)
], UI.prototype, "lazy", void 0);
__decorate$1([
    naturalBoundsType(1)
], UI.prototype, "pixelRatio", void 0);
__decorate$1([
    pathInputType()
], UI.prototype, "path", void 0);
__decorate$1([
    pathType()
], UI.prototype, "windingRule", void 0);
__decorate$1([
    pathType(true)
], UI.prototype, "closed", void 0);
__decorate$1([
    boundsType(0)
], UI.prototype, "padding", void 0);
__decorate$1([
    boundsType(false)
], UI.prototype, "lockRatio", void 0);
__decorate$1([
    boundsType()
], UI.prototype, "widthRange", void 0);
__decorate$1([
    boundsType()
], UI.prototype, "heightRange", void 0);
__decorate$1([
    dataType(false)
], UI.prototype, "draggable", void 0);
__decorate$1([
    dataType()
], UI.prototype, "dragBounds", void 0);
__decorate$1([
    dataType(false)
], UI.prototype, "editable", void 0);
__decorate$1([
    hitType(true)
], UI.prototype, "hittable", void 0);
__decorate$1([
    hitType('path')
], UI.prototype, "hitFill", void 0);
__decorate$1([
    strokeType('path')
], UI.prototype, "hitStroke", void 0);
__decorate$1([
    hitType(false)
], UI.prototype, "hitBox", void 0);
__decorate$1([
    hitType(true)
], UI.prototype, "hitChildren", void 0);
__decorate$1([
    hitType(true)
], UI.prototype, "hitSelf", void 0);
__decorate$1([
    hitType()
], UI.prototype, "hitRadius", void 0);
__decorate$1([
    cursorType('')
], UI.prototype, "cursor", void 0);
__decorate$1([
    surfaceType()
], UI.prototype, "fill", void 0);
__decorate$1([
    strokeType()
], UI.prototype, "stroke", void 0);
__decorate$1([
    strokeType('inside')
], UI.prototype, "strokeAlign", void 0);
__decorate$1([
    strokeType(1)
], UI.prototype, "strokeWidth", void 0);
__decorate$1([
    strokeType(false)
], UI.prototype, "strokeWidthFixed", void 0);
__decorate$1([
    strokeType('none')
], UI.prototype, "strokeCap", void 0);
__decorate$1([
    strokeType('miter')
], UI.prototype, "strokeJoin", void 0);
__decorate$1([
    strokeType()
], UI.prototype, "dashPattern", void 0);
__decorate$1([
    strokeType()
], UI.prototype, "dashOffset", void 0);
__decorate$1([
    strokeType(10)
], UI.prototype, "miterLimit", void 0);
__decorate$1([
    pathType(0)
], UI.prototype, "cornerRadius", void 0);
__decorate$1([
    pathType()
], UI.prototype, "cornerSmoothing", void 0);
__decorate$1([
    effectType()
], UI.prototype, "shadow", void 0);
__decorate$1([
    effectType()
], UI.prototype, "innerShadow", void 0);
__decorate$1([
    effectType()
], UI.prototype, "blur", void 0);
__decorate$1([
    effectType()
], UI.prototype, "backgroundBlur", void 0);
__decorate$1([
    effectType()
], UI.prototype, "grayscale", void 0);
__decorate$1([
    dataType({})
], UI.prototype, "data", void 0);
__decorate$1([
    rewrite(Leaf.prototype.reset)
], UI.prototype, "reset", null);
UI = UI_1 = __decorate$1([
    useModule(UIBounds),
    useModule(UIRender),
    rewriteAble()
], UI);

let Group = class Group extends UI {
    get __tag() { return 'Group'; }
    get isBranch() { return true; }
    constructor(data) {
        super(data);
    }
    reset(data) {
        this.__setBranch();
        super.reset(data);
    }
    __setBranch() {
        if (!this.children)
            this.children = [];
    }
    set(data, transition) {
        if (data) {
            if (data.children) {
                const { children } = data;
                delete data.children;
                this.children ? this.clear() : this.__setBranch();
                super.set(data, transition);
                children.forEach(child => this.add(child));
                data.children = children;
            }
            else
                super.set(data, transition);
        }
    }
    toJSON(options) {
        const data = super.toJSON(options);
        data.children = this.children.map(child => child.toJSON(options));
        return data;
    }
    pick(_hitPoint, _options) { return undefined; }
    addAt(child, index) {
        this.add(child, index);
    }
    addAfter(child, after) {
        this.add(child, this.children.indexOf(after) + 1);
    }
    addBefore(child, before) {
        this.add(child, this.children.indexOf(before));
    }
    add(_child, _index) { }
    addMany(..._children) { }
    remove(_child, _destroy) { }
    removeAll(_destroy) { }
    clear() { }
};
__decorate$1([
    dataProcessor(GroupData)
], Group.prototype, "__", void 0);
Group = __decorate$1([
    useModule(Branch),
    registerUI()
], Group);

var Leafer_1;
const debug$4 = Debug.get('Leafer');
let Leafer = Leafer_1 = class Leafer extends Group {
    get __tag() { return 'Leafer'; }
    get isApp() { return false; }
    get app() { return this.parent || this; }
    get isLeafer() { return true; }
    get imageReady() { return this.viewReady && ImageManager.isComplete; }
    get layoutLocked() { return !this.layouter.running; }
    get FPS() { return this.renderer ? this.renderer.FPS : 60; }
    get cursorPoint() { return (this.interaction && this.interaction.hoverData) || { x: this.width / 2, y: this.height / 2 }; }
    get clientBounds() { return this.canvas && this.canvas.getClientBounds(); }
    constructor(userConfig, data) {
        super(data);
        this.config = {
            start: true,
            hittable: true,
            smooth: true,
            lazySpeard: 100
        };
        this.leafs = 0;
        this.__eventIds = [];
        this.__controllers = [];
        this.__readyWait = [];
        this.__viewReadyWait = [];
        this.__viewCompletedWait = [];
        this.__nextRenderWait = [];
        this.userConfig = userConfig;
        if (userConfig && (userConfig.view || userConfig.width))
            this.init(userConfig);
        Leafer_1.list.add(this);
    }
    init(userConfig, parentApp) {
        if (this.canvas)
            return;
        let start;
        const { config } = this;
        this.__setLeafer(this);
        if (parentApp) {
            this.parentApp = parentApp;
            this.__bindApp(parentApp);
            start = parentApp.running;
        }
        if (userConfig) {
            this.parent = parentApp;
            this.initType(userConfig.type);
            this.parent = undefined;
            DataHelper.assign(config, userConfig);
        }
        const canvas = this.canvas = Creator.canvas(config);
        this.__controllers.push(this.renderer = Creator.renderer(this, canvas, config), this.watcher = Creator.watcher(this, config), this.layouter = Creator.layouter(this, config));
        if (this.isApp)
            this.__setApp();
        this.__checkAutoLayout(config, parentApp);
        this.view = canvas.view;
        if (!parentApp) {
            this.selector = Creator.selector(this);
            this.interaction = Creator.interaction(this, canvas, this.selector, config);
            if (this.interaction) {
                this.__controllers.unshift(this.interaction);
                this.hitCanvasManager = Creator.hitCanvasManager();
            }
            this.canvasManager = new CanvasManager();
            start = config.start;
        }
        this.hittable = config.hittable;
        this.fill = config.fill;
        this.canvasManager.add(canvas);
        this.__listenEvents();
        if (start)
            this.__startTimer = setTimeout(this.start.bind(this));
        WaitHelper.run(this.__initWait);
        this.onInit();
    }
    onInit() { }
    initType(_type) { }
    set(data, transition) {
        this.waitInit(() => { super.set(data, transition); });
    }
    start() {
        clearTimeout(this.__startTimer);
        if (!this.running && this.canvas) {
            this.running = true;
            this.ready ? this.emitLeafer(LeaferEvent.RESTART) : this.emitLeafer(LeaferEvent.START);
            this.__controllers.forEach(item => item.start());
            if (!this.isApp)
                this.renderer.render();
        }
    }
    stop() {
        clearTimeout(this.__startTimer);
        if (this.running && this.canvas) {
            this.__controllers.forEach(item => item.stop());
            this.running = false;
            this.emitLeafer(LeaferEvent.STOP);
        }
    }
    unlockLayout() {
        this.layouter.start();
        this.updateLayout();
    }
    lockLayout() {
        this.updateLayout();
        this.layouter.stop();
    }
    resize(size) {
        const data = DataHelper.copyAttrs({}, size, canvasSizeAttrs);
        Object.keys(data).forEach(key => this[key] = data[key]);
    }
    forceRender(bounds, sync) {
        const { renderer } = this;
        if (renderer) {
            renderer.addBlock(bounds ? new Bounds(bounds) : this.canvas.bounds);
            if (this.viewReady)
                sync ? renderer.render() : renderer.update();
        }
    }
    requestRender(change = false) {
        if (this.renderer)
            this.renderer.update(change);
    }
    updateCursor(cursor) {
        const i = this.interaction;
        if (i)
            cursor ? i.setCursor(cursor) : i.updateCursor();
    }
    updateLazyBounds() {
        this.lazyBounds = this.canvas.bounds.clone().spread(this.config.lazySpeard);
    }
    __doResize(size) {
        const { canvas } = this;
        if (!canvas || canvas.isSameSize(size))
            return;
        const old = DataHelper.copyAttrs({}, this.canvas, canvasSizeAttrs);
        canvas.resize(size);
        this.updateLazyBounds();
        this.__onResize(new ResizeEvent(size, old));
    }
    __onResize(event) {
        this.emitEvent(event);
        DataHelper.copyAttrs(this.__, event, canvasSizeAttrs);
        setTimeout(() => { if (this.canvasManager)
            this.canvasManager.clearRecycled(); }, 0);
    }
    __setApp() { }
    __bindApp(app) {
        this.selector = app.selector;
        this.interaction = app.interaction;
        this.canvasManager = app.canvasManager;
        this.hitCanvasManager = app.hitCanvasManager;
    }
    __setLeafer(leafer) {
        this.leafer = leafer;
        this.__level = 1;
    }
    __checkAutoLayout(config, parentApp) {
        if (!parentApp) {
            if (!config.width || !config.height)
                this.autoLayout = new AutoBounds(config);
            this.canvas.startAutoLayout(this.autoLayout, this.__onResize.bind(this));
        }
    }
    __setAttr(attrName, newValue) {
        if (this.canvas) {
            if (canvasSizeAttrs.includes(attrName)) {
                if (!newValue)
                    debug$4.warn(attrName + ' is 0');
                this.__changeCanvasSize(attrName, newValue);
            }
            else if (attrName === 'fill') {
                this.__changeFill(newValue);
            }
            else if (attrName === 'hittable') {
                if (!this.parent)
                    this.canvas.hittable = newValue;
            }
            else if (attrName === 'zIndex') {
                this.canvas.zIndex = newValue;
                setTimeout(() => this.parent && this.parent.__updateSortChildren());
            }
        }
        return super.__setAttr(attrName, newValue);
    }
    __getAttr(attrName) {
        if (this.canvas && canvasSizeAttrs.includes(attrName))
            return this.canvas[attrName];
        return super.__getAttr(attrName);
    }
    __changeCanvasSize(attrName, newValue) {
        const data = DataHelper.copyAttrs({}, this.canvas, canvasSizeAttrs);
        data[attrName] = this.config[attrName] = newValue;
        if (newValue)
            this.canvas.stopAutoLayout();
        this.__doResize(data);
    }
    __changeFill(newValue) {
        this.config.fill = newValue;
        if (this.canvas.allowBackgroundColor)
            this.canvas.backgroundColor = newValue;
        else
            this.forceRender();
    }
    __onCreated() {
        this.created = true;
    }
    __onReady() {
        this.ready = true;
        this.emitLeafer(LeaferEvent.BEFORE_READY);
        this.emitLeafer(LeaferEvent.READY);
        this.emitLeafer(LeaferEvent.AFTER_READY);
        WaitHelper.run(this.__readyWait);
    }
    __onViewReady() {
        if (this.viewReady)
            return;
        this.viewReady = true;
        this.emitLeafer(LeaferEvent.VIEW_READY);
        WaitHelper.run(this.__viewReadyWait);
    }
    __onLayoutEnd() {
        const { grow, growWidth, growHeight } = this.config;
        if (grow) {
            let { width, height, pixelRatio } = this;
            const bounds = grow === 'box' ? this.worldBoxBounds : this.__world;
            if (growWidth !== false)
                width = Math.max(1, bounds.x + bounds.width);
            if (growHeight !== false)
                height = Math.max(1, bounds.y + bounds.height);
            this.__doResize({ width, height, pixelRatio });
        }
        if (!this.ready)
            this.__onReady();
    }
    __onNextRender() {
        if (this.viewReady) {
            WaitHelper.run(this.__nextRenderWait);
            const { imageReady } = this;
            if (imageReady && !this.viewCompleted)
                this.__checkViewCompleted();
            if (!imageReady) {
                this.viewCompleted = false;
                this.requestRender();
            }
        }
        else
            this.requestRender();
    }
    __checkViewCompleted(emit = true) {
        this.nextRender(() => {
            if (this.imageReady) {
                if (emit)
                    this.emitLeafer(LeaferEvent.VIEW_COMPLETED);
                WaitHelper.run(this.__viewCompletedWait);
                this.viewCompleted = true;
            }
        });
    }
    __onWatchData() {
        if (this.watcher.childrenChanged && this.interaction) {
            this.nextRender(() => this.interaction.updateCursor());
        }
    }
    waitInit(item, bind) {
        if (bind)
            item = item.bind(bind);
        if (!this.__initWait)
            this.__initWait = [];
        this.canvas ? item() : this.__initWait.push(item);
    }
    waitReady(item, bind) {
        if (bind)
            item = item.bind(bind);
        this.ready ? item() : this.__readyWait.push(item);
    }
    waitViewReady(item, bind) {
        if (bind)
            item = item.bind(bind);
        this.viewReady ? item() : this.__viewReadyWait.push(item);
    }
    waitViewCompleted(item, bind) {
        if (bind)
            item = item.bind(bind);
        this.__viewCompletedWait.push(item);
        if (this.viewCompleted)
            this.__checkViewCompleted(false);
        else if (!this.running)
            this.start();
    }
    nextRender(item, bind, off) {
        if (bind)
            item = item.bind(bind);
        const list = this.__nextRenderWait;
        if (off) {
            for (let i = 0; i < list.length; i++) {
                if (list[i] === item) {
                    list.splice(i, 1);
                    break;
                }
            }
        }
        else
            list.push(item);
        this.requestRender();
    }
    zoom(_zoomType, _padding, _fixedScale) {
        return Plugin.need('view');
    }
    getValidMove(moveX, moveY) { return { x: moveX, y: moveY }; }
    getValidScale(changeScale) { return changeScale; }
    getWorldPointByClient(clientPoint, updateClient) {
        return this.interaction && this.interaction.getLocal(clientPoint, updateClient);
    }
    getPagePointByClient(clientPoint, updateClient) {
        return this.getPagePoint(this.getWorldPointByClient(clientPoint, updateClient));
    }
    updateClientBounds() {
        this.canvas && this.canvas.updateClientBounds();
    }
    receiveEvent(_event) { }
    emitLeafer(type) {
        this.emitEvent(new LeaferEvent(type, this));
    }
    __listenEvents() {
        const runId = Run.start('FirstCreate ' + this.innerName);
        this.once(LeaferEvent.START, () => Run.end(runId));
        this.once(LayoutEvent.START, () => this.updateLazyBounds());
        this.once(RenderEvent.START, () => this.__onCreated());
        this.once(RenderEvent.END, () => this.__onViewReady());
        this.__eventIds.push(this.on_(WatchEvent.DATA, this.__onWatchData, this), this.on_(LayoutEvent.END, this.__onLayoutEnd, this), this.on_(RenderEvent.NEXT, this.__onNextRender, this));
    }
    __removeListenEvents() {
        this.off_(this.__eventIds);
        this.__eventIds.length = 0;
    }
    destroy(sync) {
        const doDestory = () => {
            if (!this.destroyed) {
                Leafer_1.list.remove(this);
                try {
                    this.stop();
                    this.emitEvent(new LeaferEvent(LeaferEvent.END, this));
                    this.__removeListenEvents();
                    this.__controllers.forEach(item => !(this.parent && item === this.interaction) && item.destroy());
                    this.__controllers.length = 0;
                    if (!this.parent) {
                        if (this.selector)
                            this.selector.destroy();
                        if (this.hitCanvasManager)
                            this.hitCanvasManager.destroy();
                        this.canvasManager.destroy();
                    }
                    this.canvas.destroy();
                    this.config.view = this.view = this.parentApp = null;
                    if (this.userConfig)
                        this.userConfig.view = null;
                    super.destroy();
                    setTimeout(() => { ImageManager.clearRecycled(); }, 100);
                }
                catch (e) {
                    debug$4.error(e);
                }
            }
        };
        sync ? doDestory() : setTimeout(doDestory);
    }
};
Leafer.list = new LeafList();
__decorate$1([
    dataProcessor(LeaferData)
], Leafer.prototype, "__", void 0);
__decorate$1([
    boundsType()
], Leafer.prototype, "pixelRatio", void 0);
Leafer = Leafer_1 = __decorate$1([
    registerUI()
], Leafer);

let Rect = class Rect extends UI {
    get __tag() { return 'Rect'; }
    constructor(data) {
        super(data);
    }
};
__decorate$1([
    dataProcessor(RectData)
], Rect.prototype, "__", void 0);
Rect = __decorate$1([
    useModule(RectRender),
    rewriteAble(),
    registerUI()
], Rect);

const { copy: copy$3, add, includes: includes$1 } = BoundsHelper;
const rect$1 = Rect.prototype, group = Group.prototype;
const childrenRenderBounds = {};
let Box = class Box extends Group {
    get __tag() { return 'Box'; }
    get isBranchLeaf() { return true; }
    constructor(data) {
        super(data);
        this.__layout.renderChanged || this.__layout.renderChange();
    }
    __updateStrokeSpread() { return 0; }
    __updateRectRenderSpread() { return 0; }
    __updateRenderSpread() { return this.__updateRectRenderSpread() || -1; }
    __updateRectBoxBounds() { }
    __updateBoxBounds(_secondLayout) {
        const data = this.__;
        if (this.children.length) {
            if (data.__autoSide) {
                super.__updateBoxBounds();
                const { boxBounds } = this.__layout;
                if (!data.__autoSize) {
                    if (data.__autoWidth) {
                        boxBounds.width += boxBounds.x, boxBounds.x = 0;
                        boxBounds.height = data.height, boxBounds.y = 0;
                    }
                    else {
                        boxBounds.height += boxBounds.y, boxBounds.y = 0;
                        boxBounds.width = data.width, boxBounds.x = 0;
                    }
                }
                this.__updateNaturalSize();
            }
            else
                this.__updateRectBoxBounds();
        }
        else
            this.__updateRectBoxBounds();
    }
    __updateStrokeBounds() { }
    __updateRenderBounds() {
        let isOverflow;
        const { renderBounds } = this.__layout;
        if (this.children.length) {
            super.__updateRenderBounds();
            copy$3(childrenRenderBounds, renderBounds);
            this.__updateRectRenderBounds();
            isOverflow = !includes$1(renderBounds, childrenRenderBounds);
            if (isOverflow && this.__.overflow !== 'hide')
                add(renderBounds, childrenRenderBounds);
        }
        else
            this.__updateRectRenderBounds();
        !this.isOverflow !== !isOverflow && (this.isOverflow = isOverflow);
    }
    __updateRectRenderBounds() { }
    __updateRectChange() { }
    __updateChange() {
        super.__updateChange();
        this.__updateRectChange();
    }
    __renderRect(_canvas, _options) { }
    __renderGroup(_canvas, _options) { }
    __render(canvas, options) {
        if (this.__.__drawAfterFill) {
            this.__renderRect(canvas, options);
        }
        else {
            this.__renderRect(canvas, options);
            if (this.children.length)
                this.__renderGroup(canvas, options);
        }
    }
    __drawContent(canvas, options) {
        this.__renderGroup(canvas, options);
        if (this.__.__hasStroke) {
            canvas.setWorld(this.__nowWorld);
            this.__drawRenderPath(canvas);
        }
    }
};
__decorate$1([
    dataProcessor(BoxData)
], Box.prototype, "__", void 0);
__decorate$1([
    dataType(false)
], Box.prototype, "resizeChildren", void 0);
__decorate$1([
    affectRenderBoundsType('show')
], Box.prototype, "overflow", void 0);
__decorate$1([
    rewrite(rect$1.__updateStrokeSpread)
], Box.prototype, "__updateStrokeSpread", null);
__decorate$1([
    rewrite(rect$1.__updateRenderSpread)
], Box.prototype, "__updateRectRenderSpread", null);
__decorate$1([
    rewrite(rect$1.__updateBoxBounds)
], Box.prototype, "__updateRectBoxBounds", null);
__decorate$1([
    rewrite(rect$1.__updateStrokeBounds)
], Box.prototype, "__updateStrokeBounds", null);
__decorate$1([
    rewrite(rect$1.__updateRenderBounds)
], Box.prototype, "__updateRectRenderBounds", null);
__decorate$1([
    rewrite(rect$1.__updateChange)
], Box.prototype, "__updateRectChange", null);
__decorate$1([
    rewrite(rect$1.__render)
], Box.prototype, "__renderRect", null);
__decorate$1([
    rewrite(group.__render)
], Box.prototype, "__renderGroup", null);
Box = __decorate$1([
    rewriteAble(),
    registerUI()
], Box);

let Frame = class Frame extends Box {
    get __tag() { return 'Frame'; }
    get isFrame() { return true; }
    constructor(data) {
        super(data);
    }
};
__decorate$1([
    dataProcessor(FrameData)
], Frame.prototype, "__", void 0);
__decorate$1([
    surfaceType('#FFFFFF')
], Frame.prototype, "fill", void 0);
__decorate$1([
    affectRenderBoundsType('hide')
], Frame.prototype, "overflow", void 0);
Frame = __decorate$1([
    registerUI()
], Frame);

const { moveTo: moveTo$3, closePath: closePath$2, ellipse } = PathCommandDataHelper;
let Ellipse = class Ellipse extends UI {
    get __tag() { return 'Ellipse'; }
    constructor(data) {
        super(data);
    }
    __updatePath() {
        const { width, height, innerRadius, startAngle, endAngle } = this.__;
        const rx = width / 2, ry = height / 2;
        const path = this.__.path = [];
        if (innerRadius) {
            if (startAngle || endAngle) {
                if (innerRadius < 1)
                    ellipse(path, rx, ry, rx * innerRadius, ry * innerRadius, 0, startAngle, endAngle, false);
                ellipse(path, rx, ry, rx, ry, 0, endAngle, startAngle, true);
                if (innerRadius < 1)
                    closePath$2(path);
            }
            else {
                if (innerRadius < 1) {
                    ellipse(path, rx, ry, rx * innerRadius, ry * innerRadius);
                    moveTo$3(path, width, ry);
                }
                ellipse(path, rx, ry, rx, ry, 0, 360, 0, true);
            }
            if (Platform.ellipseToCurve)
                this.__.path = this.getPath(true);
        }
        else {
            if (startAngle || endAngle) {
                moveTo$3(path, rx, ry);
                ellipse(path, rx, ry, rx, ry, 0, startAngle, endAngle, false);
                closePath$2(path);
            }
            else {
                ellipse(path, rx, ry, rx, ry);
            }
        }
    }
};
__decorate$1([
    dataProcessor(EllipseData)
], Ellipse.prototype, "__", void 0);
__decorate$1([
    pathType(0)
], Ellipse.prototype, "innerRadius", void 0);
__decorate$1([
    pathType(0)
], Ellipse.prototype, "startAngle", void 0);
__decorate$1([
    pathType(0)
], Ellipse.prototype, "endAngle", void 0);
Ellipse = __decorate$1([
    registerUI()
], Ellipse);

const { moveTo: moveTo$2, lineTo: lineTo$2, drawPoints: drawPoints$1 } = PathCommandDataHelper;
const { rotate: rotate$1, getAngle: getAngle$1, getDistance: getDistance$2, defaultPoint } = PointHelper;
const { toBounds } = PathBounds;
let Line = class Line extends UI {
    get __tag() { return 'Line'; }
    get toPoint() {
        const { width, rotation } = this.__;
        const to = getPointData();
        if (width)
            to.x = width;
        if (rotation)
            rotate$1(to, rotation);
        return to;
    }
    set toPoint(value) {
        this.width = getDistance$2(defaultPoint, value);
        this.rotation = getAngle$1(defaultPoint, value);
        if (this.height)
            this.height = 0;
    }
    constructor(data) {
        super(data);
    }
    __updatePath() {
        const data = this.__;
        const path = data.path = [];
        if (data.points) {
            drawPoints$1(path, data.points, false, data.closed);
        }
        else {
            moveTo$2(path, 0, 0);
            lineTo$2(path, this.width, 0);
        }
    }
    __updateRenderPath() {
        const data = this.__;
        if (!this.pathInputed && data.points && data.curve) {
            drawPoints$1(data.__pathForRender = [], data.points, data.curve, data.closed);
            if (data.__useArrow)
                PathArrow.addArrows(this, false);
        }
        else
            super.__updateRenderPath();
    }
    __updateBoxBounds() {
        if (this.points) {
            toBounds(this.__.__pathForRender, this.__layout.boxBounds);
        }
        else
            super.__updateBoxBounds();
    }
};
__decorate$1([
    dataProcessor(LineData)
], Line.prototype, "__", void 0);
__decorate$1([
    affectStrokeBoundsType('center')
], Line.prototype, "strokeAlign", void 0);
__decorate$1([
    boundsType(0)
], Line.prototype, "height", void 0);
__decorate$1([
    pathType()
], Line.prototype, "points", void 0);
__decorate$1([
    pathType(0)
], Line.prototype, "curve", void 0);
__decorate$1([
    pathType(false)
], Line.prototype, "closed", void 0);
Line = __decorate$1([
    registerUI()
], Line);

const { sin: sin$1, cos: cos$1, PI: PI$1 } = Math;
const { moveTo: moveTo$1, lineTo: lineTo$1, closePath: closePath$1, drawPoints } = PathCommandDataHelper;
const line = Line.prototype;
let Polygon = class Polygon extends UI {
    get __tag() { return 'Polygon'; }
    constructor(data) {
        super(data);
    }
    __updatePath() {
        const path = this.__.path = [];
        if (this.__.points) {
            drawPoints(path, this.__.points, false, true);
        }
        else {
            const { width, height, sides } = this.__;
            const rx = width / 2, ry = height / 2;
            moveTo$1(path, rx, 0);
            for (let i = 1; i < sides; i++) {
                lineTo$1(path, rx + rx * sin$1((i * 2 * PI$1) / sides), ry - ry * cos$1((i * 2 * PI$1) / sides));
            }
        }
        closePath$1(path);
    }
    __updateRenderPath() { }
    __updateBoxBounds() { }
};
__decorate$1([
    dataProcessor(PolygonData)
], Polygon.prototype, "__", void 0);
__decorate$1([
    pathType(3)
], Polygon.prototype, "sides", void 0);
__decorate$1([
    pathType()
], Polygon.prototype, "points", void 0);
__decorate$1([
    pathType(0)
], Polygon.prototype, "curve", void 0);
__decorate$1([
    rewrite(line.__updateRenderPath)
], Polygon.prototype, "__updateRenderPath", null);
__decorate$1([
    rewrite(line.__updateBoxBounds)
], Polygon.prototype, "__updateBoxBounds", null);
Polygon = __decorate$1([
    rewriteAble(),
    registerUI()
], Polygon);

const { sin, cos, PI } = Math;
const { moveTo, lineTo, closePath } = PathCommandDataHelper;
let Star = class Star extends UI {
    get __tag() { return 'Star'; }
    constructor(data) {
        super(data);
    }
    __updatePath() {
        const { width, height, corners, innerRadius } = this.__;
        const rx = width / 2, ry = height / 2;
        const path = this.__.path = [];
        moveTo(path, rx, 0);
        for (let i = 1; i < corners * 2; i++) {
            lineTo(path, rx + (i % 2 === 0 ? rx : rx * innerRadius) * sin((i * PI) / corners), ry - (i % 2 === 0 ? ry : ry * innerRadius) * cos((i * PI) / corners));
        }
        closePath(path);
    }
};
__decorate$1([
    dataProcessor(StarData)
], Star.prototype, "__", void 0);
__decorate$1([
    pathType(5)
], Star.prototype, "corners", void 0);
__decorate$1([
    pathType(0.382)
], Star.prototype, "innerRadius", void 0);
Star = __decorate$1([
    registerUI()
], Star);

let Image$1 = class Image extends Rect {
    get __tag() { return 'Image'; }
    get ready() { return this.image ? this.image.ready : false; }
    constructor(data) {
        super(data);
        this.on(ImageEvent.LOADED, (e) => {
            if (e.attrName === 'fill' && e.attrValue.url === this.url)
                this.image = e.image;
        });
    }
    destroy() {
        this.image = null;
        super.destroy();
    }
};
__decorate$1([
    dataProcessor(ImageData)
], Image$1.prototype, "__", void 0);
__decorate$1([
    boundsType('')
], Image$1.prototype, "url", void 0);
Image$1 = __decorate$1([
    registerUI()
], Image$1);

let Canvas = class Canvas extends Rect {
    get __tag() { return 'Canvas'; }
    get ready() { return !this.url; }
    constructor(data) {
        super(data);
        this.canvas = Creator.canvas(this.__);
        this.context = this.canvas.context;
        if (data && data.url)
            this.drawImage(data.url);
    }
    drawImage(url) {
        new LeaferImage({ url }).load((image) => {
            this.context.drawImage(image.view, 0, 0);
            this.url = undefined;
            this.paint();
            this.emitEvent(new ImageEvent(ImageEvent.LOADED, { image }));
        });
    }
    draw(ui, offset, scale, rotation) {
        const matrix = new Matrix(ui.worldTransform).invert();
        const m = new Matrix();
        if (offset)
            m.translate(offset.x, offset.y);
        if (scale)
            typeof scale === 'number' ? m.scale(scale) : m.scale(scale.x, scale.y);
        if (rotation)
            m.rotate(rotation);
        matrix.multiplyParent(m);
        ui.__render(this.canvas, { matrix: matrix.withScale() });
        this.paint();
    }
    paint() {
        this.forceRender();
    }
    __drawContent(canvas, _options) {
        const { width, height } = this.__, { view } = this.canvas;
        canvas.drawImage(view, 0, 0, view.width, view.height, 0, 0, width, height);
    }
    __updateSize() {
        const { canvas } = this;
        if (canvas) {
            const { smooth, safeResize } = this.__;
            canvas.resize(this.__, safeResize);
            if (canvas.smooth !== smooth)
                canvas.smooth = smooth;
        }
    }
    destroy() {
        if (this.canvas) {
            this.canvas.destroy();
            this.canvas = this.context = null;
        }
        super.destroy();
    }
};
__decorate$1([
    dataProcessor(CanvasData)
], Canvas.prototype, "__", void 0);
__decorate$1([
    resizeType(100)
], Canvas.prototype, "width", void 0);
__decorate$1([
    resizeType(100)
], Canvas.prototype, "height", void 0);
__decorate$1([
    resizeType(1)
], Canvas.prototype, "pixelRatio", void 0);
__decorate$1([
    resizeType(true)
], Canvas.prototype, "smooth", void 0);
__decorate$1([
    dataType(false)
], Canvas.prototype, "safeResize", void 0);
__decorate$1([
    resizeType()
], Canvas.prototype, "contextSettings", void 0);
Canvas = __decorate$1([
    registerUI()
], Canvas);

const { copyAndSpread, includes, isSame: isSame$1, spread, setList } = BoundsHelper;
let Text = class Text extends UI {
    get __tag() { return 'Text'; }
    get textDrawData() {
        this.__layout.update();
        return this.__.__textDrawData;
    }
    constructor(data) {
        super(data);
    }
    __drawHitPath(canvas) {
        const { __lineHeight, fontSize, __baseLine, __textDrawData: data } = this.__;
        canvas.beginPath();
        if (this.__.__letterSpacing < 0) {
            this.__drawPathByData(canvas);
        }
        else {
            data.rows.forEach(row => canvas.rect(row.x, row.y - __baseLine, row.width, __lineHeight < fontSize ? fontSize : __lineHeight));
        }
    }
    __drawPathByData(drawer, _data) {
        const { x, y, width, height } = this.__layout.boxBounds;
        drawer.rect(x, y, width, height);
    }
    __drawRenderPath(canvas) {
        canvas.font = this.__.__font;
    }
    __updateTextDrawData() {
        const data = this.__;
        const { lineHeight, letterSpacing, fontFamily, fontSize, fontWeight, italic, textCase, textOverflow, padding } = data;
        data.__lineHeight = UnitConvert.number(lineHeight, fontSize);
        data.__letterSpacing = UnitConvert.number(letterSpacing, fontSize);
        data.__padding = padding ? MathHelper.fourNumber(padding) : undefined;
        data.__baseLine = data.__lineHeight - (data.__lineHeight - fontSize * 0.7) / 2;
        data.__font = `${italic ? 'italic ' : ''}${textCase === 'small-caps' ? 'small-caps ' : ''}${fontWeight !== 'normal' ? fontWeight + ' ' : ''}${fontSize}px ${fontFamily}`;
        data.__clipText = textOverflow !== 'show' && !data.__autoSize;
        data.__textDrawData = TextConvert.getDrawData(data.text, this.__);
    }
    __updateBoxBounds() {
        const data = this.__;
        const layout = this.__layout;
        const { fontSize, italic, padding, __autoWidth: autoWidth, __autoHeight: autoHeight } = data;
        this.__updateTextDrawData();
        const { bounds } = data.__textDrawData;
        const b = layout.boxBounds;
        if (data.__lineHeight < fontSize)
            spread(bounds, fontSize / 2);
        if (autoWidth || autoHeight) {
            b.x = autoWidth ? bounds.x : 0;
            b.y = autoHeight ? bounds.y : 0;
            b.width = autoWidth ? bounds.width : data.width;
            b.height = autoHeight ? bounds.height : data.height;
            if (padding) {
                const [top, right, bottom, left] = data.__padding;
                if (autoWidth)
                    b.x -= left, b.width += (right + left);
                if (autoHeight)
                    b.y -= top, b.height += (bottom + top);
            }
            this.__updateNaturalSize();
        }
        else
            super.__updateBoxBounds();
        if (italic)
            b.width += fontSize * 0.16;
        const contentBounds = includes(b, bounds) ? b : bounds;
        if (!isSame$1(contentBounds, layout.contentBounds)) {
            layout.contentBounds = contentBounds;
            layout.renderChanged = true;
            setList(data.__textBoxBounds = {}, [b, bounds]);
        }
        else
            data.__textBoxBounds = contentBounds;
    }
    __updateRenderSpread() {
        let width = super.__updateRenderSpread();
        if (!width)
            width = this.__layout.boxBounds === this.__layout.contentBounds ? 0 : 1;
        return width;
    }
    __updateRenderBounds() {
        copyAndSpread(this.__layout.renderBounds, this.__.__textBoxBounds, this.__layout.renderSpread);
    }
};
__decorate$1([
    dataProcessor(TextData)
], Text.prototype, "__", void 0);
__decorate$1([
    boundsType(0)
], Text.prototype, "width", void 0);
__decorate$1([
    boundsType(0)
], Text.prototype, "height", void 0);
__decorate$1([
    dataType(false)
], Text.prototype, "resizeFontSize", void 0);
__decorate$1([
    surfaceType('#000000')
], Text.prototype, "fill", void 0);
__decorate$1([
    affectStrokeBoundsType('outside')
], Text.prototype, "strokeAlign", void 0);
__decorate$1([
    hitType('all')
], Text.prototype, "hitFill", void 0);
__decorate$1([
    boundsType('')
], Text.prototype, "text", void 0);
__decorate$1([
    boundsType('L')
], Text.prototype, "fontFamily", void 0);
__decorate$1([
    boundsType(12)
], Text.prototype, "fontSize", void 0);
__decorate$1([
    boundsType('normal')
], Text.prototype, "fontWeight", void 0);
__decorate$1([
    boundsType(false)
], Text.prototype, "italic", void 0);
__decorate$1([
    boundsType('none')
], Text.prototype, "textCase", void 0);
__decorate$1([
    boundsType('none')
], Text.prototype, "textDecoration", void 0);
__decorate$1([
    boundsType(0)
], Text.prototype, "letterSpacing", void 0);
__decorate$1([
    boundsType({ type: 'percent', value: 1.5 })
], Text.prototype, "lineHeight", void 0);
__decorate$1([
    boundsType(0)
], Text.prototype, "paraIndent", void 0);
__decorate$1([
    boundsType(0)
], Text.prototype, "paraSpacing", void 0);
__decorate$1([
    boundsType('x')
], Text.prototype, "writingMode", void 0);
__decorate$1([
    boundsType('left')
], Text.prototype, "textAlign", void 0);
__decorate$1([
    boundsType('top')
], Text.prototype, "verticalAlign", void 0);
__decorate$1([
    boundsType(true)
], Text.prototype, "autoSizeAlign", void 0);
__decorate$1([
    boundsType('normal')
], Text.prototype, "textWrap", void 0);
__decorate$1([
    boundsType('show')
], Text.prototype, "textOverflow", void 0);
Text = __decorate$1([
    registerUI()
], Text);

let Path = class Path extends UI {
    get __tag() { return 'Path'; }
    constructor(data) {
        super(data);
    }
};
__decorate$1([
    dataProcessor(PathData)
], Path.prototype, "__", void 0);
__decorate$1([
    affectStrokeBoundsType('center')
], Path.prototype, "strokeAlign", void 0);
Path = __decorate$1([
    registerUI()
], Path);

let Pen = class Pen extends Group {
    get __tag() { return 'Pen'; }
    constructor(data) {
        super(data);
    }
    setStyle(data) {
        const path = this.pathElement = new Path(data);
        this.pathStyle = data;
        this.__path = path.path || (path.path = []);
        this.add(path);
        return this;
    }
    beginPath() { return this; }
    moveTo(_x, _y) { return this; }
    lineTo(_x, _y) { return this; }
    bezierCurveTo(_x1, _y1, _x2, _y2, _x, _y) { return this; }
    quadraticCurveTo(_x1, _y1, _x, _y) { return this; }
    closePath() { return this; }
    rect(_x, _y, _width, _height) { return this; }
    roundRect(_x, _y, _width, _height, _cornerRadius) { return this; }
    ellipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) { return this; }
    arc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) { return this; }
    arcTo(_x1, _y1, _x2, _y2, _radius) { return this; }
    drawEllipse(_x, _y, _radiusX, _radiusY, _rotation, _startAngle, _endAngle, _anticlockwise) { return this; }
    drawArc(_x, _y, _radius, _startAngle, _endAngle, _anticlockwise) { return this; }
    drawPoints(_points, _curve, _close) { return this; }
    clearPath() { return this; }
    paint() {
        if (!this.pathElement.__layout.boxChanged)
            this.pathElement.forceUpdate('path');
    }
};
__decorate$1([
    dataProcessor(PenData)
], Pen.prototype, "__", void 0);
__decorate$1([
    penPathType()
], Pen.prototype, "path", void 0);
Pen = __decorate$1([
    useModule(PathCreator, ['set', 'path', 'paint']),
    registerUI()
], Pen);
function penPathType() {
    return (target, key) => {
        defineKey(target, key, {
            get() { return this.__path; }
        });
    };
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

let App = class App extends Leafer {
    get __tag() { return 'App'; }
    get isApp() { return true; }
    constructor(userConfig, data) {
        super(userConfig, data);
    }
    init(userConfig, parentApp) {
        super.init(userConfig, parentApp);
        if (userConfig) {
            const { ground, tree, sky, editor } = userConfig;
            if (ground)
                this.ground = this.addLeafer(ground);
            if (tree || editor)
                this.tree = this.addLeafer(tree || { type: userConfig.type || 'design' });
            if (sky || editor)
                this.sky = this.addLeafer(sky);
            if (editor)
                this.sky.add(this.editor = Creator.editor(editor));
        }
    }
    __setApp() {
        const { canvas } = this;
        const { realCanvas, view } = this.config;
        if (realCanvas || view === this.canvas.view || !canvas.parentView)
            this.realCanvas = true;
        else
            canvas.unrealCanvas();
        this.leafer = this;
        this.watcher.disable();
        this.layouter.disable();
        this.__eventIds.push(this.on_(PropertyEvent.CHANGE, this.__onPropertyChange, this));
    }
    start() {
        super.start();
        this.children.forEach(leafer => leafer.start());
    }
    stop() {
        this.children.forEach(leafer => leafer.stop());
        super.stop();
    }
    unlockLayout() {
        super.unlockLayout();
        this.children.forEach(leafer => leafer.unlockLayout());
    }
    lockLayout() {
        super.lockLayout();
        this.children.forEach(leafer => leafer.lockLayout());
    }
    forceRender(bounds, sync) {
        this.children.forEach(leafer => leafer.forceRender(bounds, sync));
    }
    addLeafer(merge) {
        const leafer = new Leafer(merge);
        this.add(leafer);
        return leafer;
    }
    add(leafer, index) {
        if (!leafer.view) {
            if (this.realCanvas && !this.canvas.bounds) {
                setTimeout(() => this.add(leafer, index), 10);
                return;
            }
            leafer.init(this.__getChildConfig(leafer.userConfig), this);
        }
        super.add(leafer, index);
        if (index !== undefined)
            leafer.canvas.childIndex = index;
        this.__listenChildEvents(leafer);
    }
    __onPropertyChange() {
        if (Debug.showHitView)
            this.children.forEach(leafer => leafer.forceUpdate('surface'));
    }
    __onCreated() {
        this.created = this.children.every(child => child.created);
    }
    __onReady() {
        if (this.children.every(child => child.ready))
            super.__onReady();
    }
    __onViewReady() {
        if (this.children.every(child => child.viewReady))
            super.__onViewReady();
    }
    __onChildRenderEnd(e) {
        this.renderer.addBlock(e.renderBounds);
        if (this.viewReady)
            this.renderer.update();
    }
    __render(canvas, options) {
        if (canvas.context) {
            const m = options.matrix;
            if (m)
                canvas.setTransform(m.a, m.b, m.c, m.d, m.e, m.f);
            this.children.forEach(leafer => canvas.copyWorld(leafer.canvas));
        }
    }
    __onResize(event) {
        this.children.forEach(leafer => leafer.resize(event));
        super.__onResize(event);
    }
    updateLayout() {
        this.children.forEach(leafer => leafer.updateLayout());
    }
    __getChildConfig(userConfig) {
        let config = Object.assign({}, this.config);
        config.hittable = config.realCanvas = undefined;
        if (userConfig)
            DataHelper.assign(config, userConfig);
        if (this.autoLayout)
            DataHelper.copyAttrs(config, this, canvasSizeAttrs);
        config.view = this.realCanvas ? undefined : this.view;
        config.fill = undefined;
        return config;
    }
    __listenChildEvents(leafer) {
        leafer.once(LayoutEvent.END, () => this.__onReady());
        leafer.once(RenderEvent.START, () => this.__onCreated());
        leafer.once(RenderEvent.END, () => this.__onViewReady());
        if (this.realCanvas)
            this.__eventIds.push(leafer.on_(RenderEvent.END, this.__onChildRenderEnd, this));
    }
};
App = __decorate([
    registerUI()
], App);

const downKeyMap = {};
const Keyboard = {
    isHoldSpaceKey() {
        return Keyboard.isHold('Space');
    },
    isHold(code) {
        return downKeyMap[code];
    },
    setDownCode(code) {
        if (!downKeyMap[code])
            downKeyMap[code] = true;
    },
    setUpCode(code) {
        downKeyMap[code] = false;
    }
};

const PointerButton = {
    LEFT: 1,
    RIGHT: 2,
    MIDDLE: 4,
    defaultLeft(event) { if (!event.buttons)
        event.buttons = 1; },
    left(event) { return event.buttons === 1; },
    right(event) { return event.buttons === 2; },
    middle(event) { return event.buttons === 4; }
};

class UIEvent extends Event$1 {
    get spaceKey() { return Keyboard.isHoldSpaceKey(); }
    get left() { return PointerButton.left(this); }
    get right() { return PointerButton.right(this); }
    get middle() { return PointerButton.middle(this); }
    constructor(params) {
        super(params.type);
        this.bubbles = true;
        Object.assign(this, params);
    }
    getBoxPoint(relative) {
        return (relative || this.current).getBoxPoint(this);
    }
    getInnerPoint(relative) {
        return (relative || this.current).getInnerPoint(this);
    }
    getLocalPoint(relative) {
        return (relative || this.current).getLocalPoint(this);
    }
    getPagePoint() {
        return this.current.getPagePoint(this);
    }
    getInner(relative) { return this.getInnerPoint(relative); }
    getLocal(relative) { return this.getLocalPoint(relative); }
    getPage() { return this.getPagePoint(); }
    static changeName(oldName, newName) {
        EventCreator.changeName(oldName, newName);
    }
}

let PointerEvent$1 = class PointerEvent extends UIEvent {
};
PointerEvent$1.POINTER = 'pointer';
PointerEvent$1.BEFORE_DOWN = 'pointer.before_down';
PointerEvent$1.BEFORE_MOVE = 'pointer.before_move';
PointerEvent$1.BEFORE_UP = 'pointer.before_up';
PointerEvent$1.DOWN = 'pointer.down';
PointerEvent$1.MOVE = 'pointer.move';
PointerEvent$1.UP = 'pointer.up';
PointerEvent$1.OVER = 'pointer.over';
PointerEvent$1.OUT = 'pointer.out';
PointerEvent$1.ENTER = 'pointer.enter';
PointerEvent$1.LEAVE = 'pointer.leave';
PointerEvent$1.TAP = 'tap';
PointerEvent$1.DOUBLE_TAP = 'double_tap';
PointerEvent$1.CLICK = 'click';
PointerEvent$1.DOUBLE_CLICK = 'double_click';
PointerEvent$1.LONG_PRESS = 'long_press';
PointerEvent$1.LONG_TAP = 'long_tap';
PointerEvent$1.MENU = 'pointer.menu';
PointerEvent$1.MENU_TAP = 'pointer.menu_tap';
PointerEvent$1 = __decorate([
    registerUIEvent()
], PointerEvent$1);

const tempMove = {};
let DragEvent$1 = class DragEvent extends PointerEvent$1 {
    static setList(data) {
        this.list = data instanceof LeafList ? data : new LeafList(data);
    }
    static setData(data) {
        this.data = data;
    }
    static getValidMove(leaf, start, total) {
        const { draggable, dragBounds } = leaf, move = leaf.getLocalPoint(total, null, true);
        PointHelper.move(move, start.x - leaf.x, start.y - leaf.y);
        if (dragBounds)
            this.getMoveInDragBounds(leaf.__local, dragBounds === 'parent' ? leaf.parent.boxBounds : dragBounds, move, true);
        if (draggable === 'x')
            move.y = 0;
        if (draggable === 'y')
            move.x = 0;
        return move;
    }
    static getMoveInDragBounds(childBox, dragBounds, move, change) {
        const x = childBox.x + move.x, y = childBox.y + move.y, right = x + childBox.width, bottom = y + childBox.height;
        const boundsRight = dragBounds.x + dragBounds.width, boundsBottom = dragBounds.y + dragBounds.height;
        if (!change)
            move = Object.assign({}, move);
        if (BoundsHelper.includes(childBox, dragBounds)) {
            if (x > dragBounds.x)
                move.x += dragBounds.x - x;
            else if (right < boundsRight)
                move.x += boundsRight - right;
            if (y > dragBounds.y)
                move.y += dragBounds.y - y;
            else if (bottom < boundsBottom)
                move.y += boundsBottom - bottom;
        }
        else {
            if (x < dragBounds.x)
                move.x += dragBounds.x - x;
            else if (right > boundsRight)
                move.x += boundsRight - right;
            if (y < dragBounds.y)
                move.y += dragBounds.y - y;
            else if (bottom > boundsBottom)
                move.y += boundsBottom - bottom;
        }
        return move;
    }
    getPageMove(total) {
        this.assignMove(total);
        return this.current.getPagePoint(tempMove, null, true);
    }
    getInnerMove(relative, total) {
        if (!relative)
            relative = this.current;
        this.assignMove(total);
        return relative.getInnerPoint(tempMove, null, true);
    }
    getLocalMove(relative, total) {
        if (!relative)
            relative = this.current;
        this.assignMove(total);
        return relative.getLocalPoint(tempMove, null, true);
    }
    getPageTotal() {
        return this.getPageMove(true);
    }
    getInnerTotal(relative) {
        return this.getInnerMove(relative, true);
    }
    getLocalTotal(relative) {
        return this.getLocalMove(relative, true);
    }
    getPageBounds() {
        const total = this.getPageTotal(), start = this.getPagePoint(), bounds = {};
        BoundsHelper.set(bounds, start.x - total.x, start.y - total.y, total.x, total.y);
        BoundsHelper.unsign(bounds);
        return bounds;
    }
    assignMove(total) {
        tempMove.x = total ? this.totalX : this.moveX;
        tempMove.y = total ? this.totalY : this.moveY;
    }
};
DragEvent$1.BEFORE_DRAG = 'drag.before_drag';
DragEvent$1.START = 'drag.start';
DragEvent$1.DRAG = 'drag';
DragEvent$1.END = 'drag.end';
DragEvent$1.OVER = 'drag.over';
DragEvent$1.OUT = 'drag.out';
DragEvent$1.ENTER = 'drag.enter';
DragEvent$1.LEAVE = 'drag.leave';
DragEvent$1 = __decorate([
    registerUIEvent()
], DragEvent$1);

let DropEvent = class DropEvent extends PointerEvent$1 {
    static setList(data) {
        DragEvent$1.setList(data);
    }
    static setData(data) {
        DragEvent$1.setData(data);
    }
};
DropEvent.DROP = 'drop';
DropEvent = __decorate([
    registerUIEvent()
], DropEvent);

let MoveEvent = class MoveEvent extends DragEvent$1 {
};
MoveEvent.BEFORE_MOVE = 'move.before_move';
MoveEvent.START = 'move.start';
MoveEvent.MOVE = 'move';
MoveEvent.END = 'move.end';
MoveEvent = __decorate([
    registerUIEvent()
], MoveEvent);

let RotateEvent = class RotateEvent extends UIEvent {
};
RotateEvent.BEFORE_ROTATE = 'rotate.before_rotate';
RotateEvent.START = 'rotate.start';
RotateEvent.ROTATE = 'rotate';
RotateEvent.END = 'rotate.end';
RotateEvent = __decorate([
    registerUIEvent()
], RotateEvent);

let SwipeEvent = class SwipeEvent extends DragEvent$1 {
};
SwipeEvent.SWIPE = 'swipe';
SwipeEvent.LEFT = 'swipe.left';
SwipeEvent.RIGHT = 'swipe.right';
SwipeEvent.UP = 'swipe.up';
SwipeEvent.DOWN = 'swipe.down';
SwipeEvent = __decorate([
    registerUIEvent()
], SwipeEvent);

let ZoomEvent = class ZoomEvent extends UIEvent {
};
ZoomEvent.BEFORE_ZOOM = 'zoom.before_zoom';
ZoomEvent.START = 'zoom.start';
ZoomEvent.ZOOM = 'zoom';
ZoomEvent.END = 'zoom.end';
ZoomEvent = __decorate([
    registerUIEvent()
], ZoomEvent);

let KeyEvent = class KeyEvent extends UIEvent {
};
KeyEvent.DOWN = 'key.down';
KeyEvent.HOLD = 'key.hold';
KeyEvent.UP = 'key.up';
KeyEvent = __decorate([
    registerUIEvent()
], KeyEvent);

const InteractionHelper = {
    getDragEventData(startPoint, lastPoint, event) {
        return Object.assign(Object.assign({}, event), { x: event.x, y: event.y, moveX: event.x - lastPoint.x, moveY: event.y - lastPoint.y, totalX: event.x - startPoint.x, totalY: event.y - startPoint.y });
    },
    getDropEventData(event, list, data) {
        return Object.assign(Object.assign({}, event), { list,
            data });
    },
    getSwipeDirection(angle) {
        if (angle < -45 && angle > -135)
            return SwipeEvent.UP;
        else if (angle > 45 && angle < 135)
            return SwipeEvent.DOWN;
        else if (angle <= 45 && angle >= -45)
            return SwipeEvent.RIGHT;
        else
            return SwipeEvent.LEFT;
    },
    getSwipeEventData(startPoint, lastDragData, event) {
        return Object.assign(Object.assign({}, event), { moveX: lastDragData.moveX, moveY: lastDragData.moveY, totalX: event.x - startPoint.x, totalY: event.y - startPoint.y, type: I.getSwipeDirection(PointHelper.getAngle(startPoint, event)) });
    },
    getBase(e) {
        const pointerUpButtons = e.button === 1 ? 4 : e.button;
        return {
            altKey: e.altKey,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            metaKey: e.metaKey,
            buttons: e.buttons === undefined ? 1 : (e.buttons === 0 ? pointerUpButtons : e.buttons),
            origin: e
        };
    },
    pathHasEventType(path, type) {
        const { list } = path;
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i].hasEvent(type))
                return true;
        }
        return false;
    },
    filterPathByEventType(path, type) {
        const find = new LeafList();
        const { list } = path;
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i].hasEvent(type))
                find.add(list[i]);
        }
        return find;
    },
    pathCanDrag(path) {
        return path && path.list.some(item => item.draggable || item.editable || (!item.isLeafer && item.hasEvent(DragEvent$1.DRAG)));
    },
    pathHasOutside(path) {
        return path && path.list.some(item => item.isOutside);
    },
};
const I = InteractionHelper;

const emptyList = new LeafList();
const { getDragEventData, getDropEventData, getSwipeEventData } = InteractionHelper;
class Dragger {
    constructor(interaction) {
        this.interaction = interaction;
    }
    setDragData(data) {
        if (this.animateWait)
            this.dragEndReal();
        this.downData = this.interaction.downData;
        this.dragData = getDragEventData(data, data, data);
        this.canAnimate = this.canDragOut = true;
    }
    getList(realDraggable, hover) {
        const { proxy } = this.interaction.selector;
        const hasProxyList = proxy && proxy.list.length, dragList = DragEvent$1.list || this.draggableList || emptyList;
        return this.dragging && (hasProxyList ? (realDraggable ? emptyList : new LeafList(hover ? [...proxy.list, ...proxy.dragHoverExclude] : proxy.list)) : dragList);
    }
    checkDrag(data, canDrag) {
        const { interaction } = this;
        if (this.moving && data.buttons < 1) {
            this.canAnimate = false;
            interaction.pointerCancel();
            return;
        }
        if (!this.moving && canDrag) {
            if (this.moving = interaction.canMove(this.downData) || interaction.isHoldRightKey || interaction.isMobileDragEmpty) {
                this.dragData.moveType = 'drag';
                interaction.emit(MoveEvent.START, this.dragData);
            }
        }
        if (!this.moving)
            this.dragStart(data, canDrag);
        this.drag(data);
    }
    dragStart(data, canDrag) {
        if (!this.dragging) {
            this.dragging = canDrag && PointerButton.left(data);
            if (this.dragging) {
                this.interaction.emit(DragEvent$1.START, this.dragData);
                this.getDraggableList(this.dragData.path);
                this.setDragStartPoints(this.realDraggableList = this.getList(true));
            }
        }
    }
    setDragStartPoints(list) {
        this.dragStartPoints = {};
        list.forEach(leaf => this.dragStartPoints[leaf.innerId] = { x: leaf.x, y: leaf.y });
    }
    getDraggableList(path) {
        let leaf;
        for (let i = 0, len = path.length; i < len; i++) {
            leaf = path.list[i];
            if ((leaf.draggable || leaf.editable) && leaf.hitSelf && !leaf.locked) {
                this.draggableList = new LeafList(leaf);
                break;
            }
        }
    }
    drag(data) {
        const { interaction, dragData, downData } = this;
        const { path, throughPath } = downData;
        this.dragData = getDragEventData(downData, dragData, data);
        if (throughPath)
            this.dragData.throughPath = throughPath;
        this.dragData.path = path;
        if (this.moving) {
            this.dragData.moveType = 'drag';
            interaction.emit(MoveEvent.BEFORE_MOVE, this.dragData);
            interaction.emit(MoveEvent.MOVE, this.dragData);
        }
        else if (this.dragging) {
            this.dragReal();
            interaction.emit(DragEvent$1.BEFORE_DRAG, this.dragData);
            interaction.emit(DragEvent$1.DRAG, this.dragData);
        }
    }
    dragReal() {
        const { running } = this.interaction;
        const list = this.realDraggableList;
        if (list.length && running) {
            const { totalX, totalY } = this.dragData;
            list.forEach(leaf => leaf.draggable && leaf.move(DragEvent$1.getValidMove(leaf, this.dragStartPoints[leaf.innerId], { x: totalX, y: totalY })));
        }
    }
    dragOverOrOut(data) {
        const { interaction } = this;
        const { dragOverPath } = this;
        const { path } = data;
        this.dragOverPath = path;
        if (dragOverPath) {
            if (path.indexAt(0) !== dragOverPath.indexAt(0)) {
                interaction.emit(DragEvent$1.OUT, data, dragOverPath);
                interaction.emit(DragEvent$1.OVER, data, path);
            }
        }
        else
            interaction.emit(DragEvent$1.OVER, data, path);
    }
    dragEnterOrLeave(data) {
        const { interaction } = this;
        const { dragEnterPath } = this;
        const { path } = data;
        interaction.emit(DragEvent$1.LEAVE, data, dragEnterPath, path);
        interaction.emit(DragEvent$1.ENTER, data, path, dragEnterPath);
        this.dragEnterPath = path;
    }
    dragEnd(data, speed) {
        if (!this.dragging && !this.moving)
            return;
        if (this.checkDragEndAnimate(data, speed))
            return;
        this.dragEndReal(data);
    }
    dragEndReal(data) {
        const { interaction, downData, dragData } = this;
        if (!data)
            data = dragData;
        const { path, throughPath } = downData;
        const endDragData = getDragEventData(downData, data, data);
        if (throughPath)
            endDragData.throughPath = throughPath;
        endDragData.path = path;
        if (this.moving) {
            this.moving = false;
            endDragData.moveType = 'drag';
            interaction.emit(MoveEvent.END, endDragData);
        }
        if (this.dragging) {
            const dropList = this.getList();
            this.dragging = false;
            interaction.emit(DragEvent$1.END, endDragData);
            this.swipe(data, downData, dragData, endDragData);
            this.drop(data, dropList, this.dragEnterPath);
        }
        this.autoMoveCancel();
        this.dragReset();
        this.animate(null, 'off');
    }
    swipe(data, downData, dragData, endDragData) {
        const { interaction } = this;
        if (PointHelper.getDistance(downData, data) > interaction.config.pointer.swipeDistance) {
            const swipeData = getSwipeEventData(downData, dragData, endDragData);
            this.interaction.emit(swipeData.type, swipeData);
        }
    }
    drop(data, dropList, dragEnterPath) {
        const dropData = getDropEventData(data, dropList, DragEvent$1.data);
        dropData.path = dragEnterPath;
        this.interaction.emit(DropEvent.DROP, dropData);
        this.interaction.emit(DragEvent$1.LEAVE, data, dragEnterPath);
    }
    dragReset() {
        DragEvent$1.list = DragEvent$1.data = this.draggableList = this.dragData = this.downData = this.dragOverPath = this.dragEnterPath = null;
    }
    checkDragEndAnimate(_data, _speed) { return false; }
    animate(_func, _off) { }
    checkDragOut(_data) { }
    autoMoveOnDragOut(_data) { }
    autoMoveCancel() { }
    destroy() {
        this.dragReset();
    }
}

const debug$3 = Debug.get('emit');
function emit$1(type, data, path, excludePath) {
    if (!path && !data.path)
        return;
    let leaf;
    data.type = type;
    if (path) {
        data = Object.assign(Object.assign({}, data), { path });
    }
    else {
        path = data.path;
    }
    data.target = path.indexAt(0);
    try {
        for (let i = path.length - 1; i > -1; i--) {
            leaf = path.list[i];
            if (emitEvent(leaf, type, data, true, excludePath))
                return;
            if (leaf.isApp)
                emitAppChildren(leaf, type, data, true, excludePath);
        }
        for (let i = 0, len = path.length; i < len; i++) {
            leaf = path.list[i];
            if (leaf.isApp)
                emitAppChildren(leaf, type, data, false, excludePath);
            if (emitEvent(leaf, type, data, false, excludePath))
                return;
        }
    }
    catch (e) {
        debug$3.error(e);
    }
}
const allowTypes = ['move', 'zoom', 'rotate', 'key'];
function emitAppChildren(leaf, type, data, capture, excludePath) {
    if (allowTypes.some(name => type.startsWith(name)) && leaf.__.hitChildren && !exclude(leaf, excludePath)) {
        let child;
        for (let i = 0, len = leaf.children.length; i < len; i++) {
            child = leaf.children[i];
            if (!data.path.has(child) && child.__.hittable)
                emitEvent(child, type, data, capture, excludePath);
        }
    }
}
function emitEvent(leaf, type, data, capture, excludePath) {
    if (leaf.destroyed)
        return false;
    if (leaf.__.hitSelf && !exclude(leaf, excludePath)) {
        if (State.updateEventStyle && !capture)
            State.updateEventStyle(leaf, type);
        if (leaf.hasEvent(type, capture)) {
            data.phase = capture ? 1 : ((leaf === data.target) ? 2 : 3);
            const event = EventCreator.get(type, data);
            leaf.emitEvent(event, capture);
            if (event.isStop)
                return true;
        }
    }
    return false;
}
function exclude(leaf, excludePath) {
    return excludePath && excludePath.has(leaf);
}

const config = {
    wheel: {
        zoomSpeed: 0.5,
        moveSpeed: 0.5,
        rotateSpeed: 0.5,
        delta: { x: 80 / 4, y: 8.0 },
    },
    pointer: {
        hitRadius: 5,
        tapTime: 120,
        longPressTime: 800,
        transformTime: 500,
        hover: true,
        dragHover: true,
        dragDistance: 2,
        swipeDistance: 20,
    },
    touch: {
        preventDefault: 'auto'
    },
    multiTouch: {},
    move: { autoDistance: 2 },
    zoom: {},
    cursor: true,
    keyEvent: true
};

const { pathHasEventType, pathCanDrag: pathCanDrag$1, pathHasOutside } = InteractionHelper;
class InteractionBase {
    get dragging() { return this.dragger.dragging; }
    get transforming() { return this.transformer.transforming; }
    get moveMode() { return this.m.drag === true || this.isHoldSpaceKey || this.isHoldMiddleKey || (this.isHoldRightKey && this.dragger.moving) || this.isDragEmpty; }
    get canHover() { return this.p.hover && !this.config.mobile; }
    get isDragEmpty() { return this.m.dragEmpty && this.isRootPath(this.hoverData) && (!this.downData || this.isRootPath(this.downData)); }
    get isMobileDragEmpty() { return this.m.dragEmpty && !this.canHover && this.downData && this.isTreePath(this.downData); }
    get isHoldMiddleKey() { return this.m.holdMiddleKey && this.downData && PointerButton.middle(this.downData); }
    get isHoldRightKey() { return this.m.holdRightKey && this.downData && PointerButton.right(this.downData); }
    get isHoldSpaceKey() { return this.m.holdSpaceKey && Keyboard.isHoldSpaceKey(); }
    get m() { return this.config.move; }
    get p() { return this.config.pointer; }
    get hitRadius() { return this.p.hitRadius; }
    constructor(target, canvas, selector, userConfig) {
        this.config = DataHelper.clone(config);
        this.tapCount = 0;
        this.downKeyMap = {};
        this.target = target;
        this.canvas = canvas;
        this.selector = selector;
        this.defaultPath = new LeafList(target);
        this.createTransformer();
        this.dragger = new Dragger(this);
        if (userConfig)
            this.config = DataHelper.default(userConfig, this.config);
        this.__listenEvents();
    }
    start() {
        this.running = true;
    }
    stop() {
        this.running = false;
    }
    receive(_event) { }
    pointerDown(data, useDefaultPath) {
        if (!data)
            data = this.hoverData;
        if (!data)
            return;
        PointerButton.defaultLeft(data);
        this.updateDownData(data);
        this.checkPath(data, useDefaultPath);
        this.downTime = Date.now();
        this.emit(PointerEvent$1.BEFORE_DOWN, data);
        this.emit(PointerEvent$1.DOWN, data);
        if (PointerButton.left(data)) {
            this.tapWait();
            this.longPressWait(data);
        }
        this.waitRightTap = PointerButton.right(data);
        this.dragger.setDragData(data);
        if (!this.isHoldRightKey)
            this.updateCursor(data);
    }
    pointerMove(data) {
        if (!data)
            data = this.hoverData;
        if (!data)
            return;
        const { downData } = this;
        if (downData)
            PointerButton.defaultLeft(data);
        const hit = this.canvas.bounds.hitPoint(data);
        if (hit || downData) {
            this.pointerMoveReal(data);
            if (downData)
                this.dragger.checkDragOut(data);
        }
    }
    pointerMoveReal(data) {
        const { dragHover, dragDistance } = this.p;
        this.emit(PointerEvent$1.BEFORE_MOVE, data, this.defaultPath);
        if (this.downData) {
            const canDrag = PointHelper.getDistance(this.downData, data) > dragDistance;
            if (canDrag) {
                if (this.waitTap)
                    this.pointerWaitCancel();
                this.waitRightTap = false;
            }
            this.dragger.checkDrag(data, canDrag);
        }
        if (!this.dragger.moving) {
            this.updateHoverData(data);
            this.checkPath(data);
            this.emit(PointerEvent$1.MOVE, data);
            if (!(this.dragging && !dragHover))
                this.pointerHover(data);
            if (this.dragger.dragging) {
                this.dragger.dragOverOrOut(data);
                this.dragger.dragEnterOrLeave(data);
            }
        }
        this.updateCursor(this.downData || data);
    }
    pointerUp(data) {
        const { downData } = this;
        if (!data)
            data = downData;
        if (!downData)
            return;
        PointerButton.defaultLeft(data);
        data.multiTouch = downData.multiTouch;
        this.findPath(data);
        const upData = Object.assign(Object.assign({}, data), { path: data.path.clone() });
        data.path.addList(downData.path.list);
        this.checkPath(data);
        this.downData = null;
        this.emit(PointerEvent$1.BEFORE_UP, data);
        this.emit(PointerEvent$1.UP, data);
        this.touchLeave(data);
        if (!data.isCancel) {
            this.tap(data);
            this.menuTap(data);
        }
        this.dragger.dragEnd(data);
        this.updateCursor(upData);
    }
    pointerCancel() {
        const data = Object.assign({}, this.dragger.dragData);
        data.isCancel = true;
        this.pointerUp(data);
    }
    menu(data) {
        this.findPath(data);
        this.emit(PointerEvent$1.MENU, data);
        this.waitMenuTap = true;
        if (!this.downData && this.waitRightTap)
            this.menuTap(data);
    }
    menuTap(data) {
        if (this.waitRightTap && this.waitMenuTap) {
            this.emit(PointerEvent$1.MENU_TAP, data);
            this.waitRightTap = this.waitMenuTap = false;
        }
    }
    createTransformer() { }
    move(_data) { }
    zoom(_data) { }
    rotate(_data) { }
    transformEnd() { }
    wheel(_data) { }
    multiTouch(_data, _list) { }
    keyDown(data) {
        if (!this.config.keyEvent)
            return;
        const { code } = data;
        if (!this.downKeyMap[code]) {
            this.downKeyMap[code] = true;
            Keyboard.setDownCode(code);
            this.emit(KeyEvent.HOLD, data, this.defaultPath);
            if (this.moveMode) {
                this.cancelHover();
                this.updateCursor();
            }
        }
        this.emit(KeyEvent.DOWN, data, this.defaultPath);
    }
    keyUp(data) {
        if (!this.config.keyEvent)
            return;
        const { code } = data;
        this.downKeyMap[code] = false;
        Keyboard.setUpCode(code);
        this.emit(KeyEvent.UP, data, this.defaultPath);
        if (this.cursor === 'grab')
            this.updateCursor();
    }
    pointerHover(data) {
        if (this.canHover) {
            this.pointerOverOrOut(data);
            this.pointerEnterOrLeave(data);
        }
    }
    pointerOverOrOut(data) {
        const { path } = data;
        const { overPath } = this;
        this.overPath = path;
        if (overPath) {
            if (path.indexAt(0) !== overPath.indexAt(0)) {
                this.emit(PointerEvent$1.OUT, data, overPath);
                this.emit(PointerEvent$1.OVER, data, path);
            }
        }
        else {
            this.emit(PointerEvent$1.OVER, data, path);
        }
    }
    pointerEnterOrLeave(data) {
        let { path } = data;
        if (this.downData && !this.moveMode) {
            path = path.clone();
            this.downData.path.forEach(leaf => path.add(leaf));
        }
        const { enterPath } = this;
        this.enterPath = path;
        this.emit(PointerEvent$1.LEAVE, data, enterPath, path);
        this.emit(PointerEvent$1.ENTER, data, path, enterPath);
    }
    touchLeave(data) {
        if (data.pointerType === 'touch') {
            if (this.enterPath) {
                this.emit(PointerEvent$1.LEAVE, data);
                if (this.dragger.dragging)
                    this.emit(DropEvent.LEAVE, data);
            }
        }
    }
    tap(data) {
        const { pointer } = this.config;
        const hasLong = this.longTap(data);
        if (!pointer.tapMore && hasLong)
            return;
        if (!this.waitTap)
            return;
        if (pointer.tapMore)
            this.emitTap(data);
        const useTime = Date.now() - this.downTime;
        const hasDouble = [PointerEvent$1.DOUBLE_TAP, PointerEvent$1.DOUBLE_CLICK].some(type => pathHasEventType(data.path, type));
        if (useTime < pointer.tapTime + 50 && hasDouble) {
            this.tapCount++;
            if (this.tapCount === 2) {
                this.tapWaitCancel();
                this.emitDoubleTap(data);
            }
            else {
                clearTimeout(this.tapTimer);
                this.tapTimer = setTimeout(() => {
                    if (!pointer.tapMore) {
                        this.tapWaitCancel();
                        this.emitTap(data);
                    }
                }, pointer.tapTime);
            }
        }
        else {
            if (!pointer.tapMore) {
                this.tapWaitCancel();
                this.emitTap(data);
            }
        }
    }
    findPath(data, options) {
        const { hitRadius, through } = this.p;
        const { bottomList } = this;
        const find = this.selector.getByPoint(data, hitRadius, Object.assign({ bottomList, name: data.type }, (options || { through })));
        if (find.throughPath)
            data.throughPath = find.throughPath;
        data.path = find.path;
        return find.path;
    }
    isRootPath(data) {
        return data && data.path.list[0].isLeafer;
    }
    isTreePath(data) {
        const app = this.target.app;
        if (!app || !app.isApp)
            return false;
        return app.editor && (!data.path.has(app.editor) && data.path.has(app.tree) && !data.target.syncEventer);
    }
    checkPath(data, useDefaultPath) {
        if (useDefaultPath || (this.moveMode && !pathHasOutside(data.path)))
            data.path = this.defaultPath;
    }
    canMove(data) {
        return data && (this.moveMode || (this.m.drag === 'auto' && !pathCanDrag$1(data.path))) && !pathHasOutside(data.path);
    }
    isDrag(leaf) {
        return this.dragger.getList().has(leaf);
    }
    isPress(leaf) {
        return this.downData && this.downData.path.has(leaf);
    }
    isHover(leaf) {
        return this.enterPath && this.enterPath.has(leaf);
    }
    isFocus(leaf) {
        return this.focusData === leaf;
    }
    cancelHover() {
        const { hoverData } = this;
        if (hoverData) {
            hoverData.path = this.defaultPath;
            this.pointerHover(hoverData);
        }
    }
    updateDownData(data, options, merge) {
        const { downData } = this;
        if (!data && downData)
            data = downData;
        if (!data)
            return;
        this.findPath(data, options);
        if (merge && downData)
            data.path.addList(downData.path.list);
        this.downData = data;
    }
    updateHoverData(data) {
        if (!data)
            data = this.hoverData;
        if (!data)
            return;
        this.findPath(data, { exclude: this.dragger.getList(false, true), name: PointerEvent$1.MOVE });
        this.hoverData = data;
    }
    updateCursor(data) {
        if (!this.config.cursor || !this.canHover)
            return;
        if (!data) {
            this.updateHoverData();
            data = this.downData || this.hoverData;
        }
        if (this.dragger.moving) {
            return this.setCursor('grabbing');
        }
        else if (this.canMove(data)) {
            return this.setCursor(this.downData ? 'grabbing' : 'grab');
        }
        else if (!data)
            return;
        let leaf, cursor;
        const { path } = data;
        for (let i = 0, len = path.length; i < len; i++) {
            leaf = path.list[i];
            cursor = (leaf.syncEventer && leaf.syncEventer.cursor) || leaf.cursor;
            if (cursor)
                break;
        }
        this.setCursor(cursor);
    }
    setCursor(cursor) {
        this.cursor = cursor;
    }
    getLocal(clientPoint, updateClient) {
        const clientBounds = this.canvas.getClientBounds(updateClient);
        return { x: clientPoint.clientX - clientBounds.x, y: clientPoint.clientY - clientBounds.y };
    }
    emitTap(data) {
        this.emit(PointerEvent$1.TAP, data);
        this.emit(PointerEvent$1.CLICK, data);
    }
    emitDoubleTap(data) {
        this.emit(PointerEvent$1.DOUBLE_TAP, data);
        this.emit(PointerEvent$1.DOUBLE_CLICK, data);
    }
    pointerWaitCancel() {
        this.tapWaitCancel();
        this.longPressWaitCancel();
    }
    tapWait() {
        clearTimeout(this.tapTimer);
        this.waitTap = true;
    }
    tapWaitCancel() {
        clearTimeout(this.tapTimer);
        this.waitTap = false;
        this.tapCount = 0;
    }
    longPressWait(data) {
        clearTimeout(this.longPressTimer);
        this.longPressTimer = setTimeout(() => {
            this.longPressed = true;
            this.emit(PointerEvent$1.LONG_PRESS, data);
        }, this.p.longPressTime);
    }
    longTap(data) {
        let hasLong;
        if (this.longPressed) {
            this.emit(PointerEvent$1.LONG_TAP, data);
            if (pathHasEventType(data.path, PointerEvent$1.LONG_TAP) || pathHasEventType(data.path, PointerEvent$1.LONG_PRESS))
                hasLong = true;
        }
        this.longPressWaitCancel();
        return hasLong;
    }
    longPressWaitCancel() {
        clearTimeout(this.longPressTimer);
        this.longPressed = false;
    }
    __onResize() {
        const { dragOut } = this.m;
        this.shrinkCanvasBounds = new Bounds(this.canvas.bounds);
        this.shrinkCanvasBounds.spread(-(typeof dragOut === 'number' ? dragOut : 2));
    }
    __listenEvents() {
        const { target } = this;
        this.__eventIds = [target.on_(ResizeEvent.RESIZE, this.__onResize, this)];
        target.once(LeaferEvent.READY, () => this.__onResize());
    }
    __removeListenEvents() {
        this.target.off_(this.__eventIds);
        this.__eventIds.length = 0;
    }
    emit(type, data, path, excludePath) {
        if (this.running)
            emit$1(type, data, path, excludePath);
    }
    destroy() {
        if (this.__eventIds.length) {
            this.stop();
            this.__removeListenEvents();
            this.dragger.destroy();
            if (this.transformer)
                this.transformer.destroy();
            this.downData = this.overPath = this.enterPath = null;
        }
    }
}

class Cursor {
    static set(name, value) {
        this.custom[name] = value;
    }
    static get(name) {
        return this.custom[name];
    }
}
Cursor.custom = {};

class HitCanvasManager extends CanvasManager {
    constructor() {
        super(...arguments);
        this.maxTotal = 1000;
        this.pathList = new LeafList();
        this.pixelList = new LeafList();
    }
    getPixelType(leaf, config) {
        this.__autoClear();
        this.pixelList.add(leaf);
        return Creator.hitCanvas(config);
    }
    getPathType(leaf) {
        this.__autoClear();
        this.pathList.add(leaf);
        return Creator.hitCanvas();
    }
    clearImageType() {
        this.__clearLeafList(this.pixelList);
    }
    clearPathType() {
        this.__clearLeafList(this.pathList);
    }
    __clearLeafList(leafList) {
        if (leafList.length) {
            leafList.forEach(leaf => {
                if (leaf.__hitCanvas) {
                    leaf.__hitCanvas.destroy();
                    leaf.__hitCanvas = null;
                }
            });
            leafList.reset();
        }
    }
    __autoClear() {
        if (this.pathList.length + this.pixelList.length > this.maxTotal)
            this.clear();
    }
    clear() {
        this.clearPathType();
        this.clearImageType();
    }
}

const { toInnerRadiusPointOf, copy: copy$2, setRadius } = PointHelper;
const inner = {};
const leaf = Leaf.prototype;
leaf.__hitWorld = function (point) {
    if (!this.__.hitSelf)
        return false;
    if (this.__.hitRadius) {
        copy$2(inner, point), point = inner;
        setRadius(point, this.__.hitRadius);
    }
    toInnerRadiusPointOf(point, this.__world, inner);
    const { width, height } = this.__world;
    const isSmall = width < 10 && height < 10;
    if (this.__.hitBox || isSmall) {
        if (BoundsHelper.hitRadiusPoint(this.__layout.boxBounds, inner))
            return true;
        if (isSmall)
            return false;
    }
    if (this.__layout.hitCanvasChanged || !this.__hitCanvas) {
        this.__updateHitCanvas();
        if (!this.__layout.boundsChanged)
            this.__layout.hitCanvasChanged = false;
    }
    return this.__hit(inner);
};
leaf.__hitFill = function (inner) { var _a; return (_a = this.__hitCanvas) === null || _a === void 0 ? void 0 : _a.hitFill(inner, this.__.windingRule); };
leaf.__hitStroke = function (inner, strokeWidth) { var _a; return (_a = this.__hitCanvas) === null || _a === void 0 ? void 0 : _a.hitStroke(inner, strokeWidth); };
leaf.__hitPixel = function (inner) { var _a; return (_a = this.__hitCanvas) === null || _a === void 0 ? void 0 : _a.hitPixel(inner, this.__layout.renderBounds, this.__hitCanvas.hitScale); };
leaf.__drawHitPath = function (canvas) { if (canvas)
    this.__drawRenderPath(canvas); };

const matrix = new Matrix();
const ui$1 = UI.prototype;
ui$1.__updateHitCanvas = function () {
    const data = this.__, { hitCanvasManager } = this.leafer;
    const isHitPixelFill = (data.__pixelFill || data.__isCanvas) && data.hitFill === 'pixel';
    const isHitPixelStroke = data.__pixelStroke && data.hitStroke === 'pixel';
    const isHitPixel = isHitPixelFill || isHitPixelStroke;
    if (!this.__hitCanvas)
        this.__hitCanvas = isHitPixel ? hitCanvasManager.getPixelType(this, { contextSettings: { willReadFrequently: true } }) : hitCanvasManager.getPathType(this);
    const h = this.__hitCanvas;
    if (isHitPixel) {
        const { renderBounds } = this.__layout;
        const size = Platform.image.hitCanvasSize;
        const scale = h.hitScale = tempBounds$1.set(0, 0, size, size).getFitMatrix(renderBounds).a;
        const { x, y, width, height } = tempBounds$1.set(renderBounds).scale(scale);
        h.resize({ width, height, pixelRatio: 1 });
        h.clear();
        ImageManager.patternLocked = true;
        this.__renderShape(h, { matrix: matrix.setWith(this.__world).scaleWith(1 / scale).invertWith().translate(-x, -y) }, !isHitPixelFill, !isHitPixelStroke);
        ImageManager.patternLocked = false;
        h.resetTransform();
        data.__isHitPixel = true;
    }
    else {
        data.__isHitPixel && (data.__isHitPixel = false);
    }
    this.__drawHitPath(h);
    h.setStrokeOptions(data);
};
ui$1.__hit = function (inner) {
    if (Platform.name === 'miniapp')
        this.__drawHitPath(this.__hitCanvas);
    const data = this.__;
    if (data.__isHitPixel && this.__hitPixel(inner))
        return true;
    const { hitFill } = data;
    const needHitFillPath = ((data.fill || data.__isCanvas) && (hitFill === 'path' || (hitFill === 'pixel' && !(data.__pixelFill || data.__isCanvas)))) || hitFill === 'all';
    if (needHitFillPath && this.__hitFill(inner))
        return true;
    const { hitStroke, __strokeWidth } = data;
    const needHitStrokePath = (data.stroke && (hitStroke === 'path' || (hitStroke === 'pixel' && !data.__pixelStroke))) || hitStroke === 'all';
    if (!needHitFillPath && !needHitStrokePath)
        return false;
    const radiusWidth = inner.radiusX * 2;
    let hitWidth = radiusWidth;
    if (needHitStrokePath) {
        switch (data.strokeAlign) {
            case 'inside':
                hitWidth += __strokeWidth * 2;
                if (!needHitFillPath && this.__hitFill(inner) && this.__hitStroke(inner, hitWidth))
                    return true;
                hitWidth = radiusWidth;
                break;
            case 'center':
                hitWidth += __strokeWidth;
                break;
            case 'outside':
                hitWidth += __strokeWidth * 2;
                if (!needHitFillPath) {
                    if (!this.__hitFill(inner) && this.__hitStroke(inner, hitWidth))
                        return true;
                    hitWidth = radiusWidth;
                }
                break;
        }
    }
    return hitWidth ? this.__hitStroke(inner, hitWidth) : false;
};

const ui = UI.prototype, rect = Rect.prototype, box$1 = Box.prototype;
rect.__updateHitCanvas = box$1.__updateHitCanvas = function () {
    if (this.stroke || this.cornerRadius || ((this.fill || this.__.__isCanvas) && this.hitFill === 'pixel') || this.hitStroke === 'all')
        ui.__updateHitCanvas.call(this);
    else if (this.__hitCanvas)
        this.__hitCanvas = null;
};
rect.__hitFill = box$1.__hitFill = function (inner) {
    return this.__hitCanvas ? ui.__hitFill.call(this, inner) : BoundsHelper.hitRadiusPoint(this.__layout.boxBounds, inner);
};

function getSelector(ui) {
    return ui.leafer ? ui.leafer.selector : (Platform.selector || (Platform.selector = Creator.selector()));
}
Group.prototype.pick = function (hitPoint, options) {
    this.leafer || this.updateLayout();
    options || (options = emptyData);
    return getSelector(this).getByPoint(hitPoint, options.hitRadius || 0, Object.assign(Object.assign({}, options), { target: this }));
};

const canvas = LeaferCanvasBase.prototype;
canvas.hitFill = function (point, fillRule) {
    return fillRule ? this.context.isPointInPath(point.x, point.y, fillRule) : this.context.isPointInPath(point.x, point.y);
};
canvas.hitStroke = function (point, strokeWidth) {
    this.strokeWidth = strokeWidth;
    return this.context.isPointInStroke(point.x, point.y);
};
canvas.hitPixel = function (radiusPoint, offset, scale = 1) {
    let { x, y, radiusX, radiusY } = radiusPoint;
    if (offset)
        x -= offset.x, y -= offset.y;
    tempBounds$1.set(x - radiusX, y - radiusY, radiusX * 2, radiusY * 2).scale(scale).ceil();
    const { data } = this.context.getImageData(tempBounds$1.x, tempBounds$1.y, tempBounds$1.width || 1, tempBounds$1.height || 1);
    for (let i = 0, len = data.length; i < len; i += 4) {
        if (data[i + 3] > 0)
            return true;
    }
    return data[3] > 0;
};

const debug$2 = Debug.get('LeaferCanvas');
class LeaferCanvas extends LeaferCanvasBase {
    set zIndex(zIndex) {
        const { style } = this.view;
        style.zIndex = zIndex;
        this.setAbsolute(this.view);
    }
    set childIndex(index) {
        const { view, parentView } = this;
        if (view && parentView) {
            const beforeNode = parentView.children[index];
            if (beforeNode) {
                this.setAbsolute(beforeNode);
                parentView.insertBefore(view, beforeNode);
            }
            else {
                parentView.appendChild(beforeNode);
            }
        }
    }
    init() {
        const { config } = this;
        const view = config.view || config.canvas;
        view ? this.__createViewFrom(view) : this.__createView();
        const { style } = this.view;
        style.display || (style.display = 'block');
        this.parentView = this.view.parentElement;
        if (this.parentView) {
            const pStyle = this.parentView.style;
            pStyle.webkitUserSelect = pStyle.userSelect = 'none';
        }
        if (Platform.syncDomFont && !this.parentView) {
            style.display = 'none';
            document.body.appendChild(this.view);
        }
        this.__createContext();
        if (!this.autoLayout)
            this.resize(config);
    }
    set backgroundColor(color) { this.view.style.backgroundColor = color; }
    get backgroundColor() { return this.view.style.backgroundColor; }
    set hittable(hittable) { this.view.style.pointerEvents = hittable ? 'auto' : 'none'; }
    get hittable() { return this.view.style.pointerEvents !== 'none'; }
    __createView() {
        this.view = document.createElement('canvas');
    }
    __createViewFrom(inputView) {
        let find = (typeof inputView === 'string') ? document.getElementById(inputView) : inputView;
        if (find) {
            if (find instanceof HTMLCanvasElement) {
                this.view = find;
            }
            else {
                let parent = find;
                if (find === window || find === document) {
                    const div = document.createElement('div');
                    const { style } = div;
                    style.position = 'absolute';
                    style.top = style.bottom = style.left = style.right = '0px';
                    document.body.appendChild(div);
                    parent = div;
                }
                this.__createView();
                const view = this.view;
                if (parent.hasChildNodes()) {
                    this.setAbsolute(view);
                    parent.style.position || (parent.style.position = 'relative');
                }
                parent.appendChild(view);
            }
        }
        else {
            debug$2.error(`no id: ${inputView}`);
            this.__createView();
        }
    }
    setAbsolute(view) {
        const { style } = view;
        style.position = 'absolute';
        style.top = style.left = '0px';
    }
    updateViewSize() {
        const { width, height, pixelRatio } = this;
        const { style } = this.view;
        style.width = width + 'px';
        style.height = height + 'px';
        this.view.width = Math.ceil(width * pixelRatio);
        this.view.height = Math.ceil(height * pixelRatio);
    }
    updateClientBounds() {
        if (this.view.parentElement)
            this.clientBounds = this.view.getBoundingClientRect();
    }
    startAutoLayout(autoBounds, listener) {
        this.resizeListener = listener;
        if (autoBounds) {
            this.autoBounds = autoBounds;
            try {
                this.resizeObserver = new ResizeObserver((entries) => {
                    this.updateClientBounds();
                    for (const entry of entries)
                        this.checkAutoBounds(entry.contentRect);
                });
                const parent = this.parentView;
                if (parent) {
                    this.resizeObserver.observe(parent);
                    this.checkAutoBounds(parent.getBoundingClientRect());
                }
                else {
                    this.checkAutoBounds(this.view);
                    debug$2.warn('no parent');
                }
            }
            catch (_a) {
                this.imitateResizeObserver();
            }
        }
        else {
            window.addEventListener('resize', () => {
                const pixelRatio = Platform.devicePixelRatio;
                if (this.pixelRatio !== pixelRatio) {
                    const { width, height } = this;
                    this.emitResize({ width, height, pixelRatio });
                }
            });
        }
    }
    imitateResizeObserver() {
        if (this.autoLayout) {
            if (this.parentView)
                this.checkAutoBounds(this.parentView.getBoundingClientRect());
            Platform.requestRender(this.imitateResizeObserver.bind(this));
        }
    }
    checkAutoBounds(parentSize) {
        const view = this.view;
        const { x, y, width, height } = this.autoBounds.getBoundsFrom(parentSize);
        const size = { width, height, pixelRatio: Platform.devicePixelRatio };
        if (!this.isSameSize(size)) {
            const { style } = view;
            style.marginLeft = x + 'px';
            style.marginTop = y + 'px';
            this.emitResize(size);
        }
    }
    stopAutoLayout() {
        this.autoLayout = false;
        this.resizeListener = null;
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }
    emitResize(size) {
        const oldSize = {};
        DataHelper.copyAttrs(oldSize, this, canvasSizeAttrs);
        this.resize(size);
        if (this.resizeListener && this.width !== undefined)
            this.resizeListener(new ResizeEvent(size, oldSize));
    }
    unrealCanvas() {
        if (!this.unreal && this.parentView) {
            const view = this.view;
            if (view)
                view.remove();
            this.view = this.parentView;
            this.unreal = true;
        }
    }
    destroy() {
        if (this.view) {
            this.stopAutoLayout();
            if (!this.unreal) {
                const view = this.view;
                if (view.parentElement)
                    view.remove();
            }
            super.destroy();
        }
    }
}

canvasPatch(CanvasRenderingContext2D.prototype);
canvasPatch(Path2D.prototype);

const { mineType, fileType } = FileHelper;
Object.assign(Creator, {
    canvas: (options, manager) => new LeaferCanvas(options, manager),
    image: (options) => new LeaferImage(options)
});
function useCanvas(_canvasType, _power) {
    Platform.origin = {
        createCanvas(width, height) {
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            return canvas;
        },
        canvasToDataURL: (canvas, type, quality) => canvas.toDataURL(mineType(type), quality),
        canvasToBolb: (canvas, type, quality) => new Promise((resolve) => canvas.toBlob(resolve, mineType(type), quality)),
        canvasSaveAs: (canvas, filename, quality) => {
            const url = canvas.toDataURL(mineType(fileType(filename)), quality);
            return Platform.origin.download(url, filename);
        },
        download(url, filename) {
            return new Promise((resolve) => {
                let el = document.createElement('a');
                el.href = url;
                el.download = filename;
                document.body.appendChild(el);
                el.click();
                document.body.removeChild(el);
                resolve();
            });
        },
        loadImage(src) {
            return new Promise((resolve, reject) => {
                const img = new Platform.origin.Image();
                const { crossOrigin } = Platform.image;
                if (crossOrigin) {
                    img.setAttribute('crossOrigin', crossOrigin);
                    img.crossOrigin = crossOrigin;
                }
                img.onload = () => { resolve(img); };
                img.onerror = (e) => { reject(e); };
                img.src = Platform.image.getRealURL(src);
            });
        },
        Image,
        PointerEvent,
        DragEvent
    };
    Platform.event = {
        stopDefault(origin) { origin.preventDefault(); },
        stopNow(origin) { origin.stopImmediatePropagation(); },
        stop(origin) { origin.stopPropagation(); }
    };
    Platform.canvas = Creator.canvas();
    Platform.conicGradientSupport = !!Platform.canvas.context.createConicGradient;
}
Platform.name = 'web';
Platform.isMobile = 'ontouchstart' in window;
Platform.requestRender = function (render) { window.requestAnimationFrame(render); };
defineKey(Platform, 'devicePixelRatio', { get() { return Math.max(1, devicePixelRatio); } });
const { userAgent } = navigator;
if (userAgent.indexOf("Firefox") > -1) {
    Platform.conicGradientRotate90 = true;
    Platform.intWheelDeltaY = true;
    Platform.syncDomFont = true;
}
else if (userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") === -1) {
    Platform.fullImageShadow = true;
}
if (userAgent.indexOf('Windows') > -1) {
    Platform.os = 'Windows';
    Platform.intWheelDeltaY = true;
}
else if (userAgent.indexOf('Mac') > -1) {
    Platform.os = 'Mac';
}
else if (userAgent.indexOf('Linux') > -1) {
    Platform.os = 'Linux';
}

class Watcher {
    get childrenChanged() { return this.hasAdd || this.hasRemove || this.hasVisible; }
    get updatedList() {
        if (this.hasRemove) {
            const updatedList = new LeafList();
            this.__updatedList.list.forEach(item => { if (item.leafer)
                updatedList.add(item); });
            return updatedList;
        }
        else {
            return this.__updatedList;
        }
    }
    constructor(target, userConfig) {
        this.totalTimes = 0;
        this.config = {};
        this.__updatedList = new LeafList();
        this.target = target;
        if (userConfig)
            this.config = DataHelper.default(userConfig, this.config);
        this.__listenEvents();
    }
    start() {
        if (this.disabled)
            return;
        this.running = true;
    }
    stop() {
        this.running = false;
    }
    disable() {
        this.stop();
        this.__removeListenEvents();
        this.disabled = true;
    }
    update() {
        this.changed = true;
        if (this.running)
            this.target.emit(RenderEvent.REQUEST);
    }
    __onAttrChange(event) {
        this.__updatedList.add(event.target);
        this.update();
    }
    __onChildEvent(event) {
        if (event.type === ChildEvent.ADD) {
            this.hasAdd = true;
            this.__pushChild(event.child);
        }
        else {
            this.hasRemove = true;
            this.__updatedList.add(event.parent);
        }
        this.update();
    }
    __pushChild(child) {
        this.__updatedList.add(child);
        if (child.isBranch)
            this.__loopChildren(child);
    }
    __loopChildren(parent) {
        const { children } = parent;
        for (let i = 0, len = children.length; i < len; i++)
            this.__pushChild(children[i]);
    }
    __onRquestData() {
        this.target.emitEvent(new WatchEvent(WatchEvent.DATA, { updatedList: this.updatedList }));
        this.__updatedList = new LeafList();
        this.totalTimes++;
        this.changed = false;
        this.hasVisible = false;
        this.hasRemove = false;
        this.hasAdd = false;
    }
    __listenEvents() {
        const { target } = this;
        this.__eventIds = [
            target.on_(PropertyEvent.CHANGE, this.__onAttrChange, this),
            target.on_([ChildEvent.ADD, ChildEvent.REMOVE], this.__onChildEvent, this),
            target.on_(WatchEvent.REQUEST, this.__onRquestData, this)
        ];
    }
    __removeListenEvents() {
        this.target.off_(this.__eventIds);
    }
    destroy() {
        if (this.target) {
            this.stop();
            this.__removeListenEvents();
            this.target = null;
            this.__updatedList = null;
        }
    }
}

const { updateAllMatrix: updateAllMatrix$1, updateBounds: updateOneBounds, updateAllWorldOpacity } = LeafHelper;
const { pushAllChildBranch, pushAllParent } = BranchHelper;
function updateMatrix(updateList, levelList) {
    let layout;
    updateList.list.forEach(leaf => {
        layout = leaf.__layout;
        if (levelList.without(leaf) && !layout.proxyZoom) {
            if (layout.matrixChanged) {
                updateAllMatrix$1(leaf, true);
                levelList.add(leaf);
                if (leaf.isBranch)
                    pushAllChildBranch(leaf, levelList);
                pushAllParent(leaf, levelList);
            }
            else if (layout.boundsChanged) {
                levelList.add(leaf);
                if (leaf.isBranch)
                    leaf.__tempNumber = 0;
                pushAllParent(leaf, levelList);
            }
        }
    });
}
function updateBounds(boundsList) {
    let list, branch, children;
    boundsList.sort(true);
    boundsList.levels.forEach(level => {
        list = boundsList.levelMap[level];
        for (let i = 0, len = list.length; i < len; i++) {
            branch = list[i];
            if (branch.isBranch && branch.__tempNumber) {
                children = branch.children;
                for (let j = 0, jLen = children.length; j < jLen; j++) {
                    if (!children[j].isBranch) {
                        updateOneBounds(children[j]);
                    }
                }
            }
            updateOneBounds(branch);
        }
    });
}
function updateChange(updateList) {
    let layout;
    updateList.list.forEach(leaf => {
        layout = leaf.__layout;
        if (layout.opacityChanged)
            updateAllWorldOpacity(leaf);
        if (layout.stateStyleChanged)
            setTimeout(() => layout.stateStyleChanged && leaf.updateState());
        leaf.__updateChange();
    });
}

const { worldBounds } = LeafBoundsHelper;
const bigBounds = { x: 0, y: 0, width: 100000, height: 100000 };
class LayoutBlockData {
    constructor(list) {
        this.updatedBounds = new Bounds();
        this.beforeBounds = new Bounds();
        this.afterBounds = new Bounds();
        if (list instanceof Array)
            list = new LeafList(list);
        this.updatedList = list;
    }
    setBefore() {
        this.beforeBounds.setListWithFn(this.updatedList.list, worldBounds);
    }
    setAfter() {
        const { list } = this.updatedList;
        if (list.some(leaf => leaf.noBounds)) {
            this.afterBounds.set(bigBounds);
        }
        else {
            this.afterBounds.setListWithFn(list, worldBounds);
        }
        this.updatedBounds.setList([this.beforeBounds, this.afterBounds]);
    }
    merge(data) {
        this.updatedList.addList(data.updatedList.list);
        this.beforeBounds.add(data.beforeBounds);
        this.afterBounds.add(data.afterBounds);
        this.updatedBounds.add(data.updatedBounds);
    }
    destroy() {
        this.updatedList = null;
    }
}

const { updateAllMatrix, updateAllChange } = LeafHelper;
const debug$1 = Debug.get('Layouter');
class Layouter {
    constructor(target, userConfig) {
        this.totalTimes = 0;
        this.config = {};
        this.__levelList = new LeafLevelList();
        this.target = target;
        if (userConfig)
            this.config = DataHelper.default(userConfig, this.config);
        this.__listenEvents();
    }
    start() {
        if (this.disabled)
            return;
        this.running = true;
    }
    stop() {
        this.running = false;
    }
    disable() {
        this.stop();
        this.__removeListenEvents();
        this.disabled = true;
    }
    layout() {
        if (!this.running)
            return;
        const { target } = this;
        this.times = 0;
        try {
            target.emit(LayoutEvent.START);
            this.layoutOnce();
            target.emitEvent(new LayoutEvent(LayoutEvent.END, this.layoutedBlocks, this.times));
        }
        catch (e) {
            debug$1.error(e);
        }
        this.layoutedBlocks = null;
    }
    layoutAgain() {
        if (this.layouting) {
            this.waitAgain = true;
        }
        else {
            this.layoutOnce();
        }
    }
    layoutOnce() {
        if (this.layouting)
            return debug$1.warn('layouting');
        if (this.times > 3)
            return debug$1.warn('layout max times');
        this.times++;
        this.totalTimes++;
        this.layouting = true;
        this.target.emit(WatchEvent.REQUEST);
        if (this.totalTimes > 1) {
            this.partLayout();
        }
        else {
            this.fullLayout();
        }
        this.layouting = false;
        if (this.waitAgain) {
            this.waitAgain = false;
            this.layoutOnce();
        }
    }
    partLayout() {
        var _a;
        if (!((_a = this.__updatedList) === null || _a === void 0 ? void 0 : _a.length))
            return;
        const t = Run.start('PartLayout');
        const { target, __updatedList: updateList } = this;
        const { BEFORE, LAYOUT, AFTER } = LayoutEvent;
        const blocks = this.getBlocks(updateList);
        blocks.forEach(item => item.setBefore());
        target.emitEvent(new LayoutEvent(BEFORE, blocks, this.times));
        this.extraBlock = null;
        updateList.sort();
        updateMatrix(updateList, this.__levelList);
        updateBounds(this.__levelList);
        updateChange(updateList);
        if (this.extraBlock)
            blocks.push(this.extraBlock);
        blocks.forEach(item => item.setAfter());
        target.emitEvent(new LayoutEvent(LAYOUT, blocks, this.times));
        target.emitEvent(new LayoutEvent(AFTER, blocks, this.times));
        this.addBlocks(blocks);
        this.__levelList.reset();
        this.__updatedList = null;
        Run.end(t);
    }
    fullLayout() {
        const t = Run.start('FullLayout');
        const { target } = this;
        const { BEFORE, LAYOUT, AFTER } = LayoutEvent;
        const blocks = this.getBlocks(new LeafList(target));
        target.emitEvent(new LayoutEvent(BEFORE, blocks, this.times));
        Layouter.fullLayout(target);
        blocks.forEach(item => { item.setAfter(); });
        target.emitEvent(new LayoutEvent(LAYOUT, blocks, this.times));
        target.emitEvent(new LayoutEvent(AFTER, blocks, this.times));
        this.addBlocks(blocks);
        Run.end(t);
    }
    static fullLayout(target) {
        updateAllMatrix(target, true);
        if (target.isBranch) {
            BranchHelper.updateBounds(target);
        }
        else {
            LeafHelper.updateBounds(target);
        }
        updateAllChange(target);
    }
    addExtra(leaf) {
        if (!this.__updatedList.has(leaf)) {
            const { updatedList, beforeBounds } = this.extraBlock || (this.extraBlock = new LayoutBlockData([]));
            updatedList.length ? beforeBounds.add(leaf.__world) : beforeBounds.set(leaf.__world);
            updatedList.add(leaf);
        }
    }
    createBlock(data) {
        return new LayoutBlockData(data);
    }
    getBlocks(list) {
        return [this.createBlock(list)];
    }
    addBlocks(current) {
        this.layoutedBlocks ? this.layoutedBlocks.push(...current) : this.layoutedBlocks = current;
    }
    __onReceiveWatchData(event) {
        this.__updatedList = event.data.updatedList;
    }
    __listenEvents() {
        const { target } = this;
        this.__eventIds = [
            target.on_(LayoutEvent.REQUEST, this.layout, this),
            target.on_(LayoutEvent.AGAIN, this.layoutAgain, this),
            target.on_(WatchEvent.DATA, this.__onReceiveWatchData, this)
        ];
    }
    __removeListenEvents() {
        this.target.off_(this.__eventIds);
    }
    destroy() {
        if (this.target) {
            this.stop();
            this.__removeListenEvents();
            this.target = this.config = null;
        }
    }
}

const debug = Debug.get('Renderer');
class Renderer {
    get needFill() { return !!(!this.canvas.allowBackgroundColor && this.config.fill); }
    constructor(target, canvas, userConfig) {
        this.FPS = 60;
        this.totalTimes = 0;
        this.times = 0;
        this.config = {
            usePartRender: true,
            maxFPS: 60
        };
        this.target = target;
        this.canvas = canvas;
        if (userConfig)
            this.config = DataHelper.default(userConfig, this.config);
        this.__listenEvents();
    }
    start() {
        this.running = true;
        this.update(false);
    }
    stop() {
        this.running = false;
    }
    update(change = true) {
        if (!this.changed)
            this.changed = change;
        this.__requestRender();
    }
    requestLayout() {
        this.target.emit(LayoutEvent.REQUEST);
    }
    render(callback) {
        if (!(this.running && this.canvas.view))
            return this.update();
        const { target } = this;
        this.times = 0;
        this.totalBounds = new Bounds();
        debug.log(target.innerName, '--->');
        try {
            if (!target.isApp)
                target.app.emit(RenderEvent.CHILD_START, target);
            this.emitRender(RenderEvent.START);
            this.renderOnce(callback);
            this.emitRender(RenderEvent.END, this.totalBounds);
            ImageManager.clearRecycled();
        }
        catch (e) {
            this.rendering = false;
            debug.error(e);
        }
        debug.log('-------------|');
    }
    renderAgain() {
        if (this.rendering) {
            this.waitAgain = true;
        }
        else {
            this.renderOnce();
        }
    }
    renderOnce(callback) {
        if (this.rendering)
            return debug.warn('rendering');
        if (this.times > 3)
            return debug.warn('render max times');
        this.times++;
        this.totalTimes++;
        this.rendering = true;
        this.changed = false;
        this.renderBounds = new Bounds();
        this.renderOptions = {};
        if (callback) {
            this.emitRender(RenderEvent.BEFORE);
            callback();
        }
        else {
            this.requestLayout();
            if (this.ignore) {
                this.ignore = this.rendering = false;
                return;
            }
            this.emitRender(RenderEvent.BEFORE);
            if (this.config.usePartRender && this.totalTimes > 1) {
                this.partRender();
            }
            else {
                this.fullRender();
            }
        }
        this.emitRender(RenderEvent.RENDER, this.renderBounds, this.renderOptions);
        this.emitRender(RenderEvent.AFTER, this.renderBounds, this.renderOptions);
        this.updateBlocks = null;
        this.rendering = false;
        if (this.waitAgain) {
            this.waitAgain = false;
            this.renderOnce();
        }
    }
    partRender() {
        const { canvas, updateBlocks: list } = this;
        if (!list)
            return;
        this.mergeBlocks();
        list.forEach(block => { if (canvas.bounds.hit(block) && !block.isEmpty())
            this.clipRender(block); });
    }
    clipRender(block) {
        const t = Run.start('PartRender');
        const { canvas } = this;
        const bounds = block.getIntersect(canvas.bounds);
        const includes = block.includes(this.target.__world);
        const realBounds = new Bounds(bounds);
        canvas.save();
        if (includes && !Debug.showRepaint) {
            canvas.clear();
        }
        else {
            bounds.spread(10 + 1 / this.canvas.pixelRatio).ceil();
            canvas.clearWorld(bounds, true);
            canvas.clipWorld(bounds, true);
        }
        this.__render(bounds, includes, realBounds);
        canvas.restore();
        Run.end(t);
    }
    fullRender() {
        const t = Run.start('FullRender');
        const { canvas } = this;
        canvas.save();
        canvas.clear();
        this.__render(canvas.bounds, true);
        canvas.restore();
        Run.end(t);
    }
    __render(bounds, includes, realBounds) {
        const options = bounds.includes(this.target.__world) ? { includes } : { bounds, includes };
        if (this.needFill)
            this.canvas.fillWorld(bounds, this.config.fill);
        if (Debug.showRepaint)
            this.canvas.strokeWorld(bounds, 'red');
        this.target.__render(this.canvas, options);
        this.renderBounds = realBounds = realBounds || bounds;
        this.renderOptions = options;
        this.totalBounds.isEmpty() ? this.totalBounds = realBounds : this.totalBounds.add(realBounds);
        if (Debug.showHitView)
            this.renderHitView(options);
        if (Debug.showBoundsView)
            this.renderBoundsView(options);
        this.canvas.updateRender(realBounds);
    }
    renderHitView(_options) { }
    renderBoundsView(_options) { }
    addBlock(block) {
        if (!this.updateBlocks)
            this.updateBlocks = [];
        this.updateBlocks.push(block);
    }
    mergeBlocks() {
        const { updateBlocks: list } = this;
        if (list) {
            const bounds = new Bounds();
            bounds.setList(list);
            list.length = 0;
            list.push(bounds);
        }
    }
    __requestRender() {
        if (this.requestTime)
            return;
        const requestTime = this.requestTime = Date.now();
        Platform.requestRender(() => {
            this.FPS = Math.min(60, Math.ceil(1000 / (Date.now() - requestTime)));
            this.requestTime = 0;
            if (this.running) {
                if (this.changed && this.canvas.view)
                    this.render();
                this.target.emit(RenderEvent.NEXT);
            }
        });
    }
    __onResize(e) {
        if (this.canvas.unreal)
            return;
        if (e.bigger || !e.samePixelRatio) {
            const { width, height } = e.old;
            const bounds = new Bounds(0, 0, width, height);
            if (!bounds.includes(this.target.__world) || this.needFill || !e.samePixelRatio) {
                this.addBlock(this.canvas.bounds);
                this.target.forceUpdate('surface');
                return;
            }
        }
        this.addBlock(new Bounds(0, 0, 1, 1));
        this.update();
    }
    __onLayoutEnd(event) {
        if (event.data)
            event.data.map(item => {
                let empty;
                if (item.updatedList)
                    item.updatedList.list.some(leaf => {
                        empty = (!leaf.__world.width || !leaf.__world.height);
                        if (empty) {
                            if (!leaf.isLeafer)
                                debug.tip(leaf.innerName, ': empty');
                            empty = (!leaf.isBranch || leaf.isBranchLeaf);
                        }
                        return empty;
                    });
                this.addBlock(empty ? this.canvas.bounds : item.updatedBounds);
            });
    }
    emitRender(type, bounds, options) {
        this.target.emitEvent(new RenderEvent(type, this.times, bounds, options));
    }
    __listenEvents() {
        const { target } = this;
        this.__eventIds = [
            target.on_(RenderEvent.REQUEST, this.update, this),
            target.on_(LayoutEvent.END, this.__onLayoutEnd, this),
            target.on_(RenderEvent.AGAIN, this.renderAgain, this),
            target.on_(ResizeEvent.RESIZE, this.__onResize, this)
        ];
    }
    __removeListenEvents() {
        this.target.off_(this.__eventIds);
    }
    destroy() {
        if (this.target) {
            this.stop();
            this.__removeListenEvents();
            this.target = this.canvas = this.config = null;
        }
    }
}

const { hitRadiusPoint } = BoundsHelper;
class Picker {
    constructor(target, selector) {
        this.target = target;
        this.selector = selector;
    }
    getByPoint(hitPoint, hitRadius, options) {
        if (!hitRadius)
            hitRadius = 0;
        if (!options)
            options = {};
        const through = options.through || false;
        const ignoreHittable = options.ignoreHittable || false;
        const target = options.target || this.target;
        this.exclude = options.exclude || null;
        this.point = { x: hitPoint.x, y: hitPoint.y, radiusX: hitRadius, radiusY: hitRadius };
        this.findList = new LeafList(options.findList);
        if (!options.findList)
            this.hitBranch(target);
        const { list } = this.findList;
        const leaf = this.getBestMatchLeaf(list, options.bottomList, ignoreHittable);
        const path = ignoreHittable ? this.getPath(leaf) : this.getHitablePath(leaf);
        this.clear();
        return through ? { path, target: leaf, throughPath: list.length ? this.getThroughPath(list) : path } : { path, target: leaf };
    }
    getBestMatchLeaf(list, bottomList, ignoreHittable) {
        if (list.length) {
            let find;
            this.findList = new LeafList();
            const { x, y } = this.point;
            const point = { x, y, radiusX: 0, radiusY: 0 };
            for (let i = 0, len = list.length; i < len; i++) {
                find = list[i];
                if (ignoreHittable || LeafHelper.worldHittable(find)) {
                    this.hitChild(find, point);
                    if (this.findList.length)
                        return this.findList.list[0];
                }
            }
        }
        if (bottomList) {
            for (let i = 0, len = bottomList.length; i < len; i++) {
                this.hitChild(bottomList[i].target, this.point, bottomList[i].proxy);
                if (this.findList.length)
                    return this.findList.list[0];
            }
        }
        return list[0];
    }
    getPath(leaf) {
        const path = new LeafList();
        while (leaf) {
            path.add(leaf);
            leaf = leaf.parent;
        }
        if (this.target)
            path.add(this.target);
        return path;
    }
    getHitablePath(leaf) {
        const path = this.getPath(leaf && leaf.hittable ? leaf : null);
        let item, hittablePath = new LeafList();
        for (let i = path.list.length - 1; i > -1; i--) {
            item = path.list[i];
            if (!item.__.hittable)
                break;
            hittablePath.addAt(item, 0);
            if (!item.__.hitChildren)
                break;
        }
        return hittablePath;
    }
    getThroughPath(list) {
        const throughPath = new LeafList();
        const pathList = [];
        for (let i = list.length - 1; i > -1; i--) {
            pathList.push(this.getPath(list[i]));
        }
        let path, nextPath, leaf;
        for (let i = 0, len = pathList.length; i < len; i++) {
            path = pathList[i], nextPath = pathList[i + 1];
            for (let j = 0, jLen = path.length; j < jLen; j++) {
                leaf = path.list[j];
                if (nextPath && nextPath.has(leaf))
                    break;
                throughPath.add(leaf);
            }
        }
        return throughPath;
    }
    hitBranch(branch) {
        this.eachFind(branch.children, branch.__onlyHitMask);
    }
    eachFind(children, hitMask) {
        let child, hit;
        const { point } = this, len = children.length;
        for (let i = len - 1; i > -1; i--) {
            child = children[i];
            if (!child.__.visible || (hitMask && !child.__.mask))
                continue;
            hit = child.__.hitRadius ? true : hitRadiusPoint(child.__world, point);
            if (child.isBranch) {
                if (hit || child.__ignoreHitWorld) {
                    this.eachFind(child.children, child.__onlyHitMask);
                    if (child.isBranchLeaf)
                        this.hitChild(child, point);
                }
            }
            else {
                if (hit)
                    this.hitChild(child, point);
            }
        }
    }
    hitChild(child, point, proxy) {
        if (this.exclude && this.exclude.has(child))
            return;
        if (child.__hitWorld(point)) {
            const { parent } = child;
            if (parent && parent.__hasMask && !child.__.mask && !parent.children.some(item => item.__.mask && item.__hitWorld(point)))
                return;
            this.findList.add(proxy || child);
        }
    }
    clear() {
        this.point = null;
        this.findList = null;
        this.exclude = null;
    }
    destroy() {
        this.clear();
    }
}

class Selector {
    constructor(target, userConfig) {
        this.config = {};
        if (userConfig)
            this.config = DataHelper.default(userConfig, this.config);
        this.picker = new Picker(this.target = target, this);
        this.finder = Creator.finder && Creator.finder();
    }
    getByPoint(hitPoint, hitRadius, options) {
        if (Platform.backgrounder && this.target)
            this.target.updateLayout();
        return this.picker.getByPoint(hitPoint, hitRadius, options);
    }
    getBy(condition, branch, one, options) {
        return this.finder ? this.finder.getBy(condition, branch, one, options) : Plugin.need('find');
    }
    destroy() {
        this.picker.destroy();
        if (this.finder)
            this.finder.destroy();
    }
}

Object.assign(Creator, {
    watcher: (target, options) => new Watcher(target, options),
    layouter: (target, options) => new Layouter(target, options),
    renderer: (target, canvas, options) => new Renderer(target, canvas, options),
    selector: (target, options) => new Selector(target, options)
});
Platform.layout = Layouter.fullLayout;

const PointerEventHelper = {
    convert(e, local) {
        const base = InteractionHelper.getBase(e);
        const data = Object.assign(Object.assign({}, base), { x: local.x, y: local.y, width: e.width, height: e.height, pointerType: e.pointerType, pressure: e.pressure });
        if (data.pointerType === 'pen') {
            data.tangentialPressure = e.tangentialPressure;
            data.tiltX = e.tiltX;
            data.tiltY = e.tiltY;
            data.twist = e.twist;
        }
        return data;
    },
    convertMouse(e, local) {
        const base = InteractionHelper.getBase(e);
        return Object.assign(Object.assign({}, base), { x: local.x, y: local.y, width: 1, height: 1, pointerType: 'mouse', pressure: 0.5 });
    },
    convertTouch(e, local) {
        const touch = PointerEventHelper.getTouch(e);
        const base = InteractionHelper.getBase(e);
        return Object.assign(Object.assign({}, base), { x: local.x, y: local.y, width: 1, height: 1, pointerType: 'touch', multiTouch: e.touches.length > 1, pressure: touch.force });
    },
    getTouch(e) {
        return e.targetTouches[0] || e.changedTouches[0];
    }
};

const KeyEventHelper = {
    convert(e) {
        const base = InteractionHelper.getBase(e);
        const data = Object.assign(Object.assign({}, base), { code: e.code, key: e.key });
        return data;
    }
};

const { pathCanDrag } = InteractionHelper;
class Interaction extends InteractionBase {
    __listenEvents() {
        super.__listenEvents();
        const view = this.view = this.canvas.view;
        this.viewEvents = {
            'pointerdown': this.onPointerDown,
            'mousedown': this.onMouseDown,
            'touchstart': this.onTouchStart,
            'contextmenu': this.onContextMenu,
            'wheel': this.onWheel,
            'gesturestart': this.onGesturestart,
            'gesturechange': this.onGesturechange,
            'gestureend': this.onGestureend
        };
        this.windowEvents = {
            'pointermove': this.onPointerMove,
            'pointerup': this.onPointerUp,
            'pointercancel': this.onPointerCancel,
            'mousemove': this.onMouseMove,
            'mouseup': this.onMouseUp,
            'touchmove': this.onTouchMove,
            'touchend': this.onTouchEnd,
            'touchcancel': this.onTouchCancel,
            'keydown': this.onKeyDown,
            'keyup': this.onKeyUp,
            'scroll': this.onScroll
        };
        const { viewEvents, windowEvents } = this;
        for (let name in viewEvents) {
            viewEvents[name] = viewEvents[name].bind(this);
            view.addEventListener(name, viewEvents[name]);
        }
        for (let name in windowEvents) {
            windowEvents[name] = windowEvents[name].bind(this);
            window.addEventListener(name, windowEvents[name]);
        }
    }
    __removeListenEvents() {
        super.__removeListenEvents();
        const { viewEvents, windowEvents } = this;
        for (let name in viewEvents) {
            this.view.removeEventListener(name, viewEvents[name]);
            this.viewEvents = {};
        }
        for (let name in windowEvents) {
            window.removeEventListener(name, windowEvents[name]);
            this.windowEvents = {};
        }
    }
    getTouches(touches) {
        const list = [];
        for (let i = 0, len = touches.length; i < len; i++) {
            list.push(touches[i]);
        }
        return list;
    }
    preventDefaultPointer(e) {
        const { pointer } = this.config;
        if (pointer.preventDefault)
            e.preventDefault();
    }
    preventDefaultWheel(e) {
        const { wheel } = this.config;
        if (wheel.preventDefault)
            e.preventDefault();
    }
    preventWindowPointer(e) {
        return !this.downData && e.target !== this.view;
    }
    onKeyDown(e) {
        this.keyDown(KeyEventHelper.convert(e));
    }
    onKeyUp(e) {
        this.keyUp(KeyEventHelper.convert(e));
    }
    onContextMenu(e) {
        if (this.config.pointer.preventDefaultMenu)
            e.preventDefault();
        this.menu(PointerEventHelper.convert(e, this.getLocal(e)));
    }
    onScroll() {
        this.canvas.updateClientBounds();
    }
    onPointerDown(e) {
        this.preventDefaultPointer(e);
        if (this.config.pointer.touch || this.useMultiTouch)
            return;
        this.usePointer || (this.usePointer = true);
        this.pointerDown(PointerEventHelper.convert(e, this.getLocal(e)));
    }
    onPointerMove(e) {
        if (this.config.pointer.touch || this.useMultiTouch || this.preventWindowPointer(e))
            return;
        this.usePointer || (this.usePointer = true);
        this.pointerMove(PointerEventHelper.convert(e, this.getLocal(e, true)));
    }
    onPointerUp(e) {
        if (this.downData)
            this.preventDefaultPointer(e);
        if (this.config.pointer.touch || this.useMultiTouch || this.preventWindowPointer(e))
            return;
        this.pointerUp(PointerEventHelper.convert(e, this.getLocal(e)));
    }
    onPointerCancel() {
        if (this.useMultiTouch)
            return;
        this.pointerCancel();
    }
    onMouseDown(e) {
        this.preventDefaultPointer(e);
        if (this.useTouch || this.usePointer)
            return;
        this.pointerDown(PointerEventHelper.convertMouse(e, this.getLocal(e)));
    }
    onMouseMove(e) {
        if (this.useTouch || this.usePointer || this.preventWindowPointer(e))
            return;
        this.pointerMove(PointerEventHelper.convertMouse(e, this.getLocal(e, true)));
    }
    onMouseUp(e) {
        if (this.downData)
            this.preventDefaultPointer(e);
        if (this.useTouch || this.usePointer || this.preventWindowPointer(e))
            return;
        this.pointerUp(PointerEventHelper.convertMouse(e, this.getLocal(e)));
    }
    onMouseCancel() {
        if (this.useTouch || this.usePointer)
            return;
        this.pointerCancel();
    }
    onTouchStart(e) {
        const touch = PointerEventHelper.getTouch(e);
        const local = this.getLocal(touch, true);
        const { preventDefault } = this.config.touch;
        if (preventDefault === true || (preventDefault === 'auto' && pathCanDrag(this.findPath(local))))
            e.preventDefault();
        this.multiTouchStart(e);
        if (this.usePointer)
            return;
        if (this.touchTimer) {
            window.clearTimeout(this.touchTimer);
            this.touchTimer = 0;
        }
        this.useTouch = true;
        this.pointerDown(PointerEventHelper.convertTouch(e, local));
    }
    onTouchMove(e) {
        this.multiTouchMove(e);
        if (this.usePointer || this.preventWindowPointer(e))
            return;
        const touch = PointerEventHelper.getTouch(e);
        this.pointerMove(PointerEventHelper.convertTouch(e, this.getLocal(touch)));
    }
    onTouchEnd(e) {
        this.multiTouchEnd();
        if (this.usePointer || this.preventWindowPointer(e))
            return;
        if (this.touchTimer)
            clearTimeout(this.touchTimer);
        this.touchTimer = setTimeout(() => {
            this.useTouch = false;
        }, 500);
        const touch = PointerEventHelper.getTouch(e);
        this.pointerUp(PointerEventHelper.convertTouch(e, this.getLocal(touch)));
    }
    onTouchCancel() {
        if (this.usePointer)
            return;
        this.pointerCancel();
    }
    multiTouchStart(e) {
        this.useMultiTouch = (e.touches.length > 1);
        this.touches = this.useMultiTouch ? this.getTouches(e.touches) : undefined;
        if (this.useMultiTouch)
            this.pointerCancel();
    }
    multiTouchMove(e) {
        if (!this.useMultiTouch)
            return;
        if (e.touches.length > 1) {
            const touches = this.getTouches(e.touches);
            const list = this.getKeepTouchList(this.touches, touches);
            if (list.length > 1) {
                this.multiTouch(InteractionHelper.getBase(e), list);
                this.touches = touches;
            }
        }
    }
    multiTouchEnd() {
        this.touches = null;
        this.useMultiTouch = false;
        this.transformEnd();
    }
    getKeepTouchList(old, touches) {
        let to;
        const list = [];
        old.forEach(from => {
            to = touches.find(touch => touch.identifier === from.identifier);
            if (to)
                list.push({ from: this.getLocal(from), to: this.getLocal(to) });
        });
        return list;
    }
    getLocalTouchs(points) {
        return points.map(point => this.getLocal(point));
    }
    onWheel(e) {
        this.preventDefaultWheel(e);
        this.wheel(Object.assign(Object.assign(Object.assign({}, InteractionHelper.getBase(e)), this.getLocal(e)), { deltaX: e.deltaX, deltaY: e.deltaY }));
    }
    onGesturestart(e) {
        if (this.useMultiTouch)
            return;
        this.preventDefaultWheel(e);
        this.lastGestureScale = 1;
        this.lastGestureRotation = 0;
    }
    onGesturechange(e) {
        if (this.useMultiTouch)
            return;
        this.preventDefaultWheel(e);
        const eventBase = InteractionHelper.getBase(e);
        Object.assign(eventBase, this.getLocal(e));
        const scale = (e.scale / this.lastGestureScale);
        const rotation = (e.rotation - this.lastGestureRotation) / Math.PI * 180 * (MathHelper.within(this.config.wheel.rotateSpeed, 0, 1) / 4 + 0.1);
        this.zoom(Object.assign(Object.assign({}, eventBase), { scale: scale * scale }));
        this.rotate(Object.assign(Object.assign({}, eventBase), { rotation }));
        this.lastGestureScale = e.scale;
        this.lastGestureRotation = e.rotation;
    }
    onGestureend(e) {
        if (this.useMultiTouch)
            return;
        this.preventDefaultWheel(e);
        this.transformEnd();
    }
    setCursor(cursor) {
        super.setCursor(cursor);
        const list = [];
        this.eachCursor(cursor, list);
        if (typeof list[list.length - 1] === 'object')
            list.push('default');
        this.canvas.view.style.cursor = list.map(item => (typeof item === 'object') ? `url(${item.url}) ${item.x || 0} ${item.y || 0}` : item).join(',');
    }
    eachCursor(cursor, list, level = 0) {
        level++;
        if (cursor instanceof Array) {
            cursor.forEach(item => this.eachCursor(item, list, level));
        }
        else {
            const custom = typeof cursor === 'string' && Cursor.get(cursor);
            if (custom && level < 2) {
                this.eachCursor(custom, list, level);
            }
            else {
                list.push(cursor);
            }
        }
    }
    destroy() {
        if (this.view) {
            super.destroy();
            this.view = null;
            this.touches = null;
        }
    }
}

function fillText(ui, canvas) {
    let row;
    const { rows, decorationY, decorationHeight } = ui.__.__textDrawData;
    for (let i = 0, len = rows.length; i < len; i++) {
        row = rows[i];
        if (row.text)
            canvas.fillText(row.text, row.x, row.y);
        else if (row.data)
            row.data.forEach(charData => { canvas.fillText(charData.char, charData.x, row.y); });
        if (decorationY)
            canvas.fillRect(row.x, row.y + decorationY, row.width, decorationHeight);
    }
}

function fill(fill, ui, canvas) {
    canvas.fillStyle = fill;
    ui.__.__font ? fillText(ui, canvas) : (ui.__.windingRule ? canvas.fill(ui.__.windingRule) : canvas.fill());
}
function fills(fills, ui, canvas) {
    let item;
    const { windingRule, __font } = ui.__;
    for (let i = 0, len = fills.length; i < len; i++) {
        item = fills[i];
        if (item.image && PaintImage.checkImage(ui, canvas, item, !__font))
            continue;
        if (item.style) {
            canvas.fillStyle = item.style;
            if (item.transform) {
                canvas.save();
                canvas.transform(item.transform);
                if (item.blendMode)
                    canvas.blendMode = item.blendMode;
                __font ? fillText(ui, canvas) : (windingRule ? canvas.fill(windingRule) : canvas.fill());
                canvas.restore();
            }
            else {
                if (item.blendMode) {
                    canvas.saveBlendMode(item.blendMode);
                    __font ? fillText(ui, canvas) : (windingRule ? canvas.fill(windingRule) : canvas.fill());
                    canvas.restoreBlendMode();
                }
                else {
                    __font ? fillText(ui, canvas) : (windingRule ? canvas.fill(windingRule) : canvas.fill());
                }
            }
        }
    }
}

function strokeText(stroke, ui, canvas) {
    const { strokeAlign } = ui.__;
    const isStrokes = typeof stroke !== 'string';
    switch (strokeAlign) {
        case 'center':
            canvas.setStroke(isStrokes ? undefined : stroke, ui.__.strokeWidth, ui.__);
            isStrokes ? drawStrokesStyle(stroke, true, ui, canvas) : drawTextStroke(ui, canvas);
            break;
        case 'inside':
            drawAlignStroke('inside', stroke, isStrokes, ui, canvas);
            break;
        case 'outside':
            drawAlignStroke('outside', stroke, isStrokes, ui, canvas);
            break;
    }
}
function drawAlignStroke(align, stroke, isStrokes, ui, canvas) {
    const { __strokeWidth, __font } = ui.__;
    const out = canvas.getSameCanvas(true, true);
    out.setStroke(isStrokes ? undefined : stroke, __strokeWidth * 2, ui.__);
    out.font = __font;
    isStrokes ? drawStrokesStyle(stroke, true, ui, out) : drawTextStroke(ui, out);
    out.blendMode = align === 'outside' ? 'destination-out' : 'destination-in';
    fillText(ui, out);
    out.blendMode = 'normal';
    if (ui.__worldFlipped)
        canvas.copyWorldByReset(out, ui.__nowWorld);
    else
        canvas.copyWorldToInner(out, ui.__nowWorld, ui.__layout.renderBounds);
    out.recycle(ui.__nowWorld);
}
function drawTextStroke(ui, canvas) {
    let row;
    const { rows, decorationY, decorationHeight } = ui.__.__textDrawData;
    for (let i = 0, len = rows.length; i < len; i++) {
        row = rows[i];
        if (row.text)
            canvas.strokeText(row.text, row.x, row.y);
        else if (row.data)
            row.data.forEach(charData => { canvas.strokeText(charData.char, charData.x, row.y); });
        if (decorationY)
            canvas.strokeRect(row.x, row.y + decorationY, row.width, decorationHeight);
    }
}
function drawStrokesStyle(strokes, isText, ui, canvas) {
    let item;
    for (let i = 0, len = strokes.length; i < len; i++) {
        item = strokes[i];
        if (item.image && PaintImage.checkImage(ui, canvas, item, false))
            continue;
        if (item.style) {
            canvas.strokeStyle = item.style;
            if (item.blendMode) {
                canvas.saveBlendMode(item.blendMode);
                isText ? drawTextStroke(ui, canvas) : canvas.stroke();
                canvas.restoreBlendMode();
            }
            else {
                isText ? drawTextStroke(ui, canvas) : canvas.stroke();
            }
        }
    }
}

function stroke(stroke, ui, canvas) {
    const options = ui.__;
    const { __strokeWidth, strokeAlign, __font } = options;
    if (!__strokeWidth)
        return;
    if (__font) {
        strokeText(stroke, ui, canvas);
    }
    else {
        switch (strokeAlign) {
            case 'center':
                canvas.setStroke(stroke, __strokeWidth, options);
                canvas.stroke();
                if (options.__useArrow)
                    strokeArrow(ui, canvas);
                break;
            case 'inside':
                canvas.save();
                canvas.setStroke(stroke, __strokeWidth * 2, options);
                options.windingRule ? canvas.clip(options.windingRule) : canvas.clip();
                canvas.stroke();
                canvas.restore();
                break;
            case 'outside':
                const out = canvas.getSameCanvas(true, true);
                out.setStroke(stroke, __strokeWidth * 2, options);
                ui.__drawRenderPath(out);
                out.stroke();
                options.windingRule ? out.clip(options.windingRule) : out.clip();
                out.clearWorld(ui.__layout.renderBounds);
                if (ui.__worldFlipped)
                    canvas.copyWorldByReset(out, ui.__nowWorld);
                else
                    canvas.copyWorldToInner(out, ui.__nowWorld, ui.__layout.renderBounds);
                out.recycle(ui.__nowWorld);
                break;
        }
    }
}
function strokes(strokes, ui, canvas) {
    const options = ui.__;
    const { __strokeWidth, strokeAlign, __font } = options;
    if (!__strokeWidth)
        return;
    if (__font) {
        strokeText(strokes, ui, canvas);
    }
    else {
        switch (strokeAlign) {
            case 'center':
                canvas.setStroke(undefined, __strokeWidth, options);
                drawStrokesStyle(strokes, false, ui, canvas);
                if (options.__useArrow)
                    strokeArrow(ui, canvas);
                break;
            case 'inside':
                canvas.save();
                canvas.setStroke(undefined, __strokeWidth * 2, options);
                options.windingRule ? canvas.clip(options.windingRule) : canvas.clip();
                drawStrokesStyle(strokes, false, ui, canvas);
                canvas.restore();
                break;
            case 'outside':
                const { renderBounds } = ui.__layout;
                const out = canvas.getSameCanvas(true, true);
                ui.__drawRenderPath(out);
                out.setStroke(undefined, __strokeWidth * 2, options);
                drawStrokesStyle(strokes, false, ui, out);
                options.windingRule ? out.clip(options.windingRule) : out.clip();
                out.clearWorld(renderBounds);
                if (ui.__worldFlipped)
                    canvas.copyWorldByReset(out, ui.__nowWorld);
                else
                    canvas.copyWorldToInner(out, ui.__nowWorld, renderBounds);
                out.recycle(ui.__nowWorld);
                break;
        }
    }
}
function strokeArrow(ui, canvas) {
    if (ui.__.dashPattern) {
        canvas.beginPath();
        ui.__drawPathByData(canvas, ui.__.__pathForArrow);
        canvas.dashPattern = null;
        canvas.stroke();
    }
}

const { getSpread, getOuterOf, getByMove, getIntersectData } = BoundsHelper;
function shape(ui, current, options) {
    const canvas = current.getSameCanvas();
    const nowWorld = ui.__nowWorld;
    let bounds, fitMatrix, shapeBounds, worldCanvas;
    let { scaleX, scaleY } = nowWorld;
    if (scaleX < 0)
        scaleX = -scaleX;
    if (scaleY < 0)
        scaleY = -scaleY;
    if (current.bounds.includes(nowWorld)) {
        worldCanvas = canvas;
        bounds = shapeBounds = nowWorld;
    }
    else {
        const { renderShapeSpread: spread } = ui.__layout;
        const worldClipBounds = getIntersectData(spread ? getSpread(current.bounds, scaleX === scaleY ? spread * scaleX : [spread * scaleY, spread * scaleX]) : current.bounds, nowWorld);
        fitMatrix = current.bounds.getFitMatrix(worldClipBounds);
        let { a: fitScaleX, d: fitScaleY } = fitMatrix;
        if (fitMatrix.a < 1) {
            worldCanvas = current.getSameCanvas();
            ui.__renderShape(worldCanvas, options);
            scaleX *= fitScaleX;
            scaleY *= fitScaleY;
        }
        shapeBounds = getOuterOf(nowWorld, fitMatrix);
        bounds = getByMove(shapeBounds, -fitMatrix.e, -fitMatrix.f);
        if (options.matrix) {
            const { matrix } = options;
            fitMatrix.multiply(matrix);
            fitScaleX *= matrix.scaleX;
            fitScaleY *= matrix.scaleY;
        }
        options = Object.assign(Object.assign({}, options), { matrix: fitMatrix.withScale(fitScaleX, fitScaleY) });
    }
    ui.__renderShape(canvas, options);
    return {
        canvas, matrix: fitMatrix, bounds,
        worldCanvas, shapeBounds, scaleX, scaleY
    };
}

let recycleMap;
function compute(attrName, ui) {
    const data = ui.__, leafPaints = [];
    let paints = data.__input[attrName], hasOpacityPixel;
    if (!(paints instanceof Array))
        paints = [paints];
    recycleMap = PaintImage.recycleImage(attrName, data);
    for (let i = 0, len = paints.length, item; i < len; i++) {
        item = getLeafPaint(attrName, paints[i], ui);
        if (item)
            leafPaints.push(item);
    }
    data['_' + attrName] = leafPaints.length ? leafPaints : undefined;
    if (leafPaints.length && leafPaints[0].image)
        hasOpacityPixel = leafPaints[0].image.hasOpacityPixel;
    attrName === 'fill' ? data.__pixelFill = hasOpacityPixel : data.__pixelStroke = hasOpacityPixel;
}
function getLeafPaint(attrName, paint, ui) {
    if (typeof paint !== 'object' || paint.visible === false || paint.opacity === 0)
        return undefined;
    const { boxBounds } = ui.__layout;
    switch (paint.type) {
        case 'solid':
            let { type, blendMode, color, opacity } = paint;
            return { type, blendMode, style: ColorConvert.string(color, opacity) };
        case 'image':
            return PaintImage.image(ui, attrName, paint, boxBounds, !recycleMap || !recycleMap[paint.url]);
        case 'linear':
            return PaintGradient.linearGradient(paint, boxBounds);
        case 'radial':
            return PaintGradient.radialGradient(paint, boxBounds);
        case 'angular':
            return PaintGradient.conicGradient(paint, boxBounds);
        default:
            return paint.r !== undefined ? { type: 'solid', style: ColorConvert.string(paint) } : undefined;
    }
}

const PaintModule = {
    compute,
    fill,
    fills,
    fillText,
    stroke,
    strokes,
    strokeText,
    drawTextStroke,
    shape
};

let origin = {};
const { get: get$3, rotateOfOuter: rotateOfOuter$1, translate: translate$1, scaleOfOuter: scaleOfOuter$1, scale: scaleHelper, rotate } = MatrixHelper;
function fillOrFitMode(data, box, x, y, scaleX, scaleY, rotation) {
    const transform = get$3();
    translate$1(transform, box.x + x, box.y + y);
    scaleHelper(transform, scaleX, scaleY);
    if (rotation)
        rotateOfOuter$1(transform, { x: box.x + box.width / 2, y: box.y + box.height / 2 }, rotation);
    data.transform = transform;
}
function clipMode(data, box, x, y, scaleX, scaleY, rotation) {
    const transform = get$3();
    translate$1(transform, box.x + x, box.y + y);
    if (scaleX)
        scaleHelper(transform, scaleX, scaleY);
    if (rotation)
        rotate(transform, rotation);
    data.transform = transform;
}
function repeatMode(data, box, width, height, x, y, scaleX, scaleY, rotation, align) {
    const transform = get$3();
    if (rotation) {
        if (align === 'center') {
            rotateOfOuter$1(transform, { x: width / 2, y: height / 2 }, rotation);
        }
        else {
            rotate(transform, rotation);
            switch (rotation) {
                case 90:
                    translate$1(transform, height, 0);
                    break;
                case 180:
                    translate$1(transform, width, height);
                    break;
                case 270:
                    translate$1(transform, 0, width);
                    break;
            }
        }
    }
    origin.x = box.x + x;
    origin.y = box.y + y;
    translate$1(transform, origin.x, origin.y);
    if (scaleX)
        scaleOfOuter$1(transform, origin, scaleX, scaleY);
    data.transform = transform;
}

const { get: get$2, translate } = MatrixHelper;
const tempBox = new Bounds();
const tempPoint = {};
const tempScaleData = {};
function createData(leafPaint, image, paint, box) {
    const { blendMode, sync } = paint;
    if (blendMode)
        leafPaint.blendMode = blendMode;
    if (sync)
        leafPaint.sync = sync;
    leafPaint.data = getPatternData(paint, box, image);
}
function getPatternData(paint, box, image) {
    let { width, height } = image;
    if (paint.padding)
        box = tempBox.set(box).shrink(paint.padding);
    if (paint.mode === 'strench')
        paint.mode = 'stretch';
    const { opacity, mode, align, offset, scale, size, rotation, repeat } = paint;
    const sameBox = box.width === width && box.height === height;
    const data = { mode };
    const swapSize = align !== 'center' && (rotation || 0) % 180 === 90;
    const swapWidth = swapSize ? height : width, swapHeight = swapSize ? width : height;
    let x = 0, y = 0, scaleX, scaleY;
    if (!mode || mode === 'cover' || mode === 'fit') {
        if (!sameBox || rotation) {
            const sw = box.width / swapWidth, sh = box.height / swapHeight;
            scaleX = scaleY = mode === 'fit' ? Math.min(sw, sh) : Math.max(sw, sh);
            x += (box.width - width * scaleX) / 2, y += (box.height - height * scaleY) / 2;
        }
    }
    else if (scale || size) {
        MathHelper.getScaleData(scale, size, image, tempScaleData);
        scaleX = tempScaleData.scaleX;
        scaleY = tempScaleData.scaleY;
    }
    if (align) {
        const imageBounds = { x, y, width: swapWidth, height: swapHeight };
        if (scaleX)
            imageBounds.width *= scaleX, imageBounds.height *= scaleY;
        AlignHelper.toPoint(align, imageBounds, box, tempPoint, true);
        x += tempPoint.x, y += tempPoint.y;
    }
    if (offset)
        x += offset.x, y += offset.y;
    switch (mode) {
        case 'stretch':
            if (!sameBox)
                width = box.width, height = box.height;
            break;
        case 'normal':
        case 'clip':
            if (x || y || scaleX || rotation)
                clipMode(data, box, x, y, scaleX, scaleY, rotation);
            break;
        case 'repeat':
            if (!sameBox || scaleX || rotation)
                repeatMode(data, box, width, height, x, y, scaleX, scaleY, rotation, align);
            if (!repeat)
                data.repeat = 'repeat';
            break;
        case 'fit':
        case 'cover':
        default:
            if (scaleX)
                fillOrFitMode(data, box, x, y, scaleX, scaleY, rotation);
    }
    if (!data.transform) {
        if (box.x || box.y) {
            data.transform = get$2();
            translate(data.transform, box.x, box.y);
        }
    }
    if (scaleX && mode !== 'stretch') {
        data.scaleX = scaleX;
        data.scaleY = scaleY;
    }
    data.width = width;
    data.height = height;
    if (opacity)
        data.opacity = opacity;
    if (repeat)
        data.repeat = typeof repeat === 'string' ? (repeat === 'x' ? 'repeat-x' : 'repeat-y') : 'repeat';
    return data;
}

let cache, box = new Bounds();
const { isSame } = BoundsHelper;
function image(ui, attrName, paint, boxBounds, firstUse) {
    let leafPaint, event;
    const image = ImageManager.get(paint);
    if (cache && paint === cache.paint && isSame(boxBounds, cache.boxBounds)) {
        leafPaint = cache.leafPaint;
    }
    else {
        leafPaint = { type: paint.type, image };
        cache = image.use > 1 ? { leafPaint, paint, boxBounds: box.set(boxBounds) } : null;
    }
    if (firstUse || image.loading)
        event = { image, attrName, attrValue: paint };
    if (image.ready) {
        checkSizeAndCreateData(ui, attrName, paint, image, leafPaint, boxBounds);
        if (firstUse) {
            onLoad(ui, event);
            onLoadSuccess(ui, event);
        }
    }
    else if (image.error) {
        if (firstUse)
            onLoadError(ui, event, image.error);
    }
    else {
        if (firstUse) {
            ignoreRender(ui, true);
            onLoad(ui, event);
        }
        leafPaint.loadId = image.load(() => {
            ignoreRender(ui, false);
            if (!ui.destroyed) {
                if (checkSizeAndCreateData(ui, attrName, paint, image, leafPaint, boxBounds)) {
                    if (image.hasOpacityPixel)
                        ui.__layout.hitCanvasChanged = true;
                    ui.forceUpdate('surface');
                }
                onLoadSuccess(ui, event);
            }
            leafPaint.loadId = null;
        }, (error) => {
            ignoreRender(ui, false);
            onLoadError(ui, event, error);
            leafPaint.loadId = null;
        });
    }
    return leafPaint;
}
function checkSizeAndCreateData(ui, attrName, paint, image, leafPaint, boxBounds) {
    if (attrName === 'fill' && !ui.__.__naturalWidth) {
        const data = ui.__;
        data.__naturalWidth = image.width / data.pixelRatio;
        data.__naturalHeight = image.height / data.pixelRatio;
        if (data.__autoSide) {
            ui.forceUpdate('width');
            if (ui.__proxyData) {
                ui.setProxyAttr('width', data.width);
                ui.setProxyAttr('height', data.height);
            }
            return false;
        }
    }
    if (!leafPaint.data)
        createData(leafPaint, image, paint, boxBounds);
    return true;
}
function onLoad(ui, event) {
    emit(ui, ImageEvent.LOAD, event);
}
function onLoadSuccess(ui, event) {
    emit(ui, ImageEvent.LOADED, event);
}
function onLoadError(ui, event, error) {
    event.error = error;
    ui.forceUpdate('surface');
    emit(ui, ImageEvent.ERROR, event);
}
function emit(ui, type, data) {
    if (ui.hasEvent(type))
        ui.emitEvent(new ImageEvent(type, data));
}
function ignoreRender(ui, value) {
    const { leafer } = ui;
    if (leafer && leafer.viewReady)
        leafer.renderer.ignore = value;
}

const { get: get$1, scale, copy: copy$1 } = MatrixHelper;
const { ceil, abs: abs$1 } = Math;
function createPattern(ui, paint, pixelRatio) {
    let { scaleX, scaleY } = ImageManager.patternLocked ? ui.__world : ui.__nowWorld;
    const id = scaleX + '-' + scaleY + '-' + pixelRatio;
    if (paint.patternId !== id && !ui.destroyed) {
        scaleX = abs$1(scaleX);
        scaleY = abs$1(scaleY);
        const { image, data } = paint;
        let imageScale, imageMatrix, { width, height, scaleX: sx, scaleY: sy, opacity, transform, repeat } = data;
        if (sx) {
            imageMatrix = get$1();
            copy$1(imageMatrix, transform);
            scale(imageMatrix, 1 / sx, 1 / sy);
            scaleX *= sx;
            scaleY *= sy;
        }
        scaleX *= pixelRatio;
        scaleY *= pixelRatio;
        width *= scaleX;
        height *= scaleY;
        const size = width * height;
        if (!repeat) {
            if (size > Platform.image.maxCacheSize)
                return false;
        }
        let maxSize = Platform.image.maxPatternSize;
        if (!image.isSVG) {
            const imageSize = image.width * image.height;
            if (maxSize > imageSize)
                maxSize = imageSize;
        }
        if (size > maxSize)
            imageScale = Math.sqrt(size / maxSize);
        if (imageScale) {
            scaleX /= imageScale;
            scaleY /= imageScale;
            width /= imageScale;
            height /= imageScale;
        }
        if (sx) {
            scaleX /= sx;
            scaleY /= sy;
        }
        if (transform || scaleX !== 1 || scaleY !== 1) {
            if (!imageMatrix) {
                imageMatrix = get$1();
                if (transform)
                    copy$1(imageMatrix, transform);
            }
            scale(imageMatrix, 1 / scaleX, 1 / scaleY);
        }
        const canvas = image.getCanvas(ceil(width) || 1, ceil(height) || 1, opacity);
        const pattern = image.getPattern(canvas, repeat || (Platform.origin.noRepeat || 'no-repeat'), imageMatrix, paint);
        paint.style = pattern;
        paint.patternId = id;
        return true;
    }
    else {
        return false;
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const { abs } = Math;
function checkImage(ui, canvas, paint, allowPaint) {
    const { scaleX, scaleY } = ImageManager.patternLocked ? ui.__world : ui.__nowWorld;
    const { pixelRatio } = canvas;
    if (!paint.data || (paint.patternId === scaleX + '-' + scaleY + '-' + pixelRatio && !Export.running)) {
        return false;
    }
    else {
        const { data } = paint;
        if (allowPaint) {
            if (!data.repeat) {
                let { width, height } = data;
                width *= abs(scaleX) * pixelRatio;
                height *= abs(scaleY) * pixelRatio;
                if (data.scaleX) {
                    width *= data.scaleX;
                    height *= data.scaleY;
                }
                allowPaint = (width * height > Platform.image.maxCacheSize) || Export.running;
            }
            else {
                allowPaint = false;
            }
        }
        if (allowPaint) {
            canvas.save();
            ui.windingRule ? canvas.clip(ui.windingRule) : canvas.clip();
            if (paint.blendMode)
                canvas.blendMode = paint.blendMode;
            if (data.opacity)
                canvas.opacity *= data.opacity;
            if (data.transform)
                canvas.transform(data.transform);
            canvas.drawImage(paint.image.view, 0, 0, data.width, data.height);
            canvas.restore();
            return true;
        }
        else {
            if (!paint.style || paint.sync || Export.running) {
                createPattern(ui, paint, pixelRatio);
            }
            else {
                if (!paint.patternTask) {
                    paint.patternTask = ImageManager.patternTasker.add(() => __awaiter(this, void 0, void 0, function* () {
                        paint.patternTask = null;
                        if (canvas.bounds.hit(ui.__nowWorld))
                            createPattern(ui, paint, pixelRatio);
                        ui.forceUpdate('surface');
                    }), 300);
                }
            }
            return false;
        }
    }
}

function recycleImage(attrName, data) {
    const paints = data['_' + attrName];
    if (paints instanceof Array) {
        let image, recycleMap, input, url;
        for (let i = 0, len = paints.length; i < len; i++) {
            image = paints[i].image;
            url = image && image.url;
            if (url) {
                if (!recycleMap)
                    recycleMap = {};
                recycleMap[url] = true;
                ImageManager.recycle(image);
                if (image.loading) {
                    if (!input) {
                        input = (data.__input && data.__input[attrName]) || [];
                        if (!(input instanceof Array))
                            input = [input];
                    }
                    image.unload(paints[i].loadId, !input.some((item) => item.url === url));
                }
            }
        }
        return recycleMap;
    }
    return null;
}

const PaintImageModule = {
    image,
    checkImage,
    createPattern,
    recycleImage,
    createData,
    getPatternData,
    fillOrFitMode,
    clipMode,
    repeatMode
};

const { toPoint: toPoint$2 } = AroundHelper;
const realFrom$2 = {};
const realTo$2 = {};
function linearGradient(paint, box) {
    let { from, to, type, blendMode, opacity } = paint;
    toPoint$2(from || 'top', box, realFrom$2);
    toPoint$2(to || 'bottom', box, realTo$2);
    const style = Platform.canvas.createLinearGradient(realFrom$2.x, realFrom$2.y, realTo$2.x, realTo$2.y);
    applyStops(style, paint.stops, opacity);
    const data = { type, style };
    if (blendMode)
        data.blendMode = blendMode;
    return data;
}
function applyStops(gradient, stops, opacity) {
    if (stops) {
        let stop;
        for (let i = 0, len = stops.length; i < len; i++) {
            stop = stops[i];
            if (typeof stop === 'string') {
                gradient.addColorStop(i / (len - 1), ColorConvert.string(stop, opacity));
            }
            else {
                gradient.addColorStop(stop.offset, ColorConvert.string(stop.color, opacity));
            }
        }
    }
}

const { getAngle, getDistance: getDistance$1 } = PointHelper;
const { get, rotateOfOuter, scaleOfOuter } = MatrixHelper;
const { toPoint: toPoint$1 } = AroundHelper;
const realFrom$1 = {};
const realTo$1 = {};
function radialGradient(paint, box) {
    let { from, to, type, opacity, blendMode, stretch } = paint;
    toPoint$1(from || 'center', box, realFrom$1);
    toPoint$1(to || 'bottom', box, realTo$1);
    const style = Platform.canvas.createRadialGradient(realFrom$1.x, realFrom$1.y, 0, realFrom$1.x, realFrom$1.y, getDistance$1(realFrom$1, realTo$1));
    applyStops(style, paint.stops, opacity);
    const data = { type, style };
    const transform = getTransform(box, realFrom$1, realTo$1, stretch, true);
    if (transform)
        data.transform = transform;
    if (blendMode)
        data.blendMode = blendMode;
    return data;
}
function getTransform(box, from, to, stretch, rotate90) {
    let transform;
    const { width, height } = box;
    if (width !== height || stretch) {
        const angle = getAngle(from, to);
        transform = get();
        if (rotate90) {
            scaleOfOuter(transform, from, width / height * (stretch || 1), 1);
            rotateOfOuter(transform, from, angle + 90);
        }
        else {
            scaleOfOuter(transform, from, 1, width / height * (stretch || 1));
            rotateOfOuter(transform, from, angle);
        }
    }
    return transform;
}

const { getDistance } = PointHelper;
const { toPoint } = AroundHelper;
const realFrom = {};
const realTo = {};
function conicGradient(paint, box) {
    let { from, to, type, opacity, blendMode, stretch } = paint;
    toPoint(from || 'center', box, realFrom);
    toPoint(to || 'bottom', box, realTo);
    const style = Platform.conicGradientSupport ? Platform.canvas.createConicGradient(0, realFrom.x, realFrom.y) : Platform.canvas.createRadialGradient(realFrom.x, realFrom.y, 0, realFrom.x, realFrom.y, getDistance(realFrom, realTo));
    applyStops(style, paint.stops, opacity);
    const data = { type, style };
    const transform = getTransform(box, realFrom, realTo, stretch || 1, Platform.conicGradientRotate90);
    if (transform)
        data.transform = transform;
    if (blendMode)
        data.blendMode = blendMode;
    return data;
}

const PaintGradientModule = {
    linearGradient,
    radialGradient,
    conicGradient,
    getTransform
};

const { copy, toOffsetOutBounds: toOffsetOutBounds$1 } = BoundsHelper;
const tempBounds = {};
const offsetOutBounds$1 = {};
function shadow(ui, current, shape) {
    let copyBounds, spreadScale;
    const { __nowWorld: nowWorld, __layout } = ui;
    const { shadow } = ui.__;
    const { worldCanvas, bounds, shapeBounds, scaleX, scaleY } = shape;
    const other = current.getSameCanvas();
    const end = shadow.length - 1;
    toOffsetOutBounds$1(bounds, offsetOutBounds$1);
    shadow.forEach((item, index) => {
        other.setWorldShadow((offsetOutBounds$1.offsetX + item.x * scaleX), (offsetOutBounds$1.offsetY + item.y * scaleY), item.blur * scaleX, item.color);
        spreadScale = item.spread ? 1 + item.spread * 2 / (__layout.boxBounds.width + (__layout.strokeBoxSpread || 0) * 2) : 0;
        drawWorldShadow(other, offsetOutBounds$1, spreadScale, shape);
        copyBounds = bounds;
        if (item.box) {
            other.restore();
            other.save();
            if (worldCanvas) {
                other.copyWorld(other, bounds, nowWorld, 'copy');
                copyBounds = nowWorld;
            }
            worldCanvas ? other.copyWorld(worldCanvas, nowWorld, nowWorld, 'destination-out') : other.copyWorld(shape.canvas, shapeBounds, bounds, 'destination-out');
        }
        if (ui.__worldFlipped) {
            current.copyWorldByReset(other, copyBounds, nowWorld, item.blendMode);
        }
        else {
            current.copyWorldToInner(other, copyBounds, __layout.renderBounds, item.blendMode);
        }
        if (end && index < end)
            other.clearWorld(copyBounds, true);
    });
    other.recycle(copyBounds);
}
function drawWorldShadow(canvas, outBounds, spreadScale, shape) {
    const { bounds, shapeBounds } = shape;
    if (Platform.fullImageShadow) {
        copy(tempBounds, canvas.bounds);
        tempBounds.x += (outBounds.x - shapeBounds.x);
        tempBounds.y += (outBounds.y - shapeBounds.y);
        if (spreadScale) {
            const { matrix } = shape;
            tempBounds.x -= (bounds.x + (matrix ? matrix.e : 0) + bounds.width / 2) * (spreadScale - 1);
            tempBounds.y -= (bounds.y + (matrix ? matrix.f : 0) + bounds.height / 2) * (spreadScale - 1);
            tempBounds.width *= spreadScale;
            tempBounds.height *= spreadScale;
        }
        canvas.copyWorld(shape.canvas, canvas.bounds, tempBounds);
    }
    else {
        if (spreadScale) {
            copy(tempBounds, outBounds);
            tempBounds.x -= (outBounds.width / 2) * (spreadScale - 1);
            tempBounds.y -= (outBounds.height / 2) * (spreadScale - 1);
            tempBounds.width *= spreadScale;
            tempBounds.height *= spreadScale;
        }
        canvas.copyWorld(shape.canvas, shapeBounds, spreadScale ? tempBounds : outBounds);
    }
}

const { toOffsetOutBounds } = BoundsHelper;
const offsetOutBounds = {};
function innerShadow(ui, current, shape) {
    let copyBounds, spreadScale;
    const { __nowWorld: nowWorld, __layout: __layout } = ui;
    const { innerShadow } = ui.__;
    const { worldCanvas, bounds, shapeBounds, scaleX, scaleY } = shape;
    const other = current.getSameCanvas();
    const end = innerShadow.length - 1;
    toOffsetOutBounds(bounds, offsetOutBounds);
    innerShadow.forEach((item, index) => {
        other.save();
        other.setWorldShadow((offsetOutBounds.offsetX + item.x * scaleX), (offsetOutBounds.offsetY + item.y * scaleY), item.blur * scaleX);
        spreadScale = item.spread ? 1 - item.spread * 2 / (__layout.boxBounds.width + (__layout.strokeBoxSpread || 0) * 2) : 0;
        drawWorldShadow(other, offsetOutBounds, spreadScale, shape);
        other.restore();
        if (worldCanvas) {
            other.copyWorld(other, bounds, nowWorld, 'copy');
            other.copyWorld(worldCanvas, nowWorld, nowWorld, 'source-out');
            copyBounds = nowWorld;
        }
        else {
            other.copyWorld(shape.canvas, shapeBounds, bounds, 'source-out');
            copyBounds = bounds;
        }
        other.fillWorld(copyBounds, item.color, 'source-in');
        if (ui.__worldFlipped) {
            current.copyWorldByReset(other, copyBounds, nowWorld, item.blendMode);
        }
        else {
            current.copyWorldToInner(other, copyBounds, __layout.renderBounds, item.blendMode);
        }
        if (end && index < end)
            other.clearWorld(copyBounds, true);
    });
    other.recycle(copyBounds);
}

function blur(ui, current, origin) {
    const { blur } = ui.__;
    origin.setWorldBlur(blur * ui.__nowWorld.a);
    origin.copyWorldToInner(current, ui.__nowWorld, ui.__layout.renderBounds);
    origin.filter = 'none';
}

function backgroundBlur(_ui, _current, _shape) {
}

const EffectModule = {
    shadow,
    innerShadow,
    blur,
    backgroundBlur
};

const { excludeRenderBounds } = LeafBoundsHelper;
Group.prototype.__renderMask = function (canvas, options) {
    let child, maskCanvas, contentCanvas, maskOpacity, currentMask, mask;
    const { children } = this;
    for (let i = 0, len = children.length; i < len; i++) {
        child = children[i], mask = child.__.mask;
        if (mask) {
            if (currentMask) {
                maskEnd(this, currentMask, canvas, contentCanvas, maskCanvas, maskOpacity);
                maskCanvas = contentCanvas = null;
            }
            if (mask === 'path' || mask === 'clipping-path') {
                if (child.opacity < 1) {
                    currentMask = 'opacity-path';
                    maskOpacity = child.opacity;
                    if (!contentCanvas)
                        contentCanvas = getCanvas(canvas);
                }
                else {
                    currentMask = 'path';
                    canvas.save();
                }
                child.__clip(contentCanvas || canvas, options);
            }
            else {
                currentMask = mask === 'grayscale' ? 'grayscale' : 'alpha';
                if (!maskCanvas)
                    maskCanvas = getCanvas(canvas);
                if (!contentCanvas)
                    contentCanvas = getCanvas(canvas);
                child.__render(maskCanvas, options);
            }
            if (!(mask === 'clipping' || mask === 'clipping-path'))
                continue;
        }
        if (excludeRenderBounds(child, options))
            continue;
        child.__render(contentCanvas || canvas, options);
    }
    maskEnd(this, currentMask, canvas, contentCanvas, maskCanvas, maskOpacity);
};
function maskEnd(leaf, maskMode, canvas, contentCanvas, maskCanvas, maskOpacity) {
    switch (maskMode) {
        case 'grayscale':
            maskCanvas.useGrayscaleAlpha(leaf.__nowWorld);
        case 'alpha':
            usePixelMask(leaf, canvas, contentCanvas, maskCanvas);
            break;
        case 'opacity-path':
            copyContent(leaf, canvas, contentCanvas, maskOpacity);
            break;
        case 'path':
            canvas.restore();
    }
}
function getCanvas(canvas) {
    return canvas.getSameCanvas(false, true);
}
function usePixelMask(leaf, canvas, content, mask) {
    const realBounds = leaf.__nowWorld;
    content.resetTransform();
    content.opacity = 1;
    content.useMask(mask, realBounds);
    mask.recycle(realBounds);
    copyContent(leaf, canvas, content, 1);
}
function copyContent(leaf, canvas, content, maskOpacity) {
    const realBounds = leaf.__nowWorld;
    canvas.resetTransform();
    canvas.opacity = maskOpacity;
    canvas.copyWorld(content, realBounds);
    content.recycle(realBounds);
}

const money = '¥￥＄€£￡¢￠';
const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
const langBefore = '《（「〈『〖【〔｛┌＜‘“＝' + money;
const langAfter = '》）」〉』〗】〕｝┐＞’”！？，、。：；‰';
const langSymbol = '≮≯≈≠＝…';
const langBreak$1 = '—／～｜┆·';
const beforeChar = '{[(<\'"' + langBefore;
const afterChar = '>)]}%!?,.:;\'"' + langAfter;
const symbolChar = afterChar + '_#~&*+\\=|' + langSymbol;
const breakChar = '- ' + langBreak$1;
const cjkRangeList = [
    [0x4E00, 0x9FFF],
    [0x3400, 0x4DBF],
    [0x20000, 0x2A6DF],
    [0x2A700, 0x2B73F],
    [0x2B740, 0x2B81F],
    [0x2B820, 0x2CEAF],
    [0x2CEB0, 0x2EBEF],
    [0x30000, 0x3134F],
    [0x31350, 0x323AF],
    [0x2E80, 0x2EFF],
    [0x2F00, 0x2FDF],
    [0x2FF0, 0x2FFF],
    [0x3000, 0x303F],
    [0x31C0, 0x31EF],
    [0x3200, 0x32FF],
    [0x3300, 0x33FF],
    [0xF900, 0xFAFF],
    [0xFE30, 0xFE4F],
    [0x1F200, 0x1F2FF],
    [0x2F800, 0x2FA1F],
];
const cjkReg = new RegExp(cjkRangeList.map(([start, end]) => `[\\u${start.toString(16)}-\\u${end.toString(16)}]`).join('|'));
function mapChar(str) {
    const map = {};
    str.split('').forEach(char => map[char] = true);
    return map;
}
const letterMap = mapChar(letter);
const beforeMap = mapChar(beforeChar);
const afterMap = mapChar(afterChar);
const symbolMap = mapChar(symbolChar);
const breakMap = mapChar(breakChar);
var CharType;
(function (CharType) {
    CharType[CharType["Letter"] = 0] = "Letter";
    CharType[CharType["Single"] = 1] = "Single";
    CharType[CharType["Before"] = 2] = "Before";
    CharType[CharType["After"] = 3] = "After";
    CharType[CharType["Symbol"] = 4] = "Symbol";
    CharType[CharType["Break"] = 5] = "Break";
})(CharType || (CharType = {}));
const { Letter: Letter$1, Single: Single$1, Before: Before$1, After: After$1, Symbol: Symbol$1, Break: Break$1 } = CharType;
function getCharType(char) {
    if (letterMap[char]) {
        return Letter$1;
    }
    else if (breakMap[char]) {
        return Break$1;
    }
    else if (beforeMap[char]) {
        return Before$1;
    }
    else if (afterMap[char]) {
        return After$1;
    }
    else if (symbolMap[char]) {
        return Symbol$1;
    }
    else if (cjkReg.test(char)) {
        return Single$1;
    }
    else {
        return Letter$1;
    }
}

const TextRowHelper = {
    trimRight(row) {
        const { words } = row;
        let trimRight = 0, len = words.length, char;
        for (let i = len - 1; i > -1; i--) {
            char = words[i].data[0];
            if (char.char === ' ') {
                trimRight++;
                row.width -= char.width;
            }
            else {
                break;
            }
        }
        if (trimRight)
            words.splice(len - trimRight, trimRight);
    }
};

function getTextCase(char, textCase, firstChar) {
    switch (textCase) {
        case 'title':
            return firstChar ? char.toUpperCase() : char;
        case 'upper':
            return char.toUpperCase();
        case 'lower':
            return char.toLowerCase();
        default:
            return char;
    }
}

const { trimRight } = TextRowHelper;
const { Letter, Single, Before, After, Symbol, Break } = CharType;
let word, row, wordWidth, rowWidth, realWidth;
let char, charWidth, startCharSize, charSize, charType, lastCharType, langBreak, afterBreak, paraStart;
let textDrawData, rows = [], bounds, findMaxWidth;
function createRows(drawData, content, style) {
    textDrawData = drawData;
    rows = drawData.rows;
    bounds = drawData.bounds;
    findMaxWidth = !bounds.width && !style.autoSizeAlign;
    const { __letterSpacing, paraIndent, textCase } = style;
    const { canvas } = Platform;
    const { width, height } = bounds;
    const charMode = width || height || __letterSpacing || (textCase !== 'none');
    if (charMode) {
        const wrap = style.textWrap !== 'none';
        const breakAll = style.textWrap === 'break';
        paraStart = true;
        lastCharType = null;
        startCharSize = charWidth = charSize = wordWidth = rowWidth = 0;
        word = { data: [] }, row = { words: [] };
        for (let i = 0, len = content.length; i < len; i++) {
            char = content[i];
            if (char === '\n') {
                if (wordWidth)
                    addWord();
                row.paraEnd = true;
                addRow();
                paraStart = true;
            }
            else {
                charType = getCharType(char);
                if (charType === Letter && textCase !== 'none')
                    char = getTextCase(char, textCase, !wordWidth);
                charWidth = canvas.measureText(char).width;
                if (__letterSpacing) {
                    if (__letterSpacing < 0)
                        charSize = charWidth;
                    charWidth += __letterSpacing;
                }
                langBreak = (charType === Single && (lastCharType === Single || lastCharType === Letter)) || (lastCharType === Single && charType !== After);
                afterBreak = ((charType === Before || charType === Single) && (lastCharType === Symbol || lastCharType === After));
                realWidth = paraStart && paraIndent ? width - paraIndent : width;
                if (wrap && (width && rowWidth + wordWidth + charWidth > realWidth)) {
                    if (breakAll) {
                        if (wordWidth)
                            addWord();
                        if (rowWidth)
                            addRow();
                    }
                    else {
                        if (!afterBreak)
                            afterBreak = charType === Letter && lastCharType == After;
                        if (langBreak || afterBreak || charType === Break || charType === Before || charType === Single || (wordWidth + charWidth > realWidth)) {
                            if (wordWidth)
                                addWord();
                            if (rowWidth)
                                addRow();
                        }
                        else {
                            if (rowWidth)
                                addRow();
                        }
                    }
                }
                if (char === ' ' && paraStart !== true && (rowWidth + wordWidth) === 0) ;
                else {
                    if (charType === Break) {
                        if (char === ' ' && wordWidth)
                            addWord();
                        addChar(char, charWidth);
                        addWord();
                    }
                    else if (langBreak || afterBreak) {
                        if (wordWidth)
                            addWord();
                        addChar(char, charWidth);
                    }
                    else {
                        addChar(char, charWidth);
                    }
                }
                lastCharType = charType;
            }
        }
        if (wordWidth)
            addWord();
        if (rowWidth)
            addRow();
        rows.length > 0 && (rows[rows.length - 1].paraEnd = true);
    }
    else {
        content.split('\n').forEach(content => {
            textDrawData.paraNumber++;
            rowWidth = canvas.measureText(content).width;
            rows.push({ x: paraIndent || 0, text: content, width: rowWidth, paraStart: true });
            if (findMaxWidth)
                setMaxWidth();
        });
    }
}
function addChar(char, width) {
    if (charSize && !startCharSize)
        startCharSize = charSize;
    word.data.push({ char, width });
    wordWidth += width;
}
function addWord() {
    rowWidth += wordWidth;
    word.width = wordWidth;
    row.words.push(word);
    word = { data: [] };
    wordWidth = 0;
}
function addRow() {
    if (paraStart) {
        textDrawData.paraNumber++;
        row.paraStart = true;
        paraStart = false;
    }
    if (charSize) {
        row.startCharSize = startCharSize;
        row.endCharSize = charSize;
        startCharSize = 0;
    }
    row.width = rowWidth;
    if (bounds.width)
        trimRight(row);
    else if (findMaxWidth)
        setMaxWidth();
    rows.push(row);
    row = { words: [] };
    rowWidth = 0;
}
function setMaxWidth() {
    if (rowWidth > (textDrawData.maxWidth || 0))
        textDrawData.maxWidth = rowWidth;
}

const CharMode = 0;
const WordMode = 1;
const TextMode = 2;
function layoutChar(drawData, style, width, _height) {
    const { rows } = drawData;
    const { textAlign, paraIndent, letterSpacing } = style;
    let charX, addWordWidth, indentWidth, mode, wordChar;
    rows.forEach(row => {
        if (row.words) {
            indentWidth = paraIndent && row.paraStart ? paraIndent : 0;
            addWordWidth = (width && (textAlign === 'justify' || textAlign === 'both') && row.words.length > 1) ? (width - row.width - indentWidth) / (row.words.length - 1) : 0;
            mode = (letterSpacing || row.isOverflow) ? CharMode : (addWordWidth > 0.01 ? WordMode : TextMode);
            if (row.isOverflow && !letterSpacing)
                row.textMode = true;
            if (mode === TextMode) {
                row.x += indentWidth;
                toTextChar$1(row);
            }
            else {
                row.x += indentWidth;
                charX = row.x;
                row.data = [];
                row.words.forEach(word => {
                    if (mode === WordMode) {
                        wordChar = { char: '', x: charX };
                        charX = toWordChar(word.data, charX, wordChar);
                        if (row.isOverflow || wordChar.char !== ' ')
                            row.data.push(wordChar);
                    }
                    else {
                        charX = toChar(word.data, charX, row.data, row.isOverflow);
                    }
                    if (addWordWidth && (!row.paraEnd || textAlign === 'both')) {
                        charX += addWordWidth;
                        row.width += addWordWidth;
                    }
                });
            }
            row.words = null;
        }
    });
}
function toTextChar$1(row) {
    row.text = '';
    row.words.forEach(word => {
        word.data.forEach(char => {
            row.text += char.char;
        });
    });
}
function toWordChar(data, charX, wordChar) {
    data.forEach(char => {
        wordChar.char += char.char;
        charX += char.width;
    });
    return charX;
}
function toChar(data, charX, rowData, isOverflow) {
    data.forEach(char => {
        if (isOverflow || char.char !== ' ') {
            char.x = charX;
            rowData.push(char);
        }
        charX += char.width;
    });
    return charX;
}

function layoutText(drawData, style) {
    const { rows, bounds } = drawData;
    const { __lineHeight, __baseLine, __letterSpacing, __clipText, textAlign, verticalAlign, paraSpacing, autoSizeAlign } = style;
    let { x, y, width, height } = bounds, realHeight = __lineHeight * rows.length + (paraSpacing ? paraSpacing * (drawData.paraNumber - 1) : 0);
    let starY = __baseLine;
    if (__clipText && realHeight > height) {
        realHeight = Math.max(height, __lineHeight);
        drawData.overflow = rows.length;
    }
    else if (height || autoSizeAlign) {
        switch (verticalAlign) {
            case 'middle':
                y += (height - realHeight) / 2;
                break;
            case 'bottom': y += (height - realHeight);
        }
    }
    starY += y;
    let row, rowX, rowWidth, layoutWidth = (width || autoSizeAlign) ? width : drawData.maxWidth;
    for (let i = 0, len = rows.length; i < len; i++) {
        row = rows[i];
        row.x = x;
        if (row.width < width || (row.width > width && !__clipText)) {
            switch (textAlign) {
                case 'center':
                    row.x += (layoutWidth - row.width) / 2;
                    break;
                case 'right': row.x += layoutWidth - row.width;
            }
        }
        if (row.paraStart && paraSpacing && i > 0)
            starY += paraSpacing;
        row.y = starY;
        starY += __lineHeight;
        if (drawData.overflow > i && starY > realHeight) {
            row.isOverflow = true;
            drawData.overflow = i + 1;
        }
        rowX = row.x;
        rowWidth = row.width;
        if (__letterSpacing < 0) {
            if (row.width < 0) {
                rowWidth = -row.width + style.fontSize + __letterSpacing;
                rowX -= rowWidth;
                rowWidth += style.fontSize;
            }
            else {
                rowWidth -= __letterSpacing;
            }
        }
        if (rowX < bounds.x)
            bounds.x = rowX;
        if (rowWidth > bounds.width)
            bounds.width = rowWidth;
        if (__clipText && width && width < rowWidth) {
            row.isOverflow = true;
            if (!drawData.overflow)
                drawData.overflow = rows.length;
        }
    }
    bounds.y = y;
    bounds.height = realHeight;
}

function clipText(drawData, style, x, width) {
    if (!width)
        return;
    const { rows, overflow } = drawData;
    let { textOverflow } = style;
    rows.splice(overflow);
    if (textOverflow && textOverflow !== 'show') {
        if (textOverflow === 'hide')
            textOverflow = '';
        else if (textOverflow === 'ellipsis')
            textOverflow = '...';
        let char, charRight;
        const ellipsisWidth = textOverflow ? Platform.canvas.measureText(textOverflow).width : 0;
        const right = x + width - ellipsisWidth;
        const list = style.textWrap === 'none' ? rows : [rows[overflow - 1]];
        list.forEach(row => {
            if (row.isOverflow && row.data) {
                let end = row.data.length - 1;
                for (let i = end; i > -1; i--) {
                    char = row.data[i];
                    charRight = char.x + char.width;
                    if (i === end && charRight < right) {
                        break;
                    }
                    else if (charRight < right && char.char !== ' ') {
                        row.data.splice(i + 1);
                        row.width -= char.width;
                        break;
                    }
                    row.width -= char.width;
                }
                row.width += ellipsisWidth;
                row.data.push({ char: textOverflow, x: charRight });
                if (row.textMode)
                    toTextChar(row);
            }
        });
    }
}
function toTextChar(row) {
    row.text = '';
    row.data.forEach(char => {
        row.text += char.char;
    });
    row.data = null;
}

function decorationText(drawData, style) {
    const { fontSize } = style;
    drawData.decorationHeight = fontSize / 11;
    switch (style.textDecoration) {
        case 'under':
            drawData.decorationY = fontSize * 0.15;
            break;
        case 'delete':
            drawData.decorationY = -fontSize * 0.35;
    }
}

const { top, right, bottom, left } = Direction4;
function getDrawData(content, style) {
    if (typeof content !== 'string')
        content = String(content);
    let x = 0, y = 0;
    let width = style.__getInput('width') || 0;
    let height = style.__getInput('height') || 0;
    const { textDecoration, __font, __padding: padding } = style;
    if (padding) {
        if (width)
            x = padding[left], width -= (padding[right] + padding[left]);
        else if (!style.autoSizeAlign)
            x = padding[left];
        if (height)
            y = padding[top], height -= (padding[top] + padding[bottom]);
        else if (!style.autoSizeAlign)
            y = padding[top];
    }
    const drawData = {
        bounds: { x, y, width, height },
        rows: [],
        paraNumber: 0,
        font: Platform.canvas.font = __font
    };
    createRows(drawData, content, style);
    if (padding)
        padAutoText(padding, drawData, style, width, height);
    layoutText(drawData, style);
    layoutChar(drawData, style, width);
    if (drawData.overflow)
        clipText(drawData, style, x, width);
    if (textDecoration !== 'none')
        decorationText(drawData, style);
    return drawData;
}
function padAutoText(padding, drawData, style, width, height) {
    if (!width && style.autoSizeAlign) {
        switch (style.textAlign) {
            case 'left':
                offsetText(drawData, 'x', padding[left]);
                break;
            case 'right': offsetText(drawData, 'x', -padding[right]);
        }
    }
    if (!height && style.autoSizeAlign) {
        switch (style.verticalAlign) {
            case 'top':
                offsetText(drawData, 'y', padding[top]);
                break;
            case 'bottom': offsetText(drawData, 'y', -padding[bottom]);
        }
    }
}
function offsetText(drawData, attrName, value) {
    const { bounds, rows } = drawData;
    bounds[attrName] += value;
    for (let i = 0; i < rows.length; i++)
        rows[i][attrName] += value;
}

const TextConvertModule = {
    getDrawData
};

function string(color, opacity) {
    const doOpacity = typeof opacity === 'number' && opacity !== 1;
    if (typeof color === 'string') {
        if (doOpacity && ColorConvert.object)
            color = ColorConvert.object(color);
        else
            return color;
    }
    let a = color.a === undefined ? 1 : color.a;
    if (doOpacity)
        a *= opacity;
    const rgb = color.r + ',' + color.g + ',' + color.b;
    return a === 1 ? 'rgb(' + rgb + ')' : 'rgba(' + rgb + ',' + a + ')';
}

const ColorConvertModule = {
    string
};

Object.assign(TextConvert, TextConvertModule);
Object.assign(ColorConvert, ColorConvertModule);
Object.assign(Paint, PaintModule);
Object.assign(PaintImage, PaintImageModule);
Object.assign(PaintGradient, PaintGradientModule);
Object.assign(Effect, EffectModule);

Object.assign(Creator, {
    interaction: (target, canvas, selector, options) => new Interaction(target, canvas, selector, options),
    hitCanvas: (options, manager) => new LeaferCanvas(options, manager),
    hitCanvasManager: () => new HitCanvasManager()
});
useCanvas();

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class StringSet {
    entries = {};
    size = 0;
    add(value) {
        let contains = this.entries[value];
        this.entries[value] = true;
        if (!contains) {
            this.size++;
            return true;
        }
        return false;
    }
    addAll(values) {
        let oldSize = this.size;
        for (var i = 0, n = values.length; i < n; i++)
            this.add(values[i]);
        return oldSize != this.size;
    }
    contains(value) {
        return this.entries[value];
    }
    clear() {
        this.entries = {};
        this.size = 0;
    }
}
class Color {
    r;
    g;
    b;
    a;
    static WHITE = new Color(1, 1, 1, 1);
    static RED = new Color(1, 0, 0, 1);
    static GREEN = new Color(0, 1, 0, 1);
    static BLUE = new Color(0, 0, 1, 1);
    static MAGENTA = new Color(1, 0, 1, 1);
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    set(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this.clamp();
    }
    setFromColor(c) {
        this.r = c.r;
        this.g = c.g;
        this.b = c.b;
        this.a = c.a;
        return this;
    }
    setFromString(hex) {
        hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
        this.r = parseInt(hex.substr(0, 2), 16) / 255;
        this.g = parseInt(hex.substr(2, 2), 16) / 255;
        this.b = parseInt(hex.substr(4, 2), 16) / 255;
        this.a = hex.length != 8 ? 1 : parseInt(hex.substr(6, 2), 16) / 255;
        return this;
    }
    add(r, g, b, a) {
        this.r += r;
        this.g += g;
        this.b += b;
        this.a += a;
        return this.clamp();
    }
    clamp() {
        if (this.r < 0)
            this.r = 0;
        else if (this.r > 1)
            this.r = 1;
        if (this.g < 0)
            this.g = 0;
        else if (this.g > 1)
            this.g = 1;
        if (this.b < 0)
            this.b = 0;
        else if (this.b > 1)
            this.b = 1;
        if (this.a < 0)
            this.a = 0;
        else if (this.a > 1)
            this.a = 1;
        return this;
    }
    static rgba8888ToColor(color, value) {
        color.r = ((value & 0xff000000) >>> 24) / 255;
        color.g = ((value & 0x00ff0000) >>> 16) / 255;
        color.b = ((value & 0x0000ff00) >>> 8) / 255;
        color.a = ((value & 0x000000ff)) / 255;
    }
    static rgb888ToColor(color, value) {
        color.r = ((value & 0x00ff0000) >>> 16) / 255;
        color.g = ((value & 0x0000ff00) >>> 8) / 255;
        color.b = ((value & 0x000000ff)) / 255;
    }
    toRgb888() {
        const hex = (x) => ("0" + (x * 255).toString(16)).slice(-2);
        return Number("0x" + hex(this.r) + hex(this.g) + hex(this.b));
    }
    static fromString(hex) {
        return new Color().setFromString(hex);
    }
}
class MathUtils {
    static PI = 3.1415927;
    static PI2 = MathUtils.PI * 2;
    static invPI2 = 1 / MathUtils.PI2;
    static radiansToDegrees = 180 / MathUtils.PI;
    static radDeg = MathUtils.radiansToDegrees;
    static degreesToRadians = MathUtils.PI / 180;
    static degRad = MathUtils.degreesToRadians;
    static clamp(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    }
    static cosDeg(degrees) {
        return Math.cos(degrees * MathUtils.degRad);
    }
    static sinDeg(degrees) {
        return Math.sin(degrees * MathUtils.degRad);
    }
    static atan2Deg(y, x) {
        return Math.atan2(y, x) * MathUtils.degRad;
    }
    static signum(value) {
        return value > 0 ? 1 : value < 0 ? -1 : 0;
    }
    static toInt(x) {
        return x > 0 ? Math.floor(x) : Math.ceil(x);
    }
    static cbrt(x) {
        let y = Math.pow(Math.abs(x), 1 / 3);
        return x < 0 ? -y : y;
    }
    static randomTriangular(min, max) {
        return MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
    }
    static randomTriangularWith(min, max, mode) {
        let u = Math.random();
        let d = max - min;
        if (u <= (mode - min) / d)
            return min + Math.sqrt(u * d * (mode - min));
        return max - Math.sqrt((1 - u) * d * (max - mode));
    }
    static isPowerOfTwo(value) {
        return value && (value & (value - 1)) === 0;
    }
}
class Utils {
    static SUPPORTS_TYPED_ARRAYS = typeof (Float32Array) !== "undefined";
    static arrayCopy(source, sourceStart, dest, destStart, numElements) {
        for (let i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
            dest[j] = source[i];
        }
    }
    static arrayFill(array, fromIndex, toIndex, value) {
        for (let i = fromIndex; i < toIndex; i++)
            array[i] = value;
    }
    static setArraySize(array, size, value = 0) {
        let oldSize = array.length;
        if (oldSize == size)
            return array;
        array.length = size;
        if (oldSize < size) {
            for (let i = oldSize; i < size; i++)
                array[i] = value;
        }
        return array;
    }
    static ensureArrayCapacity(array, size, value = 0) {
        if (array.length >= size)
            return array;
        return Utils.setArraySize(array, size, value);
    }
    static newArray(size, defaultValue) {
        let array = new Array(size);
        for (let i = 0; i < size; i++)
            array[i] = defaultValue;
        return array;
    }
    static newFloatArray(size) {
        if (Utils.SUPPORTS_TYPED_ARRAYS)
            return new Float32Array(size);
        else {
            let array = new Array(size);
            for (let i = 0; i < array.length; i++)
                array[i] = 0;
            return array;
        }
    }
    static newShortArray(size) {
        if (Utils.SUPPORTS_TYPED_ARRAYS)
            return new Int16Array(size);
        else {
            let array = new Array(size);
            for (let i = 0; i < array.length; i++)
                array[i] = 0;
            return array;
        }
    }
    static toFloatArray(array) {
        return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
    }
    static toSinglePrecision(value) {
        return Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
    }
    // This function is used to fix WebKit 602 specific issue described at http://esotericsoftware.com/forum/iOS-10-disappearing-graphics-10109
    static webkit602BugfixHelper(alpha, blend) {
    }
    static contains(array, element, identity = true) {
        for (var i = 0; i < array.length; i++)
            if (array[i] == element)
                return true;
        return false;
    }
    static enumValue(type, name) {
        return type[name[0].toUpperCase() + name.slice(1)];
    }
}
class Pool {
    items = new Array();
    instantiator;
    constructor(instantiator) {
        this.instantiator = instantiator;
    }
    obtain() {
        return this.items.length > 0 ? this.items.pop() : this.instantiator();
    }
    free(item) {
        if (item.reset)
            item.reset();
        this.items.push(item);
    }
    freeAll(items) {
        for (let i = 0; i < items.length; i++)
            this.free(items[i]);
    }
    clear() {
        this.items.length = 0;
    }
}
class Vector2 {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    length() {
        let x = this.x;
        let y = this.y;
        return Math.sqrt(x * x + y * y);
    }
    normalize() {
        let len = this.length();
        if (len != 0) {
            this.x /= len;
            this.y /= len;
        }
        return this;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** The base class for all attachments. */
class Attachment {
    name;
    constructor(name) {
        if (!name)
            throw new Error("name cannot be null.");
        this.name = name;
    }
}
/** Base class for an attachment with vertices that are transformed by one or more bones and can be deformed by a slot's
 * {@link Slot#deform}. */
class VertexAttachment extends Attachment {
    static nextID = 0;
    /** The unique ID for this attachment. */
    id = VertexAttachment.nextID++;
    /** The bones which affect the {@link #getVertices()}. The array entries are, for each vertex, the number of bones affecting
     * the vertex followed by that many bone indices, which is the index of the bone in {@link Skeleton#bones}. Will be null
     * if this attachment has no weights. */
    bones = null;
    /** The vertex positions in the bone's coordinate system. For a non-weighted attachment, the values are `x,y`
     * entries for each vertex. For a weighted attachment, the values are `x,y,weight` entries for each bone affecting
     * each vertex. */
    vertices = [];
    /** The maximum number of world vertex values that can be output by
     * {@link #computeWorldVertices()} using the `count` parameter. */
    worldVerticesLength = 0;
    /** Timelines for the timeline attachment are also applied to this attachment.
     * May be null if no attachment-specific timelines should be applied. */
    timelineAttachment = this;
    constructor(name) {
        super(name);
    }
    /** Transforms the attachment's local {@link #vertices} to world coordinates. If the slot's {@link Slot#deform} is
     * not empty, it is used to deform the vertices.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide.
     * @param start The index of the first {@link #vertices} value to transform. Each vertex has 2 values, x and y.
     * @param count The number of world vertex values to output. Must be <= {@link #worldVerticesLength} - `start`.
     * @param worldVertices The output world vertices. Must have a length >= `offset` + `count` *
     *           `stride` / 2.
     * @param offset The `worldVertices` index to begin writing values.
     * @param stride The number of `worldVertices` entries between the value pairs written. */
    computeWorldVertices(slot, start, count, worldVertices, offset, stride) {
        count = offset + (count >> 1) * stride;
        let skeleton = slot.bone.skeleton;
        let deformArray = slot.deform;
        let vertices = this.vertices;
        let bones = this.bones;
        if (!bones) {
            if (deformArray.length > 0)
                vertices = deformArray;
            let bone = slot.bone;
            let x = bone.worldX;
            let y = bone.worldY;
            let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
            for (let v = start, w = offset; w < count; v += 2, w += stride) {
                let vx = vertices[v], vy = vertices[v + 1];
                worldVertices[w] = vx * a + vy * b + x;
                worldVertices[w + 1] = vx * c + vy * d + y;
            }
            return;
        }
        let v = 0, skip = 0;
        for (let i = 0; i < start; i += 2) {
            let n = bones[v];
            v += n + 1;
            skip += n;
        }
        let skeletonBones = skeleton.bones;
        if (deformArray.length == 0) {
            for (let w = offset, b = skip * 3; w < count; w += stride) {
                let wx = 0, wy = 0;
                let n = bones[v++];
                n += v;
                for (; v < n; v++, b += 3) {
                    let bone = skeletonBones[bones[v]];
                    let vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
                    wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
                    wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
                }
                worldVertices[w] = wx;
                worldVertices[w + 1] = wy;
            }
        }
        else {
            let deform = deformArray;
            for (let w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
                let wx = 0, wy = 0;
                let n = bones[v++];
                n += v;
                for (; v < n; v++, b += 3, f += 2) {
                    let bone = skeletonBones[bones[v]];
                    let vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
                    wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
                    wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
                }
                worldVertices[w] = wx;
                worldVertices[w + 1] = wy;
            }
        }
    }
    /** Does not copy id (generated) or name (set on construction). **/
    copyTo(attachment) {
        if (this.bones) {
            attachment.bones = new Array(this.bones.length);
            Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
        }
        else
            attachment.bones = null;
        if (this.vertices) {
            attachment.vertices = Utils.newFloatArray(this.vertices.length);
            Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
        }
        attachment.worldVerticesLength = this.worldVerticesLength;
        attachment.timelineAttachment = this.timelineAttachment;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class Sequence {
    static _nextID = 0;
    id = Sequence.nextID();
    regions;
    start = 0;
    digits = 0;
    /** The index of the region to show for the setup pose. */
    setupIndex = 0;
    constructor(count) {
        this.regions = new Array(count);
    }
    copy() {
        let copy = new Sequence(this.regions.length);
        Utils.arrayCopy(this.regions, 0, copy.regions, 0, this.regions.length);
        copy.start = this.start;
        copy.digits = this.digits;
        copy.setupIndex = this.setupIndex;
        return copy;
    }
    apply(slot, attachment) {
        let index = slot.sequenceIndex;
        if (index == -1)
            index = this.setupIndex;
        if (index >= this.regions.length)
            index = this.regions.length - 1;
        let region = this.regions[index];
        if (attachment.region != region) {
            attachment.region = region;
            attachment.updateRegion();
        }
    }
    getPath(basePath, index) {
        let result = basePath;
        let frame = (this.start + index).toString();
        for (let i = this.digits - frame.length; i > 0; i--)
            result += "0";
        result += frame;
        return result;
    }
    static nextID() {
        return Sequence._nextID++;
    }
}
var SequenceMode;
(function (SequenceMode) {
    SequenceMode[SequenceMode["hold"] = 0] = "hold";
    SequenceMode[SequenceMode["once"] = 1] = "once";
    SequenceMode[SequenceMode["loop"] = 2] = "loop";
    SequenceMode[SequenceMode["pingpong"] = 3] = "pingpong";
    SequenceMode[SequenceMode["onceReverse"] = 4] = "onceReverse";
    SequenceMode[SequenceMode["loopReverse"] = 5] = "loopReverse";
    SequenceMode[SequenceMode["pingpongReverse"] = 6] = "pingpongReverse";
})(SequenceMode || (SequenceMode = {}));
const SequenceModeValues = [
    SequenceMode.hold,
    SequenceMode.once,
    SequenceMode.loop,
    SequenceMode.pingpong,
    SequenceMode.onceReverse,
    SequenceMode.loopReverse,
    SequenceMode.pingpongReverse
];

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** A simple container for a list of timelines and a name. */
class Animation {
    /** The animation's name, which is unique across all animations in the skeleton. */
    name;
    timelines = [];
    timelineIds = new StringSet();
    /** The duration of the animation in seconds, which is the highest time of all keys in the timeline. */
    duration;
    constructor(name, timelines, duration) {
        if (!name)
            throw new Error("name cannot be null.");
        this.name = name;
        this.setTimelines(timelines);
        this.duration = duration;
    }
    setTimelines(timelines) {
        if (!timelines)
            throw new Error("timelines cannot be null.");
        this.timelines = timelines;
        this.timelineIds.clear();
        for (var i = 0; i < timelines.length; i++)
            this.timelineIds.addAll(timelines[i].getPropertyIds());
    }
    hasTimeline(ids) {
        for (let i = 0; i < ids.length; i++)
            if (this.timelineIds.contains(ids[i]))
                return true;
        return false;
    }
    /** Applies all the animation's timelines to the specified skeleton.
     *
     * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}.
     * @param loop If true, the animation repeats after {@link #getDuration()}.
     * @param events May be null to ignore fired events. */
    apply(skeleton, lastTime, time, loop, events, alpha, blend, direction) {
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        if (loop && this.duration != 0) {
            time %= this.duration;
            if (lastTime > 0)
                lastTime %= this.duration;
        }
        let timelines = this.timelines;
        for (let i = 0, n = timelines.length; i < n; i++)
            timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
    }
}
/** Controls how a timeline value is mixed with the setup pose value or current pose value when a timeline's `alpha`
 * < 1.
 *
 * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}. */
var MixBlend;
(function (MixBlend) {
    /** Transitions from the setup value to the timeline value (the current value is not used). Before the first key, the setup
     * value is set. */
    MixBlend[MixBlend["setup"] = 0] = "setup";
    /** Transitions from the current value to the timeline value. Before the first key, transitions from the current value to
     * the setup value. Timelines which perform instant transitions, such as {@link DrawOrderTimeline} or
     * {@link AttachmentTimeline}, use the setup value before the first key.
     *
     * `first` is intended for the first animations applied, not for animations layered on top of those. */
    MixBlend[MixBlend["first"] = 1] = "first";
    /** Transitions from the current value to the timeline value. No change is made before the first key (the current value is
     * kept until the first key).
     *
     * `replace` is intended for animations layered on top of others, not for the first animations applied. */
    MixBlend[MixBlend["replace"] = 2] = "replace";
    /** Transitions from the current value to the current value plus the timeline value. No change is made before the first key
     * (the current value is kept until the first key).
     *
     * `add` is intended for animations layered on top of others, not for the first animations applied. Properties
     * keyed by additive animations must be set manually or by another animation before applying the additive animations, else
     * the property values will increase continually. */
    MixBlend[MixBlend["add"] = 3] = "add";
})(MixBlend || (MixBlend = {}));
/** Indicates whether a timeline's `alpha` is mixing out over time toward 0 (the setup or current pose value) or
 * mixing in toward 1 (the timeline's value).
 *
 * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}. */
var MixDirection;
(function (MixDirection) {
    MixDirection[MixDirection["mixIn"] = 0] = "mixIn";
    MixDirection[MixDirection["mixOut"] = 1] = "mixOut";
})(MixDirection || (MixDirection = {}));
const Property = {
    rotate: 0,
    x: 1,
    y: 2,
    scaleX: 3,
    scaleY: 4,
    shearX: 5,
    shearY: 6,
    inherit: 7,
    rgb: 8,
    alpha: 9,
    rgb2: 10,
    attachment: 11,
    deform: 12,
    event: 13,
    drawOrder: 14,
    ikConstraint: 15,
    transformConstraint: 16,
    pathConstraintPosition: 17,
    pathConstraintSpacing: 18,
    pathConstraintMix: 19,
    physicsConstraintInertia: 20,
    physicsConstraintStrength: 21,
    physicsConstraintDamping: 22,
    physicsConstraintMass: 23,
    physicsConstraintWind: 24,
    physicsConstraintGravity: 25,
    physicsConstraintMix: 26,
    physicsConstraintReset: 27,
    sequence: 28,
};
/** The interface for all timelines. */
class Timeline {
    propertyIds;
    frames;
    constructor(frameCount, propertyIds) {
        this.propertyIds = propertyIds;
        this.frames = Utils.newFloatArray(frameCount * this.getFrameEntries());
    }
    getPropertyIds() {
        return this.propertyIds;
    }
    getFrameEntries() {
        return 1;
    }
    getFrameCount() {
        return this.frames.length / this.getFrameEntries();
    }
    getDuration() {
        return this.frames[this.frames.length - this.getFrameEntries()];
    }
    static search1(frames, time) {
        let n = frames.length;
        for (let i = 1; i < n; i++)
            if (frames[i] > time)
                return i - 1;
        return n - 1;
    }
    static search(frames, time, step) {
        let n = frames.length;
        for (let i = step; i < n; i += step)
            if (frames[i] > time)
                return i - step;
        return n - step;
    }
}
/** The base class for timelines that use interpolation between key frame values. */
class CurveTimeline extends Timeline {
    curves; // type, x, y, ...
    constructor(frameCount, bezierCount, propertyIds) {
        super(frameCount, propertyIds);
        this.curves = Utils.newFloatArray(frameCount + bezierCount * 18 /*BEZIER_SIZE*/);
        this.curves[frameCount - 1] = 1 /*STEPPED*/;
    }
    /** Sets the specified key frame to linear interpolation. */
    setLinear(frame) {
        this.curves[frame] = 0 /*LINEAR*/;
    }
    /** Sets the specified key frame to stepped interpolation. */
    setStepped(frame) {
        this.curves[frame] = 1 /*STEPPED*/;
    }
    /** Shrinks the storage for Bezier curves, for use when <code>bezierCount</code> (specified in the constructor) was larger
     * than the actual number of Bezier curves. */
    shrink(bezierCount) {
        let size = this.getFrameCount() + bezierCount * 18 /*BEZIER_SIZE*/;
        if (this.curves.length > size) {
            let newCurves = Utils.newFloatArray(size);
            Utils.arrayCopy(this.curves, 0, newCurves, 0, size);
            this.curves = newCurves;
        }
    }
    /** Stores the segments for the specified Bezier curve. For timelines that modify multiple values, there may be more than
     * one curve per frame.
     * @param bezier The ordinal of this Bezier curve for this timeline, between 0 and <code>bezierCount - 1</code> (specified
     *           in the constructor), inclusive.
     * @param frame Between 0 and <code>frameCount - 1</code>, inclusive.
     * @param value The index of the value for this frame that this curve is used for.
     * @param time1 The time for the first key.
     * @param value1 The value for the first key.
     * @param cx1 The time for the first Bezier handle.
     * @param cy1 The value for the first Bezier handle.
     * @param cx2 The time of the second Bezier handle.
     * @param cy2 The value for the second Bezier handle.
     * @param time2 The time for the second key.
     * @param value2 The value for the second key. */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
        let curves = this.curves;
        let i = this.getFrameCount() + bezier * 18 /*BEZIER_SIZE*/;
        if (value == 0)
            curves[frame] = 2 /*BEZIER*/ + i;
        let tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = (value1 - cy1 * 2 + cy2) * 0.03;
        let dddx = ((cx1 - cx2) * 3 - time1 + time2) * 0.006, dddy = ((cy1 - cy2) * 3 - value1 + value2) * 0.006;
        let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
        let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = (cy1 - value1) * 0.3 + tmpy + dddy * 0.16666667;
        let x = time1 + dx, y = value1 + dy;
        for (let n = i + 18 /*BEZIER_SIZE*/; i < n; i += 2) {
            curves[i] = x;
            curves[i + 1] = y;
            dx += ddx;
            dy += ddy;
            ddx += dddx;
            ddy += dddy;
            x += dx;
            y += dy;
        }
    }
    /** Returns the Bezier interpolated value for the specified time.
     * @param frameIndex The index into {@link #getFrames()} for the values of the frame before <code>time</code>.
     * @param valueOffset The offset from <code>frameIndex</code> to the value this curve is used for.
     * @param i The index of the Bezier segments. See {@link #getCurveType(int)}. */
    getBezierValue(time, frameIndex, valueOffset, i) {
        let curves = this.curves;
        if (curves[i] > time) {
            let x = this.frames[frameIndex], y = this.frames[frameIndex + valueOffset];
            return y + (time - x) / (curves[i] - x) * (curves[i + 1] - y);
        }
        let n = i + 18 /*BEZIER_SIZE*/;
        for (i += 2; i < n; i += 2) {
            if (curves[i] >= time) {
                let x = curves[i - 2], y = curves[i - 1];
                return y + (time - x) / (curves[i] - x) * (curves[i + 1] - y);
            }
        }
        frameIndex += this.getFrameEntries();
        let x = curves[n - 2], y = curves[n - 1];
        return y + (time - x) / (this.frames[frameIndex] - x) * (this.frames[frameIndex + valueOffset] - y);
    }
}
class CurveTimeline1 extends CurveTimeline {
    constructor(frameCount, bezierCount, propertyId) {
        super(frameCount, bezierCount, [propertyId]);
    }
    getFrameEntries() {
        return 2 /*ENTRIES*/;
    }
    /** Sets the time and value for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value) {
        frame <<= 1;
        this.frames[frame] = time;
        this.frames[frame + 1 /*VALUE*/] = value;
    }
    /** Returns the interpolated value for the specified time. */
    getCurveValue(time) {
        let frames = this.frames;
        let i = frames.length - 2;
        for (let ii = 2; ii <= i; ii += 2) {
            if (frames[ii] > time) {
                i = ii - 2;
                break;
            }
        }
        let curveType = this.curves[i >> 1];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i], value = frames[i + 1 /*VALUE*/];
                return value + (time - before) / (frames[i + 2 /*ENTRIES*/] - before) * (frames[i + 2 /*ENTRIES*/ + 1 /*VALUE*/] - value);
            case 1 /*STEPPED*/:
                return frames[i + 1 /*VALUE*/];
        }
        return this.getBezierValue(time, i, 1 /*VALUE*/, curveType - 2 /*BEZIER*/);
    }
    getRelativeValue(time, alpha, blend, current, setup) {
        if (time < this.frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        let value = this.getCurveValue(time);
        switch (blend) {
            case MixBlend.setup:
                return setup + value * alpha;
            case MixBlend.first:
            case MixBlend.replace:
                value += setup - current;
        }
        return current + value * alpha;
    }
    getAbsoluteValue(time, alpha, blend, current, setup) {
        if (time < this.frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        let value = this.getCurveValue(time);
        if (blend == MixBlend.setup)
            return setup + (value - setup) * alpha;
        return current + (value - current) * alpha;
    }
    getAbsoluteValue2(time, alpha, blend, current, setup, value) {
        if (time < this.frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        if (blend == MixBlend.setup)
            return setup + (value - setup) * alpha;
        return current + (value - current) * alpha;
    }
    getScaleValue(time, alpha, blend, direction, current, setup) {
        const frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    return setup;
                case MixBlend.first:
                    return current + (setup - current) * alpha;
            }
            return current;
        }
        let value = this.getCurveValue(time) * setup;
        if (alpha == 1) {
            if (blend == MixBlend.add)
                return current + value - setup;
            return value;
        }
        // Mixing out uses sign of setup or current pose, else use sign of key.
        if (direction == MixDirection.mixOut) {
            switch (blend) {
                case MixBlend.setup:
                    return setup + (Math.abs(value) * MathUtils.signum(setup) - setup) * alpha;
                case MixBlend.first:
                case MixBlend.replace:
                    return current + (Math.abs(value) * MathUtils.signum(current) - current) * alpha;
            }
        }
        else {
            let s = 0;
            switch (blend) {
                case MixBlend.setup:
                    s = Math.abs(setup) * MathUtils.signum(value);
                    return s + (value - s) * alpha;
                case MixBlend.first:
                case MixBlend.replace:
                    s = Math.abs(current) * MathUtils.signum(value);
                    return s + (value - s) * alpha;
            }
        }
        return current + (value - setup) * alpha;
    }
}
/** The base class for a {@link CurveTimeline} which sets two properties. */
class CurveTimeline2 extends CurveTimeline {
    /** @param bezierCount The maximum number of Bezier curves. See {@link #shrink(int)}.
     * @param propertyIds Unique identifiers for the properties the timeline modifies. */
    constructor(frameCount, bezierCount, propertyId1, propertyId2) {
        super(frameCount, bezierCount, [propertyId1, propertyId2]);
    }
    getFrameEntries() {
        return 3 /*ENTRIES*/;
    }
    /** Sets the time and values for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value1, value2) {
        frame *= 3 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*VALUE1*/] = value1;
        this.frames[frame + 2 /*VALUE2*/] = value2;
    }
}
/** Changes a bone's local {@link Bone#rotation}. */
class RotateTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.rotate + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.rotation = this.getRelativeValue(time, alpha, blend, bone.rotation, bone.data.rotation);
    }
}
/** Changes a bone's local {@link Bone#x} and {@link Bone#y}. */
class TranslateTimeline extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.x + "|" + boneIndex, Property.y + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.x = bone.data.x;
                    bone.y = bone.data.y;
                    return;
                case MixBlend.first:
                    bone.x += (bone.data.x - bone.x) * alpha;
                    bone.y += (bone.data.y - bone.y) * alpha;
            }
            return;
        }
        let x = 0, y = 0;
        let i = Timeline.search(frames, time, 3 /*ENTRIES*/);
        let curveType = this.curves[i / 3 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                let t = (time - before) / (frames[i + 3 /*ENTRIES*/] - before);
                x += (frames[i + 3 /*ENTRIES*/ + 1 /*VALUE1*/] - x) * t;
                y += (frames[i + 3 /*ENTRIES*/ + 2 /*VALUE2*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                break;
            default:
                x = this.getBezierValue(time, i, 1 /*VALUE1*/, curveType - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 2 /*VALUE2*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        switch (blend) {
            case MixBlend.setup:
                bone.x = bone.data.x + x * alpha;
                bone.y = bone.data.y + y * alpha;
                break;
            case MixBlend.first:
            case MixBlend.replace:
                bone.x += (bone.data.x + x - bone.x) * alpha;
                bone.y += (bone.data.y + y - bone.y) * alpha;
                break;
            case MixBlend.add:
                bone.x += x * alpha;
                bone.y += y * alpha;
        }
    }
}
/** Changes a bone's local {@link Bone#x}. */
class TranslateXTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.x + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.x = this.getRelativeValue(time, alpha, blend, bone.x, bone.data.x);
    }
}
/** Changes a bone's local {@link Bone#x}. */
class TranslateYTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.y + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.y = this.getRelativeValue(time, alpha, blend, bone.y, bone.data.y);
    }
}
/** Changes a bone's local {@link Bone#scaleX)} and {@link Bone#scaleY}. */
class ScaleTimeline extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.scaleX + "|" + boneIndex, Property.scaleY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.scaleX = bone.data.scaleX;
                    bone.scaleY = bone.data.scaleY;
                    return;
                case MixBlend.first:
                    bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
                    bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
            }
            return;
        }
        let x, y;
        let i = Timeline.search(frames, time, 3 /*ENTRIES*/);
        let curveType = this.curves[i / 3 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                let t = (time - before) / (frames[i + 3 /*ENTRIES*/] - before);
                x += (frames[i + 3 /*ENTRIES*/ + 1 /*VALUE1*/] - x) * t;
                y += (frames[i + 3 /*ENTRIES*/ + 2 /*VALUE2*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                break;
            default:
                x = this.getBezierValue(time, i, 1 /*VALUE1*/, curveType - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 2 /*VALUE2*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        x *= bone.data.scaleX;
        y *= bone.data.scaleY;
        if (alpha == 1) {
            if (blend == MixBlend.add) {
                bone.scaleX += x - bone.data.scaleX;
                bone.scaleY += y - bone.data.scaleY;
            }
            else {
                bone.scaleX = x;
                bone.scaleY = y;
            }
        }
        else {
            let bx = 0, by = 0;
            if (direction == MixDirection.mixOut) {
                switch (blend) {
                    case MixBlend.setup:
                        bx = bone.data.scaleX;
                        by = bone.data.scaleY;
                        bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
                        bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        bx = bone.scaleX;
                        by = bone.scaleY;
                        bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
                        bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
                        break;
                    case MixBlend.add:
                        bone.scaleX += (x - bone.data.scaleX) * alpha;
                        bone.scaleY += (y - bone.data.scaleY) * alpha;
                }
            }
            else {
                switch (blend) {
                    case MixBlend.setup:
                        bx = Math.abs(bone.data.scaleX) * MathUtils.signum(x);
                        by = Math.abs(bone.data.scaleY) * MathUtils.signum(y);
                        bone.scaleX = bx + (x - bx) * alpha;
                        bone.scaleY = by + (y - by) * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        bx = Math.abs(bone.scaleX) * MathUtils.signum(x);
                        by = Math.abs(bone.scaleY) * MathUtils.signum(y);
                        bone.scaleX = bx + (x - bx) * alpha;
                        bone.scaleY = by + (y - by) * alpha;
                        break;
                    case MixBlend.add:
                        bone.scaleX += (x - bone.data.scaleX) * alpha;
                        bone.scaleY += (y - bone.data.scaleY) * alpha;
                }
            }
        }
    }
}
/** Changes a bone's local {@link Bone#scaleX)} and {@link Bone#scaleY}. */
class ScaleXTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.scaleX + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.scaleX = this.getScaleValue(time, alpha, blend, direction, bone.scaleX, bone.data.scaleX);
    }
}
/** Changes a bone's local {@link Bone#scaleX)} and {@link Bone#scaleY}. */
class ScaleYTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.scaleY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.scaleY = this.getScaleValue(time, alpha, blend, direction, bone.scaleY, bone.data.scaleY);
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class ShearTimeline extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.shearX + "|" + boneIndex, Property.shearY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.shearX = bone.data.shearX;
                    bone.shearY = bone.data.shearY;
                    return;
                case MixBlend.first:
                    bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
                    bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
            }
            return;
        }
        let x = 0, y = 0;
        let i = Timeline.search(frames, time, 3 /*ENTRIES*/);
        let curveType = this.curves[i / 3 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                let t = (time - before) / (frames[i + 3 /*ENTRIES*/] - before);
                x += (frames[i + 3 /*ENTRIES*/ + 1 /*VALUE1*/] - x) * t;
                y += (frames[i + 3 /*ENTRIES*/ + 2 /*VALUE2*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                x = frames[i + 1 /*VALUE1*/];
                y = frames[i + 2 /*VALUE2*/];
                break;
            default:
                x = this.getBezierValue(time, i, 1 /*VALUE1*/, curveType - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 2 /*VALUE2*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        switch (blend) {
            case MixBlend.setup:
                bone.shearX = bone.data.shearX + x * alpha;
                bone.shearY = bone.data.shearY + y * alpha;
                break;
            case MixBlend.first:
            case MixBlend.replace:
                bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
                bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
                break;
            case MixBlend.add:
                bone.shearX += x * alpha;
                bone.shearY += y * alpha;
        }
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class ShearXTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.shearX + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.shearX = this.getRelativeValue(time, alpha, blend, bone.shearX, bone.data.shearX);
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class ShearYTimeline extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
        super(frameCount, bezierCount, Property.shearY + "|" + boneIndex);
        this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (bone.active)
            bone.shearY = this.getRelativeValue(time, alpha, blend, bone.shearY, bone.data.shearY);
    }
}
class InheritTimeline extends Timeline {
    boneIndex = 0;
    constructor(frameCount, boneIndex) {
        super(frameCount, [Property.inherit + "|" + boneIndex]);
        this.boneIndex = boneIndex;
    }
    getFrameEntries() {
        return 2 /*ENTRIES*/;
    }
    /** Sets the transform mode for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, inherit) {
        frame *= 2 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*INHERIT*/] = inherit;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let bone = skeleton.bones[this.boneIndex];
        if (!bone.active)
            return;
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                bone.inherit = bone.data.inherit;
            return;
        }
        let frames = this.frames;
        if (time < frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                bone.inherit = bone.data.inherit;
            return;
        }
        bone.inherit = this.frames[Timeline.search(frames, time, 2 /*ENTRIES*/) + 1 /*INHERIT*/];
    }
}
/** Changes a slot's {@link Slot#color}. */
class RGBATimeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex,
            Property.alpha + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 5 /*ENTRIES*/;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b, a) {
        frame *= 5 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
        this.frames[frame + 4 /*A*/] = a;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let color = slot.color;
        if (time < frames[0]) {
            let setup = slot.data.color;
            switch (blend) {
                case MixBlend.setup:
                    color.setFromColor(setup);
                    return;
                case MixBlend.first:
                    color.add((setup.r - color.r) * alpha, (setup.g - color.g) * alpha, (setup.b - color.b) * alpha, (setup.a - color.a) * alpha);
            }
            return;
        }
        let r = 0, g = 0, b = 0, a = 0;
        let i = Timeline.search(frames, time, 5 /*ENTRIES*/);
        let curveType = this.curves[i / 5 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                let t = (time - before) / (frames[i + 5 /*ENTRIES*/] - before);
                r += (frames[i + 5 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 5 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 5 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                a += (frames[i + 5 /*ENTRIES*/ + 4 /*A*/] - a) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                a = this.getBezierValue(time, i, 4 /*A*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
        }
        if (alpha == 1)
            color.set(r, g, b, a);
        else {
            if (blend == MixBlend.setup)
                color.setFromColor(slot.data.color);
            color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
        }
    }
}
/** Changes a slot's {@link Slot#color}. */
class RGBTimeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 4 /*ENTRIES*/;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b) {
        frame <<= 2;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let color = slot.color;
        if (time < frames[0]) {
            let setup = slot.data.color;
            switch (blend) {
                case MixBlend.setup:
                    color.r = setup.r;
                    color.g = setup.g;
                    color.b = setup.b;
                    return;
                case MixBlend.first:
                    color.r += (setup.r - color.r) * alpha;
                    color.g += (setup.g - color.g) * alpha;
                    color.b += (setup.b - color.b) * alpha;
            }
            return;
        }
        let r = 0, g = 0, b = 0;
        let i = Timeline.search(frames, time, 4 /*ENTRIES*/);
        let curveType = this.curves[i >> 2];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                let t = (time - before) / (frames[i + 4 /*ENTRIES*/] - before);
                r += (frames[i + 4 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 4 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 4 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
        }
        if (alpha == 1) {
            color.r = r;
            color.g = g;
            color.b = b;
        }
        else {
            if (blend == MixBlend.setup) {
                let setup = slot.data.color;
                color.r = setup.r;
                color.g = setup.g;
                color.b = setup.b;
            }
            color.r += (r - color.r) * alpha;
            color.g += (g - color.g) * alpha;
            color.b += (b - color.b) * alpha;
        }
    }
}
/** Changes a bone's local {@link Bone#shearX} and {@link Bone#shearY}. */
class AlphaTimeline extends CurveTimeline1 {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, Property.alpha + "|" + slotIndex);
        this.slotIndex = slotIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let color = slot.color;
        if (time < this.frames[0]) {
            let setup = slot.data.color;
            switch (blend) {
                case MixBlend.setup:
                    color.a = setup.a;
                    return;
                case MixBlend.first:
                    color.a += (setup.a - color.a) * alpha;
            }
            return;
        }
        let a = this.getCurveValue(time);
        if (alpha == 1)
            color.a = a;
        else {
            if (blend == MixBlend.setup)
                color.a = slot.data.color.a;
            color.a += (a - color.a) * alpha;
        }
    }
}
/** Changes a slot's {@link Slot#color} and {@link Slot#darkColor} for two color tinting. */
class RGBA2Timeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex,
            Property.alpha + "|" + slotIndex,
            Property.rgb2 + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 8 /*ENTRIES*/;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, a, r2, g2, b2) {
        frame <<= 3;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
        this.frames[frame + 4 /*A*/] = a;
        this.frames[frame + 5 /*R2*/] = r2;
        this.frames[frame + 6 /*G2*/] = g2;
        this.frames[frame + 7 /*B2*/] = b2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let light = slot.color, dark = slot.darkColor;
        if (time < frames[0]) {
            let setupLight = slot.data.color, setupDark = slot.data.darkColor;
            switch (blend) {
                case MixBlend.setup:
                    light.setFromColor(setupLight);
                    dark.r = setupDark.r;
                    dark.g = setupDark.g;
                    dark.b = setupDark.b;
                    return;
                case MixBlend.first:
                    light.add((setupLight.r - light.r) * alpha, (setupLight.g - light.g) * alpha, (setupLight.b - light.b) * alpha, (setupLight.a - light.a) * alpha);
                    dark.r += (setupDark.r - dark.r) * alpha;
                    dark.g += (setupDark.g - dark.g) * alpha;
                    dark.b += (setupDark.b - dark.b) * alpha;
            }
            return;
        }
        let r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
        let i = Timeline.search(frames, time, 8 /*ENTRIES*/);
        let curveType = this.curves[i >> 3];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                r2 = frames[i + 5 /*R2*/];
                g2 = frames[i + 6 /*G2*/];
                b2 = frames[i + 7 /*B2*/];
                let t = (time - before) / (frames[i + 8 /*ENTRIES*/] - before);
                r += (frames[i + 8 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 8 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 8 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                a += (frames[i + 8 /*ENTRIES*/ + 4 /*A*/] - a) * t;
                r2 += (frames[i + 8 /*ENTRIES*/ + 5 /*R2*/] - r2) * t;
                g2 += (frames[i + 8 /*ENTRIES*/ + 6 /*G2*/] - g2) * t;
                b2 += (frames[i + 8 /*ENTRIES*/ + 7 /*B2*/] - b2) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                a = frames[i + 4 /*A*/];
                r2 = frames[i + 5 /*R2*/];
                g2 = frames[i + 6 /*G2*/];
                b2 = frames[i + 7 /*B2*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                a = this.getBezierValue(time, i, 4 /*A*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
                r2 = this.getBezierValue(time, i, 5 /*R2*/, curveType + 18 /*BEZIER_SIZE*/ * 4 - 2 /*BEZIER*/);
                g2 = this.getBezierValue(time, i, 6 /*G2*/, curveType + 18 /*BEZIER_SIZE*/ * 5 - 2 /*BEZIER*/);
                b2 = this.getBezierValue(time, i, 7 /*B2*/, curveType + 18 /*BEZIER_SIZE*/ * 6 - 2 /*BEZIER*/);
        }
        if (alpha == 1) {
            light.set(r, g, b, a);
            dark.r = r2;
            dark.g = g2;
            dark.b = b2;
        }
        else {
            if (blend == MixBlend.setup) {
                light.setFromColor(slot.data.color);
                let setupDark = slot.data.darkColor;
                dark.r = setupDark.r;
                dark.g = setupDark.g;
                dark.b = setupDark.b;
            }
            light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
            dark.r += (r2 - dark.r) * alpha;
            dark.g += (g2 - dark.g) * alpha;
            dark.b += (b2 - dark.b) * alpha;
        }
    }
}
/** Changes a slot's {@link Slot#color} and {@link Slot#darkColor} for two color tinting. */
class RGB2Timeline extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
        super(frameCount, bezierCount, [
            Property.rgb + "|" + slotIndex,
            Property.rgb2 + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
    }
    getFrameEntries() {
        return 7 /*ENTRIES*/;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, r2, g2, b2) {
        frame *= 7 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*R*/] = r;
        this.frames[frame + 2 /*G*/] = g;
        this.frames[frame + 3 /*B*/] = b;
        this.frames[frame + 4 /*R2*/] = r2;
        this.frames[frame + 5 /*G2*/] = g2;
        this.frames[frame + 6 /*B2*/] = b2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let frames = this.frames;
        let light = slot.color, dark = slot.darkColor;
        if (time < frames[0]) {
            let setupLight = slot.data.color, setupDark = slot.data.darkColor;
            switch (blend) {
                case MixBlend.setup:
                    light.r = setupLight.r;
                    light.g = setupLight.g;
                    light.b = setupLight.b;
                    dark.r = setupDark.r;
                    dark.g = setupDark.g;
                    dark.b = setupDark.b;
                    return;
                case MixBlend.first:
                    light.r += (setupLight.r - light.r) * alpha;
                    light.g += (setupLight.g - light.g) * alpha;
                    light.b += (setupLight.b - light.b) * alpha;
                    dark.r += (setupDark.r - dark.r) * alpha;
                    dark.g += (setupDark.g - dark.g) * alpha;
                    dark.b += (setupDark.b - dark.b) * alpha;
            }
            return;
        }
        let r = 0, g = 0, b = 0, r2 = 0, g2 = 0, b2 = 0;
        let i = Timeline.search(frames, time, 7 /*ENTRIES*/);
        let curveType = this.curves[i / 7 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                r2 = frames[i + 4 /*R2*/];
                g2 = frames[i + 5 /*G2*/];
                b2 = frames[i + 6 /*B2*/];
                let t = (time - before) / (frames[i + 7 /*ENTRIES*/] - before);
                r += (frames[i + 7 /*ENTRIES*/ + 1 /*R*/] - r) * t;
                g += (frames[i + 7 /*ENTRIES*/ + 2 /*G*/] - g) * t;
                b += (frames[i + 7 /*ENTRIES*/ + 3 /*B*/] - b) * t;
                r2 += (frames[i + 7 /*ENTRIES*/ + 4 /*R2*/] - r2) * t;
                g2 += (frames[i + 7 /*ENTRIES*/ + 5 /*G2*/] - g2) * t;
                b2 += (frames[i + 7 /*ENTRIES*/ + 6 /*B2*/] - b2) * t;
                break;
            case 1 /*STEPPED*/:
                r = frames[i + 1 /*R*/];
                g = frames[i + 2 /*G*/];
                b = frames[i + 3 /*B*/];
                r2 = frames[i + 4 /*R2*/];
                g2 = frames[i + 5 /*G2*/];
                b2 = frames[i + 6 /*B2*/];
                break;
            default:
                r = this.getBezierValue(time, i, 1 /*R*/, curveType - 2 /*BEZIER*/);
                g = this.getBezierValue(time, i, 2 /*G*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                b = this.getBezierValue(time, i, 3 /*B*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                r2 = this.getBezierValue(time, i, 4 /*R2*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
                g2 = this.getBezierValue(time, i, 5 /*G2*/, curveType + 18 /*BEZIER_SIZE*/ * 4 - 2 /*BEZIER*/);
                b2 = this.getBezierValue(time, i, 6 /*B2*/, curveType + 18 /*BEZIER_SIZE*/ * 5 - 2 /*BEZIER*/);
        }
        if (alpha == 1) {
            light.r = r;
            light.g = g;
            light.b = b;
            dark.r = r2;
            dark.g = g2;
            dark.b = b2;
        }
        else {
            if (blend == MixBlend.setup) {
                let setupLight = slot.data.color, setupDark = slot.data.darkColor;
                light.r = setupLight.r;
                light.g = setupLight.g;
                light.b = setupLight.b;
                dark.r = setupDark.r;
                dark.g = setupDark.g;
                dark.b = setupDark.b;
            }
            light.r += (r - light.r) * alpha;
            light.g += (g - light.g) * alpha;
            light.b += (b - light.b) * alpha;
            dark.r += (r2 - dark.r) * alpha;
            dark.g += (g2 - dark.g) * alpha;
            dark.b += (b2 - dark.b) * alpha;
        }
    }
}
/** Changes a slot's {@link Slot#attachment}. */
class AttachmentTimeline extends Timeline {
    slotIndex = 0;
    /** The attachment name for each key frame. May contain null values to clear the attachment. */
    attachmentNames;
    constructor(frameCount, slotIndex) {
        super(frameCount, [
            Property.attachment + "|" + slotIndex
        ]);
        this.slotIndex = slotIndex;
        this.attachmentNames = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the attachment name for the specified key frame. */
    setFrame(frame, time, attachmentName) {
        this.frames[frame] = time;
        this.attachmentNames[frame] = attachmentName;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                this.setAttachment(skeleton, slot, slot.data.attachmentName);
            return;
        }
        if (time < this.frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                this.setAttachment(skeleton, slot, slot.data.attachmentName);
            return;
        }
        this.setAttachment(skeleton, slot, this.attachmentNames[Timeline.search1(this.frames, time)]);
    }
    setAttachment(skeleton, slot, attachmentName) {
        slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
    }
}
/** Changes a slot's {@link Slot#deform} to deform a {@link VertexAttachment}. */
class DeformTimeline extends CurveTimeline {
    slotIndex = 0;
    /** The attachment that will be deformed. */
    attachment;
    /** The vertices for each key frame. */
    vertices;
    constructor(frameCount, bezierCount, slotIndex, attachment) {
        super(frameCount, bezierCount, [
            Property.deform + "|" + slotIndex + "|" + attachment.id
        ]);
        this.slotIndex = slotIndex;
        this.attachment = attachment;
        this.vertices = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the vertices for the specified key frame.
     * @param vertices Vertex positions for an unweighted VertexAttachment, or deform offsets if it has weights. */
    setFrame(frame, time, vertices) {
        this.frames[frame] = time;
        this.vertices[frame] = vertices;
    }
    /** @param value1 Ignored (0 is used for a deform timeline).
     * @param value2 Ignored (1 is used for a deform timeline). */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
        let curves = this.curves;
        let i = this.getFrameCount() + bezier * 18 /*BEZIER_SIZE*/;
        if (value == 0)
            curves[frame] = 2 /*BEZIER*/ + i;
        let tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = cy2 * 0.03 - cy1 * 0.06;
        let dddx = ((cx1 - cx2) * 3 - time1 + time2) * 0.006, dddy = (cy1 - cy2 + 0.33333333) * 0.018;
        let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
        let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = cy1 * 0.3 + tmpy + dddy * 0.16666667;
        let x = time1 + dx, y = dy;
        for (let n = i + 18 /*BEZIER_SIZE*/; i < n; i += 2) {
            curves[i] = x;
            curves[i + 1] = y;
            dx += ddx;
            dy += ddy;
            ddx += dddx;
            ddy += dddy;
            x += dx;
            y += dy;
        }
    }
    getCurvePercent(time, frame) {
        let curves = this.curves;
        let i = curves[frame];
        switch (i) {
            case 0 /*LINEAR*/:
                let x = this.frames[frame];
                return (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
            case 1 /*STEPPED*/:
                return 0;
        }
        i -= 2 /*BEZIER*/;
        if (curves[i] > time) {
            let x = this.frames[frame];
            return curves[i + 1] * (time - x) / (curves[i] - x);
        }
        let n = i + 18 /*BEZIER_SIZE*/;
        for (i += 2; i < n; i += 2) {
            if (curves[i] >= time) {
                let x = curves[i - 2], y = curves[i - 1];
                return y + (time - x) / (curves[i] - x) * (curves[i + 1] - y);
            }
        }
        let x = curves[n - 2], y = curves[n - 1];
        return y + (1 - y) * (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let slotAttachment = slot.getAttachment();
        if (!slotAttachment)
            return;
        if (!(slotAttachment instanceof VertexAttachment) || slotAttachment.timelineAttachment != this.attachment)
            return;
        let deform = slot.deform;
        if (deform.length == 0)
            blend = MixBlend.setup;
        let vertices = this.vertices;
        let vertexCount = vertices[0].length;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    deform.length = 0;
                    return;
                case MixBlend.first:
                    if (alpha == 1) {
                        deform.length = 0;
                        return;
                    }
                    deform.length = vertexCount;
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions.
                        let setupVertices = vertexAttachment.vertices;
                        for (var i = 0; i < vertexCount; i++)
                            deform[i] += (setupVertices[i] - deform[i]) * alpha;
                    }
                    else {
                        // Weighted deform offsets.
                        alpha = 1 - alpha;
                        for (var i = 0; i < vertexCount; i++)
                            deform[i] *= alpha;
                    }
            }
            return;
        }
        deform.length = vertexCount;
        if (time >= frames[frames.length - 1]) {
            let lastVertices = vertices[frames.length - 1];
            if (alpha == 1) {
                if (blend == MixBlend.add) {
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions, with alpha.
                        let setupVertices = vertexAttachment.vertices;
                        for (let i = 0; i < vertexCount; i++)
                            deform[i] += lastVertices[i] - setupVertices[i];
                    }
                    else {
                        // Weighted deform offsets, with alpha.
                        for (let i = 0; i < vertexCount; i++)
                            deform[i] += lastVertices[i];
                    }
                }
                else
                    Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
            }
            else {
                switch (blend) {
                    case MixBlend.setup: {
                        let vertexAttachment = slotAttachment;
                        if (!vertexAttachment.bones) {
                            // Unweighted vertex positions, with alpha.
                            let setupVertices = vertexAttachment.vertices;
                            for (let i = 0; i < vertexCount; i++) {
                                let setup = setupVertices[i];
                                deform[i] = setup + (lastVertices[i] - setup) * alpha;
                            }
                        }
                        else {
                            // Weighted deform offsets, with alpha.
                            for (let i = 0; i < vertexCount; i++)
                                deform[i] = lastVertices[i] * alpha;
                        }
                        break;
                    }
                    case MixBlend.first:
                    case MixBlend.replace:
                        for (let i = 0; i < vertexCount; i++)
                            deform[i] += (lastVertices[i] - deform[i]) * alpha;
                        break;
                    case MixBlend.add:
                        let vertexAttachment = slotAttachment;
                        if (!vertexAttachment.bones) {
                            // Unweighted vertex positions, with alpha.
                            let setupVertices = vertexAttachment.vertices;
                            for (let i = 0; i < vertexCount; i++)
                                deform[i] += (lastVertices[i] - setupVertices[i]) * alpha;
                        }
                        else {
                            // Weighted deform offsets, with alpha.
                            for (let i = 0; i < vertexCount; i++)
                                deform[i] += lastVertices[i] * alpha;
                        }
                }
            }
            return;
        }
        // Interpolate between the previous frame and the current frame.
        let frame = Timeline.search1(frames, time);
        let percent = this.getCurvePercent(time, frame);
        let prevVertices = vertices[frame];
        let nextVertices = vertices[frame + 1];
        if (alpha == 1) {
            if (blend == MixBlend.add) {
                let vertexAttachment = slotAttachment;
                if (!vertexAttachment.bones) {
                    // Unweighted vertex positions, with alpha.
                    let setupVertices = vertexAttachment.vertices;
                    for (let i = 0; i < vertexCount; i++) {
                        let prev = prevVertices[i];
                        deform[i] += prev + (nextVertices[i] - prev) * percent - setupVertices[i];
                    }
                }
                else {
                    // Weighted deform offsets, with alpha.
                    for (let i = 0; i < vertexCount; i++) {
                        let prev = prevVertices[i];
                        deform[i] += prev + (nextVertices[i] - prev) * percent;
                    }
                }
            }
            else {
                for (let i = 0; i < vertexCount; i++) {
                    let prev = prevVertices[i];
                    deform[i] = prev + (nextVertices[i] - prev) * percent;
                }
            }
        }
        else {
            switch (blend) {
                case MixBlend.setup: {
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions, with alpha.
                        let setupVertices = vertexAttachment.vertices;
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i], setup = setupVertices[i];
                            deform[i] = setup + (prev + (nextVertices[i] - prev) * percent - setup) * alpha;
                        }
                    }
                    else {
                        // Weighted deform offsets, with alpha.
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i];
                            deform[i] = (prev + (nextVertices[i] - prev) * percent) * alpha;
                        }
                    }
                    break;
                }
                case MixBlend.first:
                case MixBlend.replace:
                    for (let i = 0; i < vertexCount; i++) {
                        let prev = prevVertices[i];
                        deform[i] += (prev + (nextVertices[i] - prev) * percent - deform[i]) * alpha;
                    }
                    break;
                case MixBlend.add:
                    let vertexAttachment = slotAttachment;
                    if (!vertexAttachment.bones) {
                        // Unweighted vertex positions, with alpha.
                        let setupVertices = vertexAttachment.vertices;
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i];
                            deform[i] += (prev + (nextVertices[i] - prev) * percent - setupVertices[i]) * alpha;
                        }
                    }
                    else {
                        // Weighted deform offsets, with alpha.
                        for (let i = 0; i < vertexCount; i++) {
                            let prev = prevVertices[i];
                            deform[i] += (prev + (nextVertices[i] - prev) * percent) * alpha;
                        }
                    }
            }
        }
    }
}
/** Fires an {@link Event} when specific animation times are reached. */
class EventTimeline extends Timeline {
    static propertyIds = ["" + Property.event];
    /** The event for each key frame. */
    events;
    constructor(frameCount) {
        super(frameCount, EventTimeline.propertyIds);
        this.events = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the event for the specified key frame. */
    setFrame(frame, event) {
        this.frames[frame] = event.time;
        this.events[frame] = event;
    }
    /** Fires events for frames > `lastTime` and <= `time`. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        if (!firedEvents)
            return;
        let frames = this.frames;
        let frameCount = this.frames.length;
        if (lastTime > time) { // Apply after lastTime for looped animations.
            this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
            lastTime = -1;
        }
        else if (lastTime >= frames[frameCount - 1]) // Last time is after last frame.
            return;
        if (time < frames[0])
            return;
        let i = 0;
        if (lastTime < frames[0])
            i = 0;
        else {
            i = Timeline.search1(frames, lastTime) + 1;
            let frameTime = frames[i];
            while (i > 0) { // Fire multiple events with the same frame.
                if (frames[i - 1] != frameTime)
                    break;
                i--;
            }
        }
        for (; i < frameCount && time >= frames[i]; i++)
            firedEvents.push(this.events[i]);
    }
}
/** Changes a skeleton's {@link Skeleton#drawOrder}. */
class DrawOrderTimeline extends Timeline {
    static propertyIds = ["" + Property.drawOrder];
    /** The draw order for each key frame. See {@link #setFrame(int, float, int[])}. */
    drawOrders;
    constructor(frameCount) {
        super(frameCount, DrawOrderTimeline.propertyIds);
        this.drawOrders = new Array(frameCount);
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time in seconds and the draw order for the specified key frame.
     * @param drawOrder For each slot in {@link Skeleton#slots}, the index of the new draw order. May be null to use setup pose
     *           draw order. */
    setFrame(frame, time, drawOrder) {
        this.frames[frame] = time;
        this.drawOrders[frame] = drawOrder;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
            return;
        }
        if (time < this.frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
            return;
        }
        let idx = Timeline.search1(this.frames, time);
        let drawOrderToSetupIndex = this.drawOrders[idx];
        if (!drawOrderToSetupIndex)
            Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        else {
            let drawOrder = skeleton.drawOrder;
            let slots = skeleton.slots;
            for (let i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
                drawOrder[i] = slots[drawOrderToSetupIndex[i]];
        }
    }
}
/** Changes an IK constraint's {@link IkConstraint#mix}, {@link IkConstraint#softness},
 * {@link IkConstraint#bendDirection}, {@link IkConstraint#stretch}, and {@link IkConstraint#compress}. */
class IkConstraintTimeline extends CurveTimeline {
    /** The index of the IK constraint in {@link Skeleton#getIkConstraints()} that will be changed when this timeline is applied */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, ikConstraintIndex) {
        super(frameCount, bezierCount, [
            Property.ikConstraint + "|" + ikConstraintIndex
        ]);
        this.constraintIndex = ikConstraintIndex;
    }
    getFrameEntries() {
        return 6 /*ENTRIES*/;
    }
    /** Sets the time in seconds, mix, softness, bend direction, compress, and stretch for the specified key frame. */
    setFrame(frame, time, mix, softness, bendDirection, compress, stretch) {
        frame *= 6 /*ENTRIES*/;
        this.frames[frame] = time;
        this.frames[frame + 1 /*MIX*/] = mix;
        this.frames[frame + 2 /*SOFTNESS*/] = softness;
        this.frames[frame + 3 /*BEND_DIRECTION*/] = bendDirection;
        this.frames[frame + 4 /*COMPRESS*/] = compress ? 1 : 0;
        this.frames[frame + 5 /*STRETCH*/] = stretch ? 1 : 0;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.ikConstraints[this.constraintIndex];
        if (!constraint.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    constraint.mix = constraint.data.mix;
                    constraint.softness = constraint.data.softness;
                    constraint.bendDirection = constraint.data.bendDirection;
                    constraint.compress = constraint.data.compress;
                    constraint.stretch = constraint.data.stretch;
                    return;
                case MixBlend.first:
                    constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
                    constraint.softness += (constraint.data.softness - constraint.softness) * alpha;
                    constraint.bendDirection = constraint.data.bendDirection;
                    constraint.compress = constraint.data.compress;
                    constraint.stretch = constraint.data.stretch;
            }
            return;
        }
        let mix = 0, softness = 0;
        let i = Timeline.search(frames, time, 6 /*ENTRIES*/);
        let curveType = this.curves[i / 6 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                mix = frames[i + 1 /*MIX*/];
                softness = frames[i + 2 /*SOFTNESS*/];
                let t = (time - before) / (frames[i + 6 /*ENTRIES*/] - before);
                mix += (frames[i + 6 /*ENTRIES*/ + 1 /*MIX*/] - mix) * t;
                softness += (frames[i + 6 /*ENTRIES*/ + 2 /*SOFTNESS*/] - softness) * t;
                break;
            case 1 /*STEPPED*/:
                mix = frames[i + 1 /*MIX*/];
                softness = frames[i + 2 /*SOFTNESS*/];
                break;
            default:
                mix = this.getBezierValue(time, i, 1 /*MIX*/, curveType - 2 /*BEZIER*/);
                softness = this.getBezierValue(time, i, 2 /*SOFTNESS*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
        }
        if (blend == MixBlend.setup) {
            constraint.mix = constraint.data.mix + (mix - constraint.data.mix) * alpha;
            constraint.softness = constraint.data.softness + (softness - constraint.data.softness) * alpha;
            if (direction == MixDirection.mixOut) {
                constraint.bendDirection = constraint.data.bendDirection;
                constraint.compress = constraint.data.compress;
                constraint.stretch = constraint.data.stretch;
            }
            else {
                constraint.bendDirection = frames[i + 3 /*BEND_DIRECTION*/];
                constraint.compress = frames[i + 4 /*COMPRESS*/] != 0;
                constraint.stretch = frames[i + 5 /*STRETCH*/] != 0;
            }
        }
        else {
            constraint.mix += (mix - constraint.mix) * alpha;
            constraint.softness += (softness - constraint.softness) * alpha;
            if (direction == MixDirection.mixIn) {
                constraint.bendDirection = frames[i + 3 /*BEND_DIRECTION*/];
                constraint.compress = frames[i + 4 /*COMPRESS*/] != 0;
                constraint.stretch = frames[i + 5 /*STRETCH*/] != 0;
            }
        }
    }
}
/** Changes a transform constraint's {@link TransformConstraint#rotateMix}, {@link TransformConstraint#translateMix},
 * {@link TransformConstraint#scaleMix}, and {@link TransformConstraint#shearMix}. */
class TransformConstraintTimeline extends CurveTimeline {
    /** The index of the transform constraint slot in {@link Skeleton#transformConstraints} that will be changed. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, transformConstraintIndex) {
        super(frameCount, bezierCount, [
            Property.transformConstraint + "|" + transformConstraintIndex
        ]);
        this.constraintIndex = transformConstraintIndex;
    }
    getFrameEntries() {
        return 7 /*ENTRIES*/;
    }
    /** The time in seconds, rotate mix, translate mix, scale mix, and shear mix for the specified key frame. */
    setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY) {
        let frames = this.frames;
        frame *= 7 /*ENTRIES*/;
        frames[frame] = time;
        frames[frame + 1 /*ROTATE*/] = mixRotate;
        frames[frame + 2 /*X*/] = mixX;
        frames[frame + 3 /*Y*/] = mixY;
        frames[frame + 4 /*SCALEX*/] = mixScaleX;
        frames[frame + 5 /*SCALEY*/] = mixScaleY;
        frames[frame + 6 /*SHEARY*/] = mixShearY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.transformConstraints[this.constraintIndex];
        if (!constraint.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            let data = constraint.data;
            switch (blend) {
                case MixBlend.setup:
                    constraint.mixRotate = data.mixRotate;
                    constraint.mixX = data.mixX;
                    constraint.mixY = data.mixY;
                    constraint.mixScaleX = data.mixScaleX;
                    constraint.mixScaleY = data.mixScaleY;
                    constraint.mixShearY = data.mixShearY;
                    return;
                case MixBlend.first:
                    constraint.mixRotate += (data.mixRotate - constraint.mixRotate) * alpha;
                    constraint.mixX += (data.mixX - constraint.mixX) * alpha;
                    constraint.mixY += (data.mixY - constraint.mixY) * alpha;
                    constraint.mixScaleX += (data.mixScaleX - constraint.mixScaleX) * alpha;
                    constraint.mixScaleY += (data.mixScaleY - constraint.mixScaleY) * alpha;
                    constraint.mixShearY += (data.mixShearY - constraint.mixShearY) * alpha;
            }
            return;
        }
        let rotate, x, y, scaleX, scaleY, shearY;
        let i = Timeline.search(frames, time, 7 /*ENTRIES*/);
        let curveType = this.curves[i / 7 /*ENTRIES*/];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                scaleX = frames[i + 4 /*SCALEX*/];
                scaleY = frames[i + 5 /*SCALEY*/];
                shearY = frames[i + 6 /*SHEARY*/];
                let t = (time - before) / (frames[i + 7 /*ENTRIES*/] - before);
                rotate += (frames[i + 7 /*ENTRIES*/ + 1 /*ROTATE*/] - rotate) * t;
                x += (frames[i + 7 /*ENTRIES*/ + 2 /*X*/] - x) * t;
                y += (frames[i + 7 /*ENTRIES*/ + 3 /*Y*/] - y) * t;
                scaleX += (frames[i + 7 /*ENTRIES*/ + 4 /*SCALEX*/] - scaleX) * t;
                scaleY += (frames[i + 7 /*ENTRIES*/ + 5 /*SCALEY*/] - scaleY) * t;
                shearY += (frames[i + 7 /*ENTRIES*/ + 6 /*SHEARY*/] - shearY) * t;
                break;
            case 1 /*STEPPED*/:
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                scaleX = frames[i + 4 /*SCALEX*/];
                scaleY = frames[i + 5 /*SCALEY*/];
                shearY = frames[i + 6 /*SHEARY*/];
                break;
            default:
                rotate = this.getBezierValue(time, i, 1 /*ROTATE*/, curveType - 2 /*BEZIER*/);
                x = this.getBezierValue(time, i, 2 /*X*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 3 /*Y*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
                scaleX = this.getBezierValue(time, i, 4 /*SCALEX*/, curveType + 18 /*BEZIER_SIZE*/ * 3 - 2 /*BEZIER*/);
                scaleY = this.getBezierValue(time, i, 5 /*SCALEY*/, curveType + 18 /*BEZIER_SIZE*/ * 4 - 2 /*BEZIER*/);
                shearY = this.getBezierValue(time, i, 6 /*SHEARY*/, curveType + 18 /*BEZIER_SIZE*/ * 5 - 2 /*BEZIER*/);
        }
        if (blend == MixBlend.setup) {
            let data = constraint.data;
            constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
            constraint.mixX = data.mixX + (x - data.mixX) * alpha;
            constraint.mixY = data.mixY + (y - data.mixY) * alpha;
            constraint.mixScaleX = data.mixScaleX + (scaleX - data.mixScaleX) * alpha;
            constraint.mixScaleY = data.mixScaleY + (scaleY - data.mixScaleY) * alpha;
            constraint.mixShearY = data.mixShearY + (shearY - data.mixShearY) * alpha;
        }
        else {
            constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
            constraint.mixX += (x - constraint.mixX) * alpha;
            constraint.mixY += (y - constraint.mixY) * alpha;
            constraint.mixScaleX += (scaleX - constraint.mixScaleX) * alpha;
            constraint.mixScaleY += (scaleY - constraint.mixScaleY) * alpha;
            constraint.mixShearY += (shearY - constraint.mixShearY) * alpha;
        }
    }
}
/** Changes a path constraint's {@link PathConstraint#position}. */
class PathConstraintPositionTimeline extends CurveTimeline1 {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
        super(frameCount, bezierCount, Property.pathConstraintPosition + "|" + pathConstraintIndex);
        this.constraintIndex = pathConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.pathConstraints[this.constraintIndex];
        if (constraint.active)
            constraint.position = this.getAbsoluteValue(time, alpha, blend, constraint.position, constraint.data.position);
    }
}
/** Changes a path constraint's {@link PathConstraint#spacing}. */
class PathConstraintSpacingTimeline extends CurveTimeline1 {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
        super(frameCount, bezierCount, Property.pathConstraintSpacing + "|" + pathConstraintIndex);
        this.constraintIndex = pathConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.pathConstraints[this.constraintIndex];
        if (constraint.active)
            constraint.spacing = this.getAbsoluteValue(time, alpha, blend, constraint.spacing, constraint.data.spacing);
    }
}
/** Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#getMixX()}, and
 * {@link PathConstraint#getMixY()}. */
class PathConstraintMixTimeline extends CurveTimeline {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
        super(frameCount, bezierCount, [
            Property.pathConstraintMix + "|" + pathConstraintIndex
        ]);
        this.constraintIndex = pathConstraintIndex;
    }
    getFrameEntries() {
        return 4 /*ENTRIES*/;
    }
    setFrame(frame, time, mixRotate, mixX, mixY) {
        let frames = this.frames;
        frame <<= 2;
        frames[frame] = time;
        frames[frame + 1 /*ROTATE*/] = mixRotate;
        frames[frame + 2 /*X*/] = mixX;
        frames[frame + 3 /*Y*/] = mixY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint = skeleton.pathConstraints[this.constraintIndex];
        if (!constraint.active)
            return;
        let frames = this.frames;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    constraint.mixRotate = constraint.data.mixRotate;
                    constraint.mixX = constraint.data.mixX;
                    constraint.mixY = constraint.data.mixY;
                    return;
                case MixBlend.first:
                    constraint.mixRotate += (constraint.data.mixRotate - constraint.mixRotate) * alpha;
                    constraint.mixX += (constraint.data.mixX - constraint.mixX) * alpha;
                    constraint.mixY += (constraint.data.mixY - constraint.mixY) * alpha;
            }
            return;
        }
        let rotate, x, y;
        let i = Timeline.search(frames, time, 4 /*ENTRIES*/);
        let curveType = this.curves[i >> 2];
        switch (curveType) {
            case 0 /*LINEAR*/:
                let before = frames[i];
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                let t = (time - before) / (frames[i + 4 /*ENTRIES*/] - before);
                rotate += (frames[i + 4 /*ENTRIES*/ + 1 /*ROTATE*/] - rotate) * t;
                x += (frames[i + 4 /*ENTRIES*/ + 2 /*X*/] - x) * t;
                y += (frames[i + 4 /*ENTRIES*/ + 3 /*Y*/] - y) * t;
                break;
            case 1 /*STEPPED*/:
                rotate = frames[i + 1 /*ROTATE*/];
                x = frames[i + 2 /*X*/];
                y = frames[i + 3 /*Y*/];
                break;
            default:
                rotate = this.getBezierValue(time, i, 1 /*ROTATE*/, curveType - 2 /*BEZIER*/);
                x = this.getBezierValue(time, i, 2 /*X*/, curveType + 18 /*BEZIER_SIZE*/ - 2 /*BEZIER*/);
                y = this.getBezierValue(time, i, 3 /*Y*/, curveType + 18 /*BEZIER_SIZE*/ * 2 - 2 /*BEZIER*/);
        }
        if (blend == MixBlend.setup) {
            let data = constraint.data;
            constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
            constraint.mixX = data.mixX + (x - data.mixX) * alpha;
            constraint.mixY = data.mixY + (y - data.mixY) * alpha;
        }
        else {
            constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
            constraint.mixX += (x - constraint.mixX) * alpha;
            constraint.mixY += (y - constraint.mixY) * alpha;
        }
    }
}
/** The base class for most {@link PhysicsConstraint} timelines. */
class PhysicsConstraintTimeline extends CurveTimeline1 {
    /** The index of the physics constraint in {@link Skeleton#getPhysicsConstraints()} that will be changed when this timeline
     * is applied, or -1 if all physics constraints in the skeleton will be changed. */
    constraintIndex = 0;
    /** @param physicsConstraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, bezierCount, physicsConstraintIndex, property) {
        super(frameCount, bezierCount, property + "|" + physicsConstraintIndex);
        this.constraintIndex = physicsConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint;
        if (this.constraintIndex == -1) {
            const value = time >= this.frames[0] ? this.getCurveValue(time) : 0;
            for (const constraint of skeleton.physicsConstraints) {
                if (constraint.active && this.global(constraint.data))
                    this.set(constraint, this.getAbsoluteValue2(time, alpha, blend, this.get(constraint), this.setup(constraint), value));
            }
        }
        else {
            constraint = skeleton.physicsConstraints[this.constraintIndex];
            if (constraint.active)
                this.set(constraint, this.getAbsoluteValue(time, alpha, blend, this.get(constraint), this.setup(constraint)));
        }
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getInertia()}. */
class PhysicsConstraintInertiaTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintInertia);
    }
    setup(constraint) {
        return constraint.data.inertia;
    }
    get(constraint) {
        return constraint.inertia;
    }
    set(constraint, value) {
        constraint.inertia = value;
    }
    global(constraint) {
        return constraint.inertiaGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getStrength()}. */
class PhysicsConstraintStrengthTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintStrength);
    }
    setup(constraint) {
        return constraint.data.strength;
    }
    get(constraint) {
        return constraint.strength;
    }
    set(constraint, value) {
        constraint.strength = value;
    }
    global(constraint) {
        return constraint.strengthGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getDamping()}. */
class PhysicsConstraintDampingTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintDamping);
    }
    setup(constraint) {
        return constraint.data.damping;
    }
    get(constraint) {
        return constraint.damping;
    }
    set(constraint, value) {
        constraint.damping = value;
    }
    global(constraint) {
        return constraint.dampingGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getMassInverse()}. The timeline values are not inverted. */
class PhysicsConstraintMassTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintMass);
    }
    setup(constraint) {
        return 1 / constraint.data.massInverse;
    }
    get(constraint) {
        return 1 / constraint.massInverse;
    }
    set(constraint, value) {
        constraint.massInverse = 1 / value;
    }
    global(constraint) {
        return constraint.massGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getWind()}. */
class PhysicsConstraintWindTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintWind);
    }
    setup(constraint) {
        return constraint.data.wind;
    }
    get(constraint) {
        return constraint.wind;
    }
    set(constraint, value) {
        constraint.wind = value;
    }
    global(constraint) {
        return constraint.windGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getGravity()}. */
class PhysicsConstraintGravityTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintGravity);
    }
    setup(constraint) {
        return constraint.data.gravity;
    }
    get(constraint) {
        return constraint.gravity;
    }
    set(constraint, value) {
        constraint.gravity = value;
    }
    global(constraint) {
        return constraint.gravityGlobal;
    }
}
/** Changes a physics constraint's {@link PhysicsConstraint#getMix()}. */
class PhysicsConstraintMixTimeline extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
        super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintMix);
    }
    setup(constraint) {
        return constraint.data.mix;
    }
    get(constraint) {
        return constraint.mix;
    }
    set(constraint, value) {
        constraint.mix = value;
    }
    global(constraint) {
        return constraint.mixGlobal;
    }
}
/** Resets a physics constraint when specific animation times are reached. */
class PhysicsConstraintResetTimeline extends Timeline {
    static propertyIds = [Property.physicsConstraintReset.toString()];
    /** The index of the physics constraint in {@link Skeleton#getPhysicsConstraints()} that will be reset when this timeline is
    * applied, or -1 if all physics constraints in the skeleton will be reset. */
    constraintIndex;
    /** @param physicsConstraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, physicsConstraintIndex) {
        super(frameCount, PhysicsConstraintResetTimeline.propertyIds);
        this.constraintIndex = physicsConstraintIndex;
    }
    getFrameCount() {
        return this.frames.length;
    }
    /** Sets the time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive. */
    setFrame(frame, time) {
        this.frames[frame] = time;
    }
    /** Resets the physics constraint when frames > <code>lastTime</code> and <= <code>time</code>. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
        let constraint;
        if (this.constraintIndex != -1) {
            constraint = skeleton.physicsConstraints[this.constraintIndex];
            if (!constraint.active)
                return;
        }
        const frames = this.frames;
        if (lastTime > time) { // Apply after lastTime for looped animations.
            this.apply(skeleton, lastTime, Number.MAX_VALUE, [], alpha, blend, direction);
            lastTime = -1;
        }
        else if (lastTime >= frames[frames.length - 1]) // Last time is after last frame.
            return;
        if (time < frames[0])
            return;
        if (lastTime < frames[0] || time >= frames[Timeline.search1(frames, lastTime) + 1]) {
            if (constraint != null)
                constraint.reset();
            else {
                for (const constraint of skeleton.physicsConstraints) {
                    if (constraint.active)
                        constraint.reset();
                }
            }
        }
    }
}
/** Changes a slot's {@link Slot#getSequenceIndex()} for an attachment's {@link Sequence}. */
class SequenceTimeline extends Timeline {
    static ENTRIES = 3;
    static MODE = 1;
    static DELAY = 2;
    slotIndex;
    attachment;
    constructor(frameCount, slotIndex, attachment) {
        super(frameCount, [
            Property.sequence + "|" + slotIndex + "|" + attachment.sequence.id
        ]);
        this.slotIndex = slotIndex;
        this.attachment = attachment;
    }
    getFrameEntries() {
        return SequenceTimeline.ENTRIES;
    }
    getSlotIndex() {
        return this.slotIndex;
    }
    getAttachment() {
        return this.attachment;
    }
    /** Sets the time, mode, index, and frame time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time Seconds between frames. */
    setFrame(frame, time, mode, index, delay) {
        let frames = this.frames;
        frame *= SequenceTimeline.ENTRIES;
        frames[frame] = time;
        frames[frame + SequenceTimeline.MODE] = mode | (index << 4);
        frames[frame + SequenceTimeline.DELAY] = delay;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
        let slot = skeleton.slots[this.slotIndex];
        if (!slot.bone.active)
            return;
        let slotAttachment = slot.attachment;
        let attachment = this.attachment;
        if (slotAttachment != attachment) {
            if (!(slotAttachment instanceof VertexAttachment)
                || slotAttachment.timelineAttachment != attachment)
                return;
        }
        if (direction == MixDirection.mixOut) {
            if (blend == MixBlend.setup)
                slot.sequenceIndex = -1;
            return;
        }
        let frames = this.frames;
        if (time < frames[0]) {
            if (blend == MixBlend.setup || blend == MixBlend.first)
                slot.sequenceIndex = -1;
            return;
        }
        let i = Timeline.search(frames, time, SequenceTimeline.ENTRIES);
        let before = frames[i];
        let modeAndIndex = frames[i + SequenceTimeline.MODE];
        let delay = frames[i + SequenceTimeline.DELAY];
        if (!this.attachment.sequence)
            return;
        let index = modeAndIndex >> 4, count = this.attachment.sequence.regions.length;
        let mode = SequenceModeValues[modeAndIndex & 0xf];
        if (mode != SequenceMode.hold) {
            index += (((time - before) / delay + 0.00001) | 0);
            switch (mode) {
                case SequenceMode.once:
                    index = Math.min(count - 1, index);
                    break;
                case SequenceMode.loop:
                    index %= count;
                    break;
                case SequenceMode.pingpong: {
                    let n = (count << 1) - 2;
                    index = n == 0 ? 0 : index % n;
                    if (index >= count)
                        index = n - index;
                    break;
                }
                case SequenceMode.onceReverse:
                    index = Math.max(count - 1 - index, 0);
                    break;
                case SequenceMode.loopReverse:
                    index = count - 1 - (index % count);
                    break;
                case SequenceMode.pingpongReverse: {
                    let n = (count << 1) - 2;
                    index = n == 0 ? 0 : (index + count - 1) % n;
                    if (index >= count)
                        index = n - index;
                }
            }
        }
        slot.sequenceIndex = index;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Applies animations over time, queues animations for later playback, mixes (crossfading) between animations, and applies
 * multiple animations on top of each other (layering).
 *
 * See [Applying Animations](http://esotericsoftware.com/spine-applying-animations/) in the Spine Runtimes Guide. */
class AnimationState {
    static _emptyAnimation = new Animation("<empty>", [], 0);
    static emptyAnimation() {
        return AnimationState._emptyAnimation;
    }
    /** The AnimationStateData to look up mix durations. */
    data;
    /** The list of tracks that currently have animations, which may contain null entries. */
    tracks = new Array();
    /** Multiplier for the delta time when the animation state is updated, causing time for all animations and mixes to play slower
     * or faster. Defaults to 1.
     *
     * See TrackEntry {@link TrackEntry#timeScale} for affecting a single animation. */
    timeScale = 1;
    unkeyedState = 0;
    events = new Array();
    listeners = new Array();
    queue = new EventQueue(this);
    propertyIDs = new StringSet();
    animationsChanged = false;
    trackEntryPool = new Pool(() => new TrackEntry());
    constructor(data) {
        this.data = data;
    }
    /** Increments each track entry {@link TrackEntry#trackTime()}, setting queued animations as current if needed. */
    update(delta) {
        delta *= this.timeScale;
        let tracks = this.tracks;
        for (let i = 0, n = tracks.length; i < n; i++) {
            let current = tracks[i];
            if (!current)
                continue;
            current.animationLast = current.nextAnimationLast;
            current.trackLast = current.nextTrackLast;
            let currentDelta = delta * current.timeScale;
            if (current.delay > 0) {
                current.delay -= currentDelta;
                if (current.delay > 0)
                    continue;
                currentDelta = -current.delay;
                current.delay = 0;
            }
            let next = current.next;
            if (next) {
                // When the next entry's delay is passed, change to the next entry, preserving leftover time.
                let nextTime = current.trackLast - next.delay;
                if (nextTime >= 0) {
                    next.delay = 0;
                    next.trackTime += current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
                    current.trackTime += currentDelta;
                    this.setCurrent(i, next, true);
                    while (next.mixingFrom) {
                        next.mixTime += delta;
                        next = next.mixingFrom;
                    }
                    continue;
                }
            }
            else if (current.trackLast >= current.trackEnd && !current.mixingFrom) {
                tracks[i] = null;
                this.queue.end(current);
                this.clearNext(current);
                continue;
            }
            if (current.mixingFrom && this.updateMixingFrom(current, delta)) {
                // End mixing from entries once all have completed.
                let from = current.mixingFrom;
                current.mixingFrom = null;
                if (from)
                    from.mixingTo = null;
                while (from) {
                    this.queue.end(from);
                    from = from.mixingFrom;
                }
            }
            current.trackTime += currentDelta;
        }
        this.queue.drain();
    }
    /** Returns true when all mixing from entries are complete. */
    updateMixingFrom(to, delta) {
        let from = to.mixingFrom;
        if (!from)
            return true;
        let finished = this.updateMixingFrom(from, delta);
        from.animationLast = from.nextAnimationLast;
        from.trackLast = from.nextTrackLast;
        if (to.nextTrackLast != -1) { // The from entry was applied at least once.
            const discard = to.mixTime == 0 && from.mixTime == 0; // Discard the from entry when neither have advanced yet.
            if (to.mixTime >= to.mixDuration || discard) {
                // Require totalAlpha == 0 to ensure mixing is complete or the transition is a single frame or discarded.
                if (from.totalAlpha == 0 || to.mixDuration == 0 || discard) {
                    to.mixingFrom = from.mixingFrom;
                    if (from.mixingFrom != null)
                        from.mixingFrom.mixingTo = to;
                    to.interruptAlpha = from.interruptAlpha;
                    this.queue.end(from);
                }
                return finished;
            }
        }
        from.trackTime += delta * from.timeScale;
        to.mixTime += delta;
        return false;
    }
    /** Poses the skeleton using the track entry animations. There are no side effects other than invoking listeners, so the
     * animation state can be applied to multiple skeletons to pose them identically.
     * @returns True if any animations were applied. */
    apply(skeleton) {
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        if (this.animationsChanged)
            this._animationsChanged();
        let events = this.events;
        let tracks = this.tracks;
        let applied = false;
        for (let i = 0, n = tracks.length; i < n; i++) {
            let current = tracks[i];
            if (!current || current.delay > 0)
                continue;
            applied = true;
            let blend = i == 0 ? MixBlend.first : current.mixBlend;
            // Apply mixing from entries first.
            let alpha = current.alpha;
            if (current.mixingFrom)
                alpha *= this.applyMixingFrom(current, skeleton, blend);
            else if (current.trackTime >= current.trackEnd && !current.next)
                alpha = 0;
            let attachments = alpha >= current.alphaAttachmentThreshold;
            // Apply current entry.
            let animationLast = current.animationLast, animationTime = current.getAnimationTime(), applyTime = animationTime;
            let applyEvents = events;
            if (current.reverse) {
                applyTime = current.animation.duration - applyTime;
                applyEvents = null;
            }
            let timelines = current.animation.timelines;
            let timelineCount = timelines.length;
            if ((i == 0 && alpha == 1) || blend == MixBlend.add) {
                if (i == 0)
                    attachments = true;
                for (let ii = 0; ii < timelineCount; ii++) {
                    var timeline = timelines[ii];
                    if (timeline instanceof AttachmentTimeline)
                        this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
                    else
                        timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, blend, MixDirection.mixIn);
                }
            }
            else {
                let timelineMode = current.timelineMode;
                let shortestRotation = current.shortestRotation;
                let firstFrame = !shortestRotation && current.timelinesRotation.length != timelineCount << 1;
                if (firstFrame)
                    current.timelinesRotation.length = timelineCount << 1;
                for (let ii = 0; ii < timelineCount; ii++) {
                    let timeline = timelines[ii];
                    let timelineBlend = timelineMode[ii] == SUBSEQUENT ? blend : MixBlend.setup;
                    if (!shortestRotation && timeline instanceof RotateTimeline) {
                        this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, current.timelinesRotation, ii << 1, firstFrame);
                    }
                    else if (timeline instanceof AttachmentTimeline) {
                        this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
                    }
                    else {
                        timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, timelineBlend, MixDirection.mixIn);
                    }
                }
            }
            this.queueEvents(current, animationTime);
            events.length = 0;
            current.nextAnimationLast = animationTime;
            current.nextTrackLast = current.trackTime;
        }
        // Set slots attachments to the setup pose, if needed. This occurs if an animation that is mixing out sets attachments so
        // subsequent timelines see any deform, but the subsequent timelines don't set an attachment (eg they are also mixing out or
        // the time is before the first key).
        var setupState = this.unkeyedState + SETUP;
        var slots = skeleton.slots;
        for (var i = 0, n = skeleton.slots.length; i < n; i++) {
            var slot = slots[i];
            if (slot.attachmentState == setupState) {
                var attachmentName = slot.data.attachmentName;
                slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
            }
        }
        this.unkeyedState += 2; // Increasing after each use avoids the need to reset attachmentState for every slot.
        this.queue.drain();
        return applied;
    }
    applyMixingFrom(to, skeleton, blend) {
        let from = to.mixingFrom;
        if (from.mixingFrom)
            this.applyMixingFrom(from, skeleton, blend);
        let mix = 0;
        if (to.mixDuration == 0) { // Single frame mix to undo mixingFrom changes.
            mix = 1;
            if (blend == MixBlend.first)
                blend = MixBlend.setup;
        }
        else {
            mix = to.mixTime / to.mixDuration;
            if (mix > 1)
                mix = 1;
            if (blend != MixBlend.first)
                blend = from.mixBlend;
        }
        let attachments = mix < from.mixAttachmentThreshold, drawOrder = mix < from.mixDrawOrderThreshold;
        let timelines = from.animation.timelines;
        let timelineCount = timelines.length;
        let alphaHold = from.alpha * to.interruptAlpha, alphaMix = alphaHold * (1 - mix);
        let animationLast = from.animationLast, animationTime = from.getAnimationTime(), applyTime = animationTime;
        let events = null;
        if (from.reverse)
            applyTime = from.animation.duration - applyTime;
        else if (mix < from.eventThreshold)
            events = this.events;
        if (blend == MixBlend.add) {
            for (let i = 0; i < timelineCount; i++)
                timelines[i].apply(skeleton, animationLast, applyTime, events, alphaMix, blend, MixDirection.mixOut);
        }
        else {
            let timelineMode = from.timelineMode;
            let timelineHoldMix = from.timelineHoldMix;
            let shortestRotation = from.shortestRotation;
            let firstFrame = !shortestRotation && from.timelinesRotation.length != timelineCount << 1;
            if (firstFrame)
                from.timelinesRotation.length = timelineCount << 1;
            from.totalAlpha = 0;
            for (let i = 0; i < timelineCount; i++) {
                let timeline = timelines[i];
                let direction = MixDirection.mixOut;
                let timelineBlend;
                let alpha = 0;
                switch (timelineMode[i]) {
                    case SUBSEQUENT:
                        if (!drawOrder && timeline instanceof DrawOrderTimeline)
                            continue;
                        timelineBlend = blend;
                        alpha = alphaMix;
                        break;
                    case FIRST:
                        timelineBlend = MixBlend.setup;
                        alpha = alphaMix;
                        break;
                    case HOLD_SUBSEQUENT:
                        timelineBlend = blend;
                        alpha = alphaHold;
                        break;
                    case HOLD_FIRST:
                        timelineBlend = MixBlend.setup;
                        alpha = alphaHold;
                        break;
                    default:
                        timelineBlend = MixBlend.setup;
                        let holdMix = timelineHoldMix[i];
                        alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
                        break;
                }
                from.totalAlpha += alpha;
                if (!shortestRotation && timeline instanceof RotateTimeline)
                    this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, from.timelinesRotation, i << 1, firstFrame);
                else if (timeline instanceof AttachmentTimeline)
                    this.applyAttachmentTimeline(timeline, skeleton, applyTime, timelineBlend, attachments && alpha >= from.alphaAttachmentThreshold);
                else {
                    if (drawOrder && timeline instanceof DrawOrderTimeline && timelineBlend == MixBlend.setup)
                        direction = MixDirection.mixIn;
                    timeline.apply(skeleton, animationLast, applyTime, events, alpha, timelineBlend, direction);
                }
            }
        }
        if (to.mixDuration > 0)
            this.queueEvents(from, animationTime);
        this.events.length = 0;
        from.nextAnimationLast = animationTime;
        from.nextTrackLast = from.trackTime;
        return mix;
    }
    applyAttachmentTimeline(timeline, skeleton, time, blend, attachments) {
        var slot = skeleton.slots[timeline.slotIndex];
        if (!slot.bone.active)
            return;
        if (time < timeline.frames[0]) { // Time is before first frame.
            if (blend == MixBlend.setup || blend == MixBlend.first)
                this.setAttachment(skeleton, slot, slot.data.attachmentName, attachments);
        }
        else
            this.setAttachment(skeleton, slot, timeline.attachmentNames[Timeline.search1(timeline.frames, time)], attachments);
        // If an attachment wasn't set (ie before the first frame or attachments is false), set the setup attachment later.
        if (slot.attachmentState <= this.unkeyedState)
            slot.attachmentState = this.unkeyedState + SETUP;
    }
    setAttachment(skeleton, slot, attachmentName, attachments) {
        slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
        if (attachments)
            slot.attachmentState = this.unkeyedState + CURRENT;
    }
    applyRotateTimeline(timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
        if (firstFrame)
            timelinesRotation[i] = 0;
        if (alpha == 1) {
            timeline.apply(skeleton, 0, time, null, 1, blend, MixDirection.mixIn);
            return;
        }
        let bone = skeleton.bones[timeline.boneIndex];
        if (!bone.active)
            return;
        let frames = timeline.frames;
        let r1 = 0, r2 = 0;
        if (time < frames[0]) {
            switch (blend) {
                case MixBlend.setup:
                    bone.rotation = bone.data.rotation;
                default:
                    return;
                case MixBlend.first:
                    r1 = bone.rotation;
                    r2 = bone.data.rotation;
            }
        }
        else {
            r1 = blend == MixBlend.setup ? bone.data.rotation : bone.rotation;
            r2 = bone.data.rotation + timeline.getCurveValue(time);
        }
        // Mix between rotations using the direction of the shortest route on the first frame while detecting crosses.
        let total = 0, diff = r2 - r1;
        diff -= Math.ceil(diff / 360 - 0.5) * 360;
        if (diff == 0) {
            total = timelinesRotation[i];
        }
        else {
            let lastTotal = 0, lastDiff = 0;
            if (firstFrame) {
                lastTotal = 0;
                lastDiff = diff;
            }
            else {
                lastTotal = timelinesRotation[i];
                lastDiff = timelinesRotation[i + 1];
            }
            let loops = lastTotal - lastTotal % 360;
            total = diff + loops;
            let current = diff >= 0, dir = lastTotal >= 0;
            if (Math.abs(lastDiff) <= 90 && MathUtils.signum(lastDiff) != MathUtils.signum(diff)) {
                if (Math.abs(lastTotal - loops) > 180) {
                    total += 360 * MathUtils.signum(lastTotal);
                    dir = current;
                }
                else if (loops != 0)
                    total -= 360 * MathUtils.signum(lastTotal);
                else
                    dir = current;
            }
            if (dir != current)
                total += 360 * MathUtils.signum(lastTotal);
            timelinesRotation[i] = total;
        }
        timelinesRotation[i + 1] = diff;
        bone.rotation = r1 + total * alpha;
    }
    queueEvents(entry, animationTime) {
        let animationStart = entry.animationStart, animationEnd = entry.animationEnd;
        let duration = animationEnd - animationStart;
        let trackLastWrapped = entry.trackLast % duration;
        // Queue events before complete.
        let events = this.events;
        let i = 0, n = events.length;
        for (; i < n; i++) {
            let event = events[i];
            if (event.time < trackLastWrapped)
                break;
            if (event.time > animationEnd)
                continue; // Discard events outside animation start/end.
            this.queue.event(entry, event);
        }
        // Queue complete if completed a loop iteration or the animation.
        let complete = false;
        if (entry.loop) {
            if (duration == 0)
                complete = true;
            else {
                const cycles = Math.floor(entry.trackTime / duration);
                complete = cycles > 0 && cycles > Math.floor(entry.trackLast / duration);
            }
        }
        else
            complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
        if (complete)
            this.queue.complete(entry);
        // Queue events after complete.
        for (; i < n; i++) {
            let event = events[i];
            if (event.time < animationStart)
                continue; // Discard events outside animation start/end.
            this.queue.event(entry, event);
        }
    }
    /** Removes all animations from all tracks, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTracks() {
        let oldDrainDisabled = this.queue.drainDisabled;
        this.queue.drainDisabled = true;
        for (let i = 0, n = this.tracks.length; i < n; i++)
            this.clearTrack(i);
        this.tracks.length = 0;
        this.queue.drainDisabled = oldDrainDisabled;
        this.queue.drain();
    }
    /** Removes all animations from the track, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTrack(trackIndex) {
        if (trackIndex >= this.tracks.length)
            return;
        let current = this.tracks[trackIndex];
        if (!current)
            return;
        this.queue.end(current);
        this.clearNext(current);
        let entry = current;
        while (true) {
            let from = entry.mixingFrom;
            if (!from)
                break;
            this.queue.end(from);
            entry.mixingFrom = null;
            entry.mixingTo = null;
            entry = from;
        }
        this.tracks[current.trackIndex] = null;
        this.queue.drain();
    }
    setCurrent(index, current, interrupt) {
        let from = this.expandToIndex(index);
        this.tracks[index] = current;
        current.previous = null;
        if (from) {
            if (interrupt)
                this.queue.interrupt(from);
            current.mixingFrom = from;
            from.mixingTo = current;
            current.mixTime = 0;
            // Store the interrupted mix percentage.
            if (from.mixingFrom && from.mixDuration > 0)
                current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
            from.timelinesRotation.length = 0; // Reset rotation for mixing out, in case entry was mixed in.
        }
        this.queue.start(current);
    }
    /** Sets an animation by name.
      *
      * See {@link #setAnimationWith()}. */
    setAnimation(trackIndex, animationName, loop = false) {
        let animation = this.data.skeletonData.findAnimation(animationName);
        if (!animation)
            throw new Error("Animation not found: " + animationName);
        return this.setAnimationWith(trackIndex, animation, loop);
    }
    /** Sets the current animation for a track, discarding any queued animations. If the formerly current track entry was never
     * applied to a skeleton, it is replaced (not mixed from).
     * @param loop If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     *           duration. In either case {@link TrackEntry#trackEnd} determines when the track is cleared.
     * @returns A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    setAnimationWith(trackIndex, animation, loop = false) {
        if (!animation)
            throw new Error("animation cannot be null.");
        let interrupt = true;
        let current = this.expandToIndex(trackIndex);
        if (current) {
            if (current.nextTrackLast == -1) {
                // Don't mix from an entry that was never applied.
                this.tracks[trackIndex] = current.mixingFrom;
                this.queue.interrupt(current);
                this.queue.end(current);
                this.clearNext(current);
                current = current.mixingFrom;
                interrupt = false;
            }
            else
                this.clearNext(current);
        }
        let entry = this.trackEntry(trackIndex, animation, loop, current);
        this.setCurrent(trackIndex, entry, interrupt);
        this.queue.drain();
        return entry;
    }
    /** Queues an animation by name.
     *
     * See {@link #addAnimationWith()}. */
    addAnimation(trackIndex, animationName, loop = false, delay = 0) {
        let animation = this.data.skeletonData.findAnimation(animationName);
        if (!animation)
            throw new Error("Animation not found: " + animationName);
        return this.addAnimationWith(trackIndex, animation, loop, delay);
    }
    /** Adds an animation to be played after the current or last queued animation for a track. If the track is empty, it is
     * equivalent to calling {@link #setAnimationWith()}.
     * @param delay If > 0, sets {@link TrackEntry#delay}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration (from the {@link AnimationStateData}) plus the specified `delay` (ie the mix
     *           ends at (`delay` = 0) or before (`delay` < 0) the previous track entry duration). If the
     *           previous entry is looping, its next loop completion is used instead of its duration.
     * @returns A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    addAnimationWith(trackIndex, animation, loop = false, delay = 0) {
        if (!animation)
            throw new Error("animation cannot be null.");
        let last = this.expandToIndex(trackIndex);
        if (last) {
            while (last.next)
                last = last.next;
        }
        let entry = this.trackEntry(trackIndex, animation, loop, last);
        if (!last) {
            this.setCurrent(trackIndex, entry, true);
            this.queue.drain();
        }
        else {
            last.next = entry;
            entry.previous = last;
            if (delay <= 0)
                delay += last.getTrackComplete() - entry.mixDuration;
        }
        entry.delay = delay;
        return entry;
    }
    /** Sets an empty animation for a track, discarding any queued animations, and sets the track entry's
     * {@link TrackEntry#mixduration}. An empty animation has no timelines and serves as a placeholder for mixing in or out.
     *
     * Mixing out is done by setting an empty animation with a mix duration using either {@link #setEmptyAnimation()},
     * {@link #setEmptyAnimations()}, or {@link #addEmptyAnimation()}. Mixing to an empty animation causes
     * the previous animation to be applied less and less over the mix duration. Properties keyed in the previous animation
     * transition to the value from lower tracks or to the setup pose value if no lower tracks key the property. A mix duration of
     * 0 still mixes out over one frame.
     *
     * Mixing in is done by first setting an empty animation, then adding an animation using
     * {@link #addAnimation()} and on the returned track entry, set the
     * {@link TrackEntry#setMixDuration()}. Mixing from an empty animation causes the new animation to be applied more and
     * more over the mix duration. Properties keyed in the new animation transition from the value from lower tracks or from the
     * setup pose value if no lower tracks key the property to the value keyed in the new animation. */
    setEmptyAnimation(trackIndex, mixDuration = 0) {
        let entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation(), false);
        entry.mixDuration = mixDuration;
        entry.trackEnd = mixDuration;
        return entry;
    }
    /** Adds an empty animation to be played after the current or last queued animation for a track, and sets the track entry's
     * {@link TrackEntry#mixDuration}. If the track is empty, it is equivalent to calling
     * {@link #setEmptyAnimation()}.
     *
     * See {@link #setEmptyAnimation()}.
     * @param delay If > 0, sets {@link TrackEntry#delay}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration plus the specified `delay` (ie the mix ends at (`delay` = 0) or
     *           before (`delay` < 0) the previous track entry duration). If the previous entry is looping, its next
     *           loop completion is used instead of its duration.
     * @return A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    addEmptyAnimation(trackIndex, mixDuration = 0, delay = 0) {
        let entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation(), false, delay);
        if (delay <= 0)
            entry.delay += entry.mixDuration - mixDuration;
        entry.mixDuration = mixDuration;
        entry.trackEnd = mixDuration;
        return entry;
    }
    /** Sets an empty animation for every track, discarding any queued animations, and mixes to it over the specified mix
      * duration. */
    setEmptyAnimations(mixDuration = 0) {
        let oldDrainDisabled = this.queue.drainDisabled;
        this.queue.drainDisabled = true;
        for (let i = 0, n = this.tracks.length; i < n; i++) {
            let current = this.tracks[i];
            if (current)
                this.setEmptyAnimation(current.trackIndex, mixDuration);
        }
        this.queue.drainDisabled = oldDrainDisabled;
        this.queue.drain();
    }
    expandToIndex(index) {
        if (index < this.tracks.length)
            return this.tracks[index];
        Utils.ensureArrayCapacity(this.tracks, index + 1, null);
        this.tracks.length = index + 1;
        return null;
    }
    /** @param last May be null. */
    trackEntry(trackIndex, animation, loop, last) {
        let entry = this.trackEntryPool.obtain();
        entry.reset();
        entry.trackIndex = trackIndex;
        entry.animation = animation;
        entry.loop = loop;
        entry.holdPrevious = false;
        entry.reverse = false;
        entry.shortestRotation = false;
        entry.eventThreshold = 0;
        entry.alphaAttachmentThreshold = 0;
        entry.mixAttachmentThreshold = 0;
        entry.mixDrawOrderThreshold = 0;
        entry.animationStart = 0;
        entry.animationEnd = animation.duration;
        entry.animationLast = -1;
        entry.nextAnimationLast = -1;
        entry.delay = 0;
        entry.trackTime = 0;
        entry.trackLast = -1;
        entry.nextTrackLast = -1;
        entry.trackEnd = Number.MAX_VALUE;
        entry.timeScale = 1;
        entry.alpha = 1;
        entry.mixTime = 0;
        entry.mixDuration = !last ? 0 : this.data.getMix(last.animation, animation);
        entry.interruptAlpha = 1;
        entry.totalAlpha = 0;
        entry.mixBlend = MixBlend.replace;
        return entry;
    }
    /** Removes the {@link TrackEntry#getNext() next entry} and all entries after it for the specified entry. */
    clearNext(entry) {
        let next = entry.next;
        while (next) {
            this.queue.dispose(next);
            next = next.next;
        }
        entry.next = null;
    }
    _animationsChanged() {
        this.animationsChanged = false;
        this.propertyIDs.clear();
        let tracks = this.tracks;
        for (let i = 0, n = tracks.length; i < n; i++) {
            let entry = tracks[i];
            if (!entry)
                continue;
            while (entry.mixingFrom)
                entry = entry.mixingFrom;
            do {
                if (!entry.mixingTo || entry.mixBlend != MixBlend.add)
                    this.computeHold(entry);
                entry = entry.mixingTo;
            } while (entry);
        }
    }
    computeHold(entry) {
        let to = entry.mixingTo;
        let timelines = entry.animation.timelines;
        let timelinesCount = entry.animation.timelines.length;
        let timelineMode = entry.timelineMode;
        timelineMode.length = timelinesCount;
        let timelineHoldMix = entry.timelineHoldMix;
        timelineHoldMix.length = 0;
        let propertyIDs = this.propertyIDs;
        if (to && to.holdPrevious) {
            for (let i = 0; i < timelinesCount; i++)
                timelineMode[i] = propertyIDs.addAll(timelines[i].getPropertyIds()) ? HOLD_FIRST : HOLD_SUBSEQUENT;
            return;
        }
        outer: for (let i = 0; i < timelinesCount; i++) {
            let timeline = timelines[i];
            let ids = timeline.getPropertyIds();
            if (!propertyIDs.addAll(ids))
                timelineMode[i] = SUBSEQUENT;
            else if (!to || timeline instanceof AttachmentTimeline || timeline instanceof DrawOrderTimeline
                || timeline instanceof EventTimeline || !to.animation.hasTimeline(ids)) {
                timelineMode[i] = FIRST;
            }
            else {
                for (let next = to.mixingTo; next; next = next.mixingTo) {
                    if (next.animation.hasTimeline(ids))
                        continue;
                    if (entry.mixDuration > 0) {
                        timelineMode[i] = HOLD_MIX;
                        timelineHoldMix[i] = next;
                        continue outer;
                    }
                    break;
                }
                timelineMode[i] = HOLD_FIRST;
            }
        }
    }
    /** Returns the track entry for the animation currently playing on the track, or null if no animation is currently playing. */
    getCurrent(trackIndex) {
        if (trackIndex >= this.tracks.length)
            return null;
        return this.tracks[trackIndex];
    }
    /** Adds a listener to receive events for all track entries. */
    addListener(listener) {
        if (!listener)
            throw new Error("listener cannot be null.");
        this.listeners.push(listener);
    }
    /** Removes the listener added with {@link #addListener()}. */
    removeListener(listener) {
        let index = this.listeners.indexOf(listener);
        if (index >= 0)
            this.listeners.splice(index, 1);
    }
    /** Removes all listeners added with {@link #addListener()}. */
    clearListeners() {
        this.listeners.length = 0;
    }
    /** Discards all listener notifications that have not yet been delivered. This can be useful to call from an
     * {@link AnimationStateListener} when it is known that further notifications that may have been already queued for delivery
     * are not wanted because new animations are being set. */
    clearListenerNotifications() {
        this.queue.clear();
    }
}
/** Stores settings and other state for the playback of an animation on an {@link AnimationState} track.
 *
 * References to a track entry must not be kept after the {@link AnimationStateListener#dispose()} event occurs. */
class TrackEntry {
    /** The animation to apply for this track entry. */
    animation = null;
    previous = null;
    /** The animation queued to start after this animation, or null. `next` makes up a linked list. */
    next = null;
    /** The track entry for the previous animation when mixing from the previous animation to this animation, or null if no
     * mixing is currently occuring. When mixing from multiple animations, `mixingFrom` makes up a linked list. */
    mixingFrom = null;
    /** The track entry for the next animation when mixing from this animation to the next animation, or null if no mixing is
     * currently occuring. When mixing to multiple animations, `mixingTo` makes up a linked list. */
    mixingTo = null;
    /** The listener for events generated by this track entry, or null.
     *
     * A track entry returned from {@link AnimationState#setAnimation()} is already the current animation
     * for the track, so the track entry listener {@link AnimationStateListener#start()} will not be called. */
    listener = null;
    /** The index of the track where this track entry is either current or queued.
     *
     * See {@link AnimationState#getCurrent()}. */
    trackIndex = 0;
    /** If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     * duration. */
    loop = false;
    /** If true, when mixing from the previous animation to this animation, the previous animation is applied as normal instead
     * of being mixed out.
     *
     * When mixing between animations that key the same property, if a lower track also keys that property then the value will
     * briefly dip toward the lower track value during the mix. This happens because the first animation mixes from 100% to 0%
     * while the second animation mixes from 0% to 100%. Setting `holdPrevious` to true applies the first animation
     * at 100% during the mix so the lower track value is overwritten. Such dipping does not occur on the lowest track which
     * keys the property, only when a higher track also keys the property.
     *
     * Snapping will occur if `holdPrevious` is true and this animation does not key all the same properties as the
     * previous animation. */
    holdPrevious = false;
    reverse = false;
    shortestRotation = false;
    /** When the mix percentage ({@link #mixTime} / {@link #mixDuration}) is less than the
     * `eventThreshold`, event timelines are applied while this animation is being mixed out. Defaults to 0, so event
     * timelines are not applied while this animation is being mixed out. */
    eventThreshold = 0;
    /** When the mix percentage ({@link #mixtime} / {@link #mixDuration}) is less than the
     * `attachmentThreshold`, attachment timelines are applied while this animation is being mixed out. Defaults to
     * 0, so attachment timelines are not applied while this animation is being mixed out. */
    mixAttachmentThreshold = 0;
    /** When {@link #getAlpha()} is greater than <code>alphaAttachmentThreshold</code>, attachment timelines are applied.
     * Defaults to 0, so attachment timelines are always applied. */
    alphaAttachmentThreshold = 0;
    /** When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
     * <code>mixDrawOrderThreshold</code>, draw order timelines are applied while this animation is being mixed out. Defaults to
     * 0, so draw order timelines are not applied while this animation is being mixed out. */
    mixDrawOrderThreshold = 0;
    /** Seconds when this animation starts, both initially and after looping. Defaults to 0.
     *
     * When changing the `animationStart` time, it often makes sense to set {@link #animationLast} to the same
     * value to prevent timeline keys before the start time from triggering. */
    animationStart = 0;
    /** Seconds for the last frame of this animation. Non-looping animations won't play past this time. Looping animations will
     * loop back to {@link #animationStart} at this time. Defaults to the animation {@link Animation#duration}. */
    animationEnd = 0;
    /** The time in seconds this animation was last applied. Some timelines use this for one-time triggers. Eg, when this
     * animation is applied, event timelines will fire all events between the `animationLast` time (exclusive) and
     * `animationTime` (inclusive). Defaults to -1 to ensure triggers on frame 0 happen the first time this animation
     * is applied. */
    animationLast = 0;
    nextAnimationLast = 0;
    /** Seconds to postpone playing the animation. When this track entry is the current track entry, `delay`
     * postpones incrementing the {@link #trackTime}. When this track entry is queued, `delay` is the time from
     * the start of the previous animation to when this track entry will become the current track entry (ie when the previous
     * track entry {@link TrackEntry#trackTime} >= this track entry's `delay`).
     *
     * {@link #timeScale} affects the delay. */
    delay = 0;
    /** Current time in seconds this track entry has been the current track entry. The track time determines
     * {@link #animationTime}. The track time can be set to start the animation at a time other than 0, without affecting
     * looping. */
    trackTime = 0;
    trackLast = 0;
    nextTrackLast = 0;
    /** The track time in seconds when this animation will be removed from the track. Defaults to the highest possible float
     * value, meaning the animation will be applied until a new animation is set or the track is cleared. If the track end time
     * is reached, no other animations are queued for playback, and mixing from any previous animations is complete, then the
     * properties keyed by the animation are set to the setup pose and the track is cleared.
     *
     * It may be desired to use {@link AnimationState#addEmptyAnimation()} rather than have the animation
     * abruptly cease being applied. */
    trackEnd = 0;
    /** Multiplier for the delta time when this track entry is updated, causing time for this animation to pass slower or
     * faster. Defaults to 1.
     *
     * {@link #mixTime} is not affected by track entry time scale, so {@link #mixDuration} may need to be adjusted to
     * match the animation speed.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, assuming time scale to be 1. If
     * the time scale is not 1, the delay may need to be adjusted.
     *
     * See AnimationState {@link AnimationState#timeScale} for affecting all animations. */
    timeScale = 0;
    /** Values < 1 mix this animation with the skeleton's current pose (usually the pose resulting from lower tracks). Defaults
     * to 1, which overwrites the skeleton's current pose with this animation.
     *
     * Typically track 0 is used to completely pose the skeleton, then alpha is used on higher tracks. It doesn't make sense to
     * use alpha on track 0 if the skeleton pose is from the last frame render. */
    alpha = 0;
    /** Seconds from 0 to the {@link #getMixDuration()} when mixing from the previous animation to this animation. May be
     * slightly more than `mixDuration` when the mix is complete. */
    mixTime = 0;
    /** Seconds for mixing from the previous animation to this animation. Defaults to the value provided by AnimationStateData
     * {@link AnimationStateData#getMix()} based on the animation before this animation (if any).
     *
     * A mix duration of 0 still mixes out over one frame to provide the track entry being mixed out a chance to revert the
     * properties it was animating.
     *
     * The `mixDuration` can be set manually rather than use the value from
     * {@link AnimationStateData#getMix()}. In that case, the `mixDuration` can be set for a new
     * track entry only before {@link AnimationState#update(float)} is first called.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, not a mix duration set
     * afterward. */
    _mixDuration = 0;
    interruptAlpha = 0;
    totalAlpha = 0;
    get mixDuration() {
        return this._mixDuration;
    }
    set mixDuration(mixDuration) {
        this._mixDuration = mixDuration;
    }
    setMixDurationWithDelay(mixDuration, delay) {
        this._mixDuration = mixDuration;
        if (this.previous != null && delay <= 0)
            delay += this.previous.getTrackComplete() - mixDuration;
        this.delay = delay;
    }
    /** Controls how properties keyed in the animation are mixed with lower tracks. Defaults to {@link MixBlend#replace}, which
     * replaces the values from the lower tracks with the animation values. {@link MixBlend#add} adds the animation values to
     * the values from the lower tracks.
     *
     * The `mixBlend` can be set for a new track entry only before {@link AnimationState#apply()} is first
     * called. */
    mixBlend = MixBlend.replace;
    timelineMode = new Array();
    timelineHoldMix = new Array();
    timelinesRotation = new Array();
    reset() {
        this.next = null;
        this.previous = null;
        this.mixingFrom = null;
        this.mixingTo = null;
        this.animation = null;
        this.listener = null;
        this.timelineMode.length = 0;
        this.timelineHoldMix.length = 0;
        this.timelinesRotation.length = 0;
    }
    /** Uses {@link #trackTime} to compute the `animationTime`, which is between {@link #animationStart}
     * and {@link #animationEnd}. When the `trackTime` is 0, the `animationTime` is equal to the
     * `animationStart` time. */
    getAnimationTime() {
        if (this.loop) {
            let duration = this.animationEnd - this.animationStart;
            if (duration == 0)
                return this.animationStart;
            return (this.trackTime % duration) + this.animationStart;
        }
        return Math.min(this.trackTime + this.animationStart, this.animationEnd);
    }
    setAnimationLast(animationLast) {
        this.animationLast = animationLast;
        this.nextAnimationLast = animationLast;
    }
    /** Returns true if at least one loop has been completed.
     *
     * See {@link AnimationStateListener#complete()}. */
    isComplete() {
        return this.trackTime >= this.animationEnd - this.animationStart;
    }
    /** Resets the rotation directions for mixing this entry's rotate timelines. This can be useful to avoid bones rotating the
     * long way around when using {@link #alpha} and starting animations on other tracks.
     *
     * Mixing with {@link MixBlend#replace} involves finding a rotation between two others, which has two possible solutions:
     * the short way or the long way around. The two rotations likely change over time, so which direction is the short or long
     * way also changes. If the short way was always chosen, bones would flip to the other side when that direction became the
     * long way. TrackEntry chooses the short way the first time it is applied and remembers that direction. */
    resetRotationDirections() {
        this.timelinesRotation.length = 0;
    }
    getTrackComplete() {
        let duration = this.animationEnd - this.animationStart;
        if (duration != 0) {
            if (this.loop)
                return duration * (1 + ((this.trackTime / duration) | 0)); // Completion of next loop.
            if (this.trackTime < duration)
                return duration; // Before duration.
        }
        return this.trackTime; // Next update.
    }
    /** Returns true if this track entry has been applied at least once.
     * <p>
     * See {@link AnimationState#apply(Skeleton)}. */
    wasApplied() {
        return this.nextTrackLast != -1;
    }
    /** Returns true if there is a {@link #getNext()} track entry and it will become the current track entry during the next
     * {@link AnimationState#update(float)}. */
    isNextReady() {
        return this.next != null && this.nextTrackLast - this.next.delay >= 0;
    }
}
class EventQueue {
    objects = [];
    drainDisabled = false;
    animState;
    constructor(animState) {
        this.animState = animState;
    }
    start(entry) {
        this.objects.push(EventType.start);
        this.objects.push(entry);
        this.animState.animationsChanged = true;
    }
    interrupt(entry) {
        this.objects.push(EventType.interrupt);
        this.objects.push(entry);
    }
    end(entry) {
        this.objects.push(EventType.end);
        this.objects.push(entry);
        this.animState.animationsChanged = true;
    }
    dispose(entry) {
        this.objects.push(EventType.dispose);
        this.objects.push(entry);
    }
    complete(entry) {
        this.objects.push(EventType.complete);
        this.objects.push(entry);
    }
    event(entry, event) {
        this.objects.push(EventType.event);
        this.objects.push(entry);
        this.objects.push(event);
    }
    drain() {
        if (this.drainDisabled)
            return;
        this.drainDisabled = true;
        let objects = this.objects;
        let listeners = this.animState.listeners;
        for (let i = 0; i < objects.length; i += 2) {
            let type = objects[i];
            let entry = objects[i + 1];
            switch (type) {
                case EventType.start:
                    if (entry.listener && entry.listener.start)
                        entry.listener.start(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.start)
                            listener.start(entry);
                    }
                    break;
                case EventType.interrupt:
                    if (entry.listener && entry.listener.interrupt)
                        entry.listener.interrupt(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.interrupt)
                            listener.interrupt(entry);
                    }
                    break;
                case EventType.end:
                    if (entry.listener && entry.listener.end)
                        entry.listener.end(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.end)
                            listener.end(entry);
                    }
                // Fall through.
                case EventType.dispose:
                    if (entry.listener && entry.listener.dispose)
                        entry.listener.dispose(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.dispose)
                            listener.dispose(entry);
                    }
                    this.animState.trackEntryPool.free(entry);
                    break;
                case EventType.complete:
                    if (entry.listener && entry.listener.complete)
                        entry.listener.complete(entry);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.complete)
                            listener.complete(entry);
                    }
                    break;
                case EventType.event:
                    let event = objects[i++ + 2];
                    if (entry.listener && entry.listener.event)
                        entry.listener.event(entry, event);
                    for (let ii = 0; ii < listeners.length; ii++) {
                        let listener = listeners[ii];
                        if (listener.event)
                            listener.event(entry, event);
                    }
                    break;
            }
        }
        this.clear();
        this.drainDisabled = false;
    }
    clear() {
        this.objects.length = 0;
    }
}
var EventType;
(function (EventType) {
    EventType[EventType["start"] = 0] = "start";
    EventType[EventType["interrupt"] = 1] = "interrupt";
    EventType[EventType["end"] = 2] = "end";
    EventType[EventType["dispose"] = 3] = "dispose";
    EventType[EventType["complete"] = 4] = "complete";
    EventType[EventType["event"] = 5] = "event";
})(EventType || (EventType = {}));
/** 1. A previously applied timeline has set this property.
 *
 * Result: Mix from the current pose to the timeline pose. */
const SUBSEQUENT = 0;
/** 1. This is the first timeline to set this property.
 * 2. The next track entry applied after this one does not have a timeline to set this property.
 *
 * Result: Mix from the setup pose to the timeline pose. */
const FIRST = 1;
/** 1) A previously applied timeline has set this property.<br>
 * 2) The next track entry to be applied does have a timeline to set this property.<br>
 * 3) The next track entry after that one does not have a timeline to set this property.<br>
 * Result: Mix from the current pose to the timeline pose, but do not mix out. This avoids "dipping" when crossfading
 * animations that key the same property. A subsequent timeline will set this property using a mix. */
const HOLD_SUBSEQUENT = 2;
/** 1) This is the first timeline to set this property.<br>
 * 2) The next track entry to be applied does have a timeline to set this property.<br>
 * 3) The next track entry after that one does not have a timeline to set this property.<br>
 * Result: Mix from the setup pose to the timeline pose, but do not mix out. This avoids "dipping" when crossfading animations
 * that key the same property. A subsequent timeline will set this property using a mix. */
const HOLD_FIRST = 3;
/** 1. This is the first timeline to set this property.
 * 2. The next track entry to be applied does have a timeline to set this property.
 * 3. The next track entry after that one does have a timeline to set this property.
 * 4. timelineHoldMix stores the first subsequent track entry that does not have a timeline to set this property.
 *
 * Result: The same as HOLD except the mix percentage from the timelineHoldMix track entry is used. This handles when more than
 * 2 track entries in a row have a timeline that sets the same property.
 *
 * Eg, A -> B -> C -> D where A, B, and C have a timeline setting same property, but D does not. When A is applied, to avoid
 * "dipping" A is not mixed out, however D (the first entry that doesn't set the property) mixing in is used to mix out A
 * (which affects B and C). Without using D to mix out, A would be applied fully until mixing completes, then snap into
 * place. */
const HOLD_MIX = 4;
const SETUP = 1;
const CURRENT = 2;

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed. */
class AnimationStateData {
    /** The SkeletonData to look up animations when they are specified by name. */
    skeletonData;
    animationToMixTime = {};
    /** The mix duration to use when no mix duration has been defined between two animations. */
    defaultMix = 0;
    constructor(skeletonData) {
        if (!skeletonData)
            throw new Error("skeletonData cannot be null.");
        this.skeletonData = skeletonData;
    }
    /** Sets a mix duration by animation name.
     *
     * See {@link #setMixWith()}. */
    setMix(fromName, toName, duration) {
        let from = this.skeletonData.findAnimation(fromName);
        if (!from)
            throw new Error("Animation not found: " + fromName);
        let to = this.skeletonData.findAnimation(toName);
        if (!to)
            throw new Error("Animation not found: " + toName);
        this.setMixWith(from, to, duration);
    }
    /** Sets the mix duration when changing from the specified animation to the other.
     *
     * See {@link TrackEntry#mixDuration}. */
    setMixWith(from, to, duration) {
        if (!from)
            throw new Error("from cannot be null.");
        if (!to)
            throw new Error("to cannot be null.");
        let key = from.name + "." + to.name;
        this.animationToMixTime[key] = duration;
    }
    /** Returns the mix duration to use when changing from the specified animation to the other, or the {@link #defaultMix} if
      * no mix duration has been set. */
    getMix(from, to) {
        let key = from.name + "." + to.name;
        let value = this.animationToMixTime[key];
        return value === undefined ? this.defaultMix : value;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment with vertices that make up a polygon. Can be used for hit detection, creating physics bodies, spawning particle
 * effects, and more.
 *
 * See {@link SkeletonBounds} and [Bounding Boxes](http://esotericsoftware.com/spine-bounding-boxes) in the Spine User
 * Guide. */
class BoundingBoxAttachment extends VertexAttachment {
    color = new Color(1, 1, 1, 1);
    constructor(name) {
        super(name);
    }
    copy() {
        let copy = new BoundingBoxAttachment(this.name);
        this.copyTo(copy);
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment with vertices that make up a polygon used for clipping the rendering of other attachments. */
class ClippingAttachment extends VertexAttachment {
    /** Clipping is performed between the clipping polygon's slot and the end slot. Returns null if clipping is done until the end of
     * the skeleton's rendering. */
    endSlot = null;
    // Nonessential.
    /** The color of the clipping polygon as it was in Spine. Available only when nonessential data was exported. Clipping polygons
     * are not usually rendered at runtime. */
    color = new Color(0.2275, 0.2275, 0.8078, 1); // ce3a3aff
    constructor(name) {
        super(name);
    }
    copy() {
        let copy = new ClippingAttachment(this.name);
        this.copyTo(copy);
        copy.endSlot = this.endSlot;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class Texture {
    _image;
    constructor(image) {
        this._image = image;
    }
    getImage() {
        return this._image;
    }
}
var TextureFilter;
(function (TextureFilter) {
    TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
    TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
    TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
    TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
    TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
    TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
    TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear"; // WebGLRenderingContext.LINEAR_MIPMAP_LINEAR
})(TextureFilter || (TextureFilter = {}));
var TextureWrap;
(function (TextureWrap) {
    TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
    TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
    TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat"; // WebGLRenderingContext.REPEAT
})(TextureWrap || (TextureWrap = {}));
class TextureRegion {
    texture;
    u = 0;
    v = 0;
    u2 = 0;
    v2 = 0;
    width = 0;
    height = 0;
    degrees = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class TextureAtlas {
    pages = new Array();
    regions = new Array();
    constructor(atlasText) {
        let reader = new TextureAtlasReader(atlasText);
        let entry = new Array(4);
        let pageFields = {};
        pageFields["size"] = (page) => {
            page.width = parseInt(entry[1]);
            page.height = parseInt(entry[2]);
        };
        pageFields["format"] = () => {
            // page.format = Format[tuple[0]]; we don't need format in WebGL
        };
        pageFields["filter"] = (page) => {
            page.minFilter = Utils.enumValue(TextureFilter, entry[1]);
            page.magFilter = Utils.enumValue(TextureFilter, entry[2]);
        };
        pageFields["repeat"] = (page) => {
            if (entry[1].indexOf('x') != -1)
                page.uWrap = TextureWrap.Repeat;
            if (entry[1].indexOf('y') != -1)
                page.vWrap = TextureWrap.Repeat;
        };
        pageFields["pma"] = (page) => {
            page.pma = entry[1] == "true";
        };
        var regionFields = {};
        regionFields["xy"] = (region) => {
            region.x = parseInt(entry[1]);
            region.y = parseInt(entry[2]);
        };
        regionFields["size"] = (region) => {
            region.width = parseInt(entry[1]);
            region.height = parseInt(entry[2]);
        };
        regionFields["bounds"] = (region) => {
            region.x = parseInt(entry[1]);
            region.y = parseInt(entry[2]);
            region.width = parseInt(entry[3]);
            region.height = parseInt(entry[4]);
        };
        regionFields["offset"] = (region) => {
            region.offsetX = parseInt(entry[1]);
            region.offsetY = parseInt(entry[2]);
        };
        regionFields["orig"] = (region) => {
            region.originalWidth = parseInt(entry[1]);
            region.originalHeight = parseInt(entry[2]);
        };
        regionFields["offsets"] = (region) => {
            region.offsetX = parseInt(entry[1]);
            region.offsetY = parseInt(entry[2]);
            region.originalWidth = parseInt(entry[3]);
            region.originalHeight = parseInt(entry[4]);
        };
        regionFields["rotate"] = (region) => {
            let value = entry[1];
            if (value == "true")
                region.degrees = 90;
            else if (value != "false")
                region.degrees = parseInt(value);
        };
        regionFields["index"] = (region) => {
            region.index = parseInt(entry[1]);
        };
        let line = reader.readLine();
        // Ignore empty lines before first entry.
        while (line && line.trim().length == 0)
            line = reader.readLine();
        // Header entries.
        while (true) {
            if (!line || line.trim().length == 0)
                break;
            if (reader.readEntry(entry, line) == 0)
                break; // Silently ignore all header fields.
            line = reader.readLine();
        }
        // Page and region entries.
        let page = null;
        let names = null;
        let values = null;
        while (true) {
            if (line === null)
                break;
            if (line.trim().length == 0) {
                page = null;
                line = reader.readLine();
            }
            else if (!page) {
                page = new TextureAtlasPage(line.trim());
                while (true) {
                    if (reader.readEntry(entry, line = reader.readLine()) == 0)
                        break;
                    let field = pageFields[entry[0]];
                    if (field)
                        field(page);
                }
                this.pages.push(page);
            }
            else {
                let region = new TextureAtlasRegion(page, line);
                while (true) {
                    let count = reader.readEntry(entry, line = reader.readLine());
                    if (count == 0)
                        break;
                    let field = regionFields[entry[0]];
                    if (field)
                        field(region);
                    else {
                        if (!names)
                            names = [];
                        if (!values)
                            values = [];
                        names.push(entry[0]);
                        let entryValues = [];
                        for (let i = 0; i < count; i++)
                            entryValues.push(parseInt(entry[i + 1]));
                        values.push(entryValues);
                    }
                }
                if (region.originalWidth == 0 && region.originalHeight == 0) {
                    region.originalWidth = region.width;
                    region.originalHeight = region.height;
                }
                if (names && names.length > 0 && values && values.length > 0) {
                    region.names = names;
                    region.values = values;
                    names = null;
                    values = null;
                }
                region.u = region.x / page.width;
                region.v = region.y / page.height;
                if (region.degrees == 90) {
                    region.u2 = (region.x + region.height) / page.width;
                    region.v2 = (region.y + region.width) / page.height;
                }
                else {
                    region.u2 = (region.x + region.width) / page.width;
                    region.v2 = (region.y + region.height) / page.height;
                }
                this.regions.push(region);
            }
        }
    }
    findRegion(name) {
        for (let i = 0; i < this.regions.length; i++) {
            if (this.regions[i].name == name) {
                return this.regions[i];
            }
        }
        return null;
    }
    setTextures(assetManager, pathPrefix = "") {
        for (let page of this.pages)
            page.setTexture(assetManager.get(pathPrefix + page.name));
    }
    dispose() {
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].texture?.dispose();
        }
    }
}
class TextureAtlasReader {
    lines;
    index = 0;
    constructor(text) {
        this.lines = text.split(/\r\n|\r|\n/);
    }
    readLine() {
        if (this.index >= this.lines.length)
            return null;
        return this.lines[this.index++];
    }
    readEntry(entry, line) {
        if (!line)
            return 0;
        line = line.trim();
        if (line.length == 0)
            return 0;
        let colon = line.indexOf(':');
        if (colon == -1)
            return 0;
        entry[0] = line.substr(0, colon).trim();
        for (let i = 1, lastMatch = colon + 1;; i++) {
            let comma = line.indexOf(',', lastMatch);
            if (comma == -1) {
                entry[i] = line.substr(lastMatch).trim();
                return i;
            }
            entry[i] = line.substr(lastMatch, comma - lastMatch).trim();
            lastMatch = comma + 1;
            if (i == 4)
                return 4;
        }
    }
}
class TextureAtlasPage {
    name;
    minFilter = TextureFilter.Nearest;
    magFilter = TextureFilter.Nearest;
    uWrap = TextureWrap.ClampToEdge;
    vWrap = TextureWrap.ClampToEdge;
    texture = null;
    width = 0;
    height = 0;
    pma = false;
    regions = new Array();
    constructor(name) {
        this.name = name;
    }
    setTexture(texture) {
        this.texture = texture;
        texture.setFilters(this.minFilter, this.magFilter);
        texture.setWraps(this.uWrap, this.vWrap);
        for (let region of this.regions)
            region.texture = texture;
    }
}
class TextureAtlasRegion extends TextureRegion {
    page;
    name;
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
    index = 0;
    degrees = 0;
    names = null;
    values = null;
    constructor(page, name) {
        super();
        this.page = page;
        this.name = name;
        page.regions.push(this);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment that displays a textured mesh. A mesh has hull vertices and internal vertices within the hull. Holes are not
 * supported. Each vertex has UVs (texture coordinates) and triangles are used to map an image on to the mesh.
 *
 * See [Mesh attachments](http://esotericsoftware.com/spine-meshes) in the Spine User Guide. */
class MeshAttachment extends VertexAttachment {
    region = null;
    /** The name of the texture region for this attachment. */
    path;
    /** The UV pair for each vertex, normalized within the texture region. */
    regionUVs = [];
    /** The UV pair for each vertex, normalized within the entire texture.
     *
     * See {@link #updateUVs}. */
    uvs = [];
    /** Triplets of vertex indices which describe the mesh's triangulation. */
    triangles = [];
    /** The color to tint the mesh. */
    color = new Color(1, 1, 1, 1);
    /** The width of the mesh's image. Available only when nonessential data was exported. */
    width = 0;
    /** The height of the mesh's image. Available only when nonessential data was exported. */
    height = 0;
    /** The number of entries at the beginning of {@link #vertices} that make up the mesh hull. */
    hullLength = 0;
    /** Vertex index pairs describing edges for controling triangulation. Mesh triangles will never cross edges. Only available if
     * nonessential data was exported. Triangulation is not performed at runtime. */
    edges = [];
    parentMesh = null;
    sequence = null;
    tempColor = new Color(0, 0, 0, 0);
    constructor(name, path) {
        super(name);
        this.path = path;
    }
    /** Calculates {@link #uvs} using the {@link #regionUVs} and region. Must be called if the region, the region's properties, or
     * the {@link #regionUVs} are changed. */
    updateRegion() {
        if (!this.region)
            throw new Error("Region not set.");
        let regionUVs = this.regionUVs;
        if (!this.uvs || this.uvs.length != regionUVs.length)
            this.uvs = Utils.newFloatArray(regionUVs.length);
        let uvs = this.uvs;
        let n = this.uvs.length;
        let u = this.region.u, v = this.region.v, width = 0, height = 0;
        if (this.region instanceof TextureAtlasRegion) {
            let region = this.region, page = region.page;
            let textureWidth = page.width, textureHeight = page.height;
            switch (region.degrees) {
                case 90:
                    u -= (region.originalHeight - region.offsetY - region.height) / textureWidth;
                    v -= (region.originalWidth - region.offsetX - region.width) / textureHeight;
                    width = region.originalHeight / textureWidth;
                    height = region.originalWidth / textureHeight;
                    for (let i = 0; i < n; i += 2) {
                        uvs[i] = u + regionUVs[i + 1] * width;
                        uvs[i + 1] = v + (1 - regionUVs[i]) * height;
                    }
                    return;
                case 180:
                    u -= (region.originalWidth - region.offsetX - region.width) / textureWidth;
                    v -= region.offsetY / textureHeight;
                    width = region.originalWidth / textureWidth;
                    height = region.originalHeight / textureHeight;
                    for (let i = 0; i < n; i += 2) {
                        uvs[i] = u + (1 - regionUVs[i]) * width;
                        uvs[i + 1] = v + (1 - regionUVs[i + 1]) * height;
                    }
                    return;
                case 270:
                    u -= region.offsetY / textureWidth;
                    v -= region.offsetX / textureHeight;
                    width = region.originalHeight / textureWidth;
                    height = region.originalWidth / textureHeight;
                    for (let i = 0; i < n; i += 2) {
                        uvs[i] = u + (1 - regionUVs[i + 1]) * width;
                        uvs[i + 1] = v + regionUVs[i] * height;
                    }
                    return;
            }
            u -= region.offsetX / textureWidth;
            v -= (region.originalHeight - region.offsetY - region.height) / textureHeight;
            width = region.originalWidth / textureWidth;
            height = region.originalHeight / textureHeight;
        }
        else if (!this.region) {
            u = v = 0;
            width = height = 1;
        }
        else {
            width = this.region.u2 - u;
            height = this.region.v2 - v;
        }
        for (let i = 0; i < n; i += 2) {
            uvs[i] = u + regionUVs[i] * width;
            uvs[i + 1] = v + regionUVs[i + 1] * height;
        }
    }
    /** The parent mesh if this is a linked mesh, else null. A linked mesh shares the {@link #bones}, {@link #vertices},
     * {@link #regionUVs}, {@link #triangles}, {@link #hullLength}, {@link #edges}, {@link #width}, and {@link #height} with the
     * parent mesh, but may have a different {@link #name} or {@link #path} (and therefore a different texture). */
    getParentMesh() {
        return this.parentMesh;
    }
    /** @param parentMesh May be null. */
    setParentMesh(parentMesh) {
        this.parentMesh = parentMesh;
        if (parentMesh) {
            this.bones = parentMesh.bones;
            this.vertices = parentMesh.vertices;
            this.worldVerticesLength = parentMesh.worldVerticesLength;
            this.regionUVs = parentMesh.regionUVs;
            this.triangles = parentMesh.triangles;
            this.hullLength = parentMesh.hullLength;
            this.worldVerticesLength = parentMesh.worldVerticesLength;
        }
    }
    copy() {
        if (this.parentMesh)
            return this.newLinkedMesh();
        let copy = new MeshAttachment(this.name, this.path);
        copy.region = this.region;
        copy.color.setFromColor(this.color);
        this.copyTo(copy);
        copy.regionUVs = new Array(this.regionUVs.length);
        Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
        copy.uvs = new Array(this.uvs.length);
        Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
        copy.triangles = new Array(this.triangles.length);
        Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
        copy.hullLength = this.hullLength;
        copy.sequence = this.sequence != null ? this.sequence.copy() : null;
        // Nonessential.
        if (this.edges) {
            copy.edges = new Array(this.edges.length);
            Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
        }
        copy.width = this.width;
        copy.height = this.height;
        return copy;
    }
    computeWorldVertices(slot, start, count, worldVertices, offset, stride) {
        if (this.sequence != null)
            this.sequence.apply(slot, this);
        super.computeWorldVertices(slot, start, count, worldVertices, offset, stride);
    }
    /** Returns a new mesh with the {@link #parentMesh} set to this mesh's parent mesh, if any, else to this mesh. **/
    newLinkedMesh() {
        let copy = new MeshAttachment(this.name, this.path);
        copy.region = this.region;
        copy.color.setFromColor(this.color);
        copy.timelineAttachment = this.timelineAttachment;
        copy.setParentMesh(this.parentMesh ? this.parentMesh : this);
        if (copy.region != null)
            copy.updateRegion();
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment whose vertices make up a composite Bezier curve.
 *
 * See {@link PathConstraint} and [Paths](http://esotericsoftware.com/spine-paths) in the Spine User Guide. */
class PathAttachment extends VertexAttachment {
    /** The lengths along the path in the setup pose from the start of the path to the end of each Bezier curve. */
    lengths = [];
    /** If true, the start and end knots are connected. */
    closed = false;
    /** If true, additional calculations are performed to make calculating positions along the path more accurate. If false, fewer
     * calculations are performed but calculating positions along the path is less accurate. */
    constantSpeed = false;
    /** The color of the path as it was in Spine. Available only when nonessential data was exported. Paths are not usually
     * rendered at runtime. */
    color = new Color(1, 1, 1, 1);
    constructor(name) {
        super(name);
    }
    copy() {
        let copy = new PathAttachment(this.name);
        this.copyTo(copy);
        copy.lengths = new Array(this.lengths.length);
        Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
        copy.closed = closed;
        copy.constantSpeed = this.constantSpeed;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment which is a single point and a rotation. This can be used to spawn projectiles, particles, etc. A bone can be
 * used in similar ways, but a PointAttachment is slightly less expensive to compute and can be hidden, shown, and placed in a
 * skin.
 *
 * See [Point Attachments](http://esotericsoftware.com/spine-point-attachments) in the Spine User Guide. */
class PointAttachment extends VertexAttachment {
    x = 0;
    y = 0;
    rotation = 0;
    /** The color of the point attachment as it was in Spine. Available only when nonessential data was exported. Point attachments
     * are not usually rendered at runtime. */
    color = new Color(0.38, 0.94, 0, 1);
    constructor(name) {
        super(name);
    }
    computeWorldPosition(bone, point) {
        point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
        point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
        return point;
    }
    computeWorldRotation(bone) {
        const r = this.rotation * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
        const x = cos * bone.a + sin * bone.b;
        const y = cos * bone.c + sin * bone.d;
        return MathUtils.atan2Deg(y, x);
    }
    copy() {
        let copy = new PointAttachment(this.name);
        copy.x = this.x;
        copy.y = this.y;
        copy.rotation = this.rotation;
        copy.color.setFromColor(this.color);
        return copy;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An attachment that displays a textured quadrilateral.
 *
 * See [Region attachments](http://esotericsoftware.com/spine-regions) in the Spine User Guide. */
class RegionAttachment extends Attachment {
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local rotation. */
    rotation = 0;
    /** The width of the region attachment in Spine. */
    width = 0;
    /** The height of the region attachment in Spine. */
    height = 0;
    /** The color to tint the region attachment. */
    color = new Color(1, 1, 1, 1);
    /** The name of the texture region for this attachment. */
    path;
    region = null;
    sequence = null;
    /** For each of the 4 vertices, a pair of <code>x,y</code> values that is the local position of the vertex.
     *
     * See {@link #updateOffset()}. */
    offset = Utils.newFloatArray(8);
    uvs = Utils.newFloatArray(8);
    tempColor = new Color(1, 1, 1, 1);
    constructor(name, path) {
        super(name);
        this.path = path;
    }
    /** Calculates the {@link #offset} using the region settings. Must be called after changing region settings. */
    updateRegion() {
        if (!this.region)
            throw new Error("Region not set.");
        let region = this.region;
        let uvs = this.uvs;
        if (region == null) {
            uvs[0] = 0;
            uvs[1] = 0;
            uvs[2] = 0;
            uvs[3] = 1;
            uvs[4] = 1;
            uvs[5] = 1;
            uvs[6] = 1;
            uvs[7] = 0;
            return;
        }
        let regionScaleX = this.width / this.region.originalWidth * this.scaleX;
        let regionScaleY = this.height / this.region.originalHeight * this.scaleY;
        let localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
        let localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
        let localX2 = localX + this.region.width * regionScaleX;
        let localY2 = localY + this.region.height * regionScaleY;
        let radians = this.rotation * MathUtils.degRad;
        let cos = Math.cos(radians);
        let sin = Math.sin(radians);
        let x = this.x, y = this.y;
        let localXCos = localX * cos + x;
        let localXSin = localX * sin;
        let localYCos = localY * cos + y;
        let localYSin = localY * sin;
        let localX2Cos = localX2 * cos + x;
        let localX2Sin = localX2 * sin;
        let localY2Cos = localY2 * cos + y;
        let localY2Sin = localY2 * sin;
        let offset = this.offset;
        offset[0] = localXCos - localYSin;
        offset[1] = localYCos + localXSin;
        offset[2] = localXCos - localY2Sin;
        offset[3] = localY2Cos + localXSin;
        offset[4] = localX2Cos - localY2Sin;
        offset[5] = localY2Cos + localX2Sin;
        offset[6] = localX2Cos - localYSin;
        offset[7] = localYCos + localX2Sin;
        if (region.degrees == 90) {
            uvs[0] = region.u2;
            uvs[1] = region.v2;
            uvs[2] = region.u;
            uvs[3] = region.v2;
            uvs[4] = region.u;
            uvs[5] = region.v;
            uvs[6] = region.u2;
            uvs[7] = region.v;
        }
        else {
            uvs[0] = region.u;
            uvs[1] = region.v2;
            uvs[2] = region.u;
            uvs[3] = region.v;
            uvs[4] = region.u2;
            uvs[5] = region.v;
            uvs[6] = region.u2;
            uvs[7] = region.v2;
        }
    }
    /** Transforms the attachment's four vertices to world coordinates. If the attachment has a {@link #sequence}, the region may
     * be changed.
     * <p>
     * See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
     * Runtimes Guide.
     * @param worldVertices The output world vertices. Must have a length >= <code>offset</code> + 8.
     * @param offset The <code>worldVertices</code> index to begin writing values.
     * @param stride The number of <code>worldVertices</code> entries between the value pairs written. */
    computeWorldVertices(slot, worldVertices, offset, stride) {
        if (this.sequence != null)
            this.sequence.apply(slot, this);
        let bone = slot.bone;
        let vertexOffset = this.offset;
        let x = bone.worldX, y = bone.worldY;
        let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
        let offsetX = 0, offsetY = 0;
        offsetX = vertexOffset[0];
        offsetY = vertexOffset[1];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // br
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
        offset += stride;
        offsetX = vertexOffset[2];
        offsetY = vertexOffset[3];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // bl
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
        offset += stride;
        offsetX = vertexOffset[4];
        offsetY = vertexOffset[5];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // ul
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
        offset += stride;
        offsetX = vertexOffset[6];
        offsetY = vertexOffset[7];
        worldVertices[offset] = offsetX * a + offsetY * b + x; // ur
        worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
    }
    copy() {
        let copy = new RegionAttachment(this.name, this.path);
        copy.region = this.region;
        copy.x = this.x;
        copy.y = this.y;
        copy.scaleX = this.scaleX;
        copy.scaleY = this.scaleY;
        copy.rotation = this.rotation;
        copy.width = this.width;
        copy.height = this.height;
        Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
        Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
        copy.color.setFromColor(this.color);
        copy.sequence = this.sequence != null ? this.sequence.copy() : null;
        return copy;
    }
    static X1 = 0;
    static Y1 = 1;
    static C1R = 2;
    static C1G = 3;
    static C1B = 4;
    static C1A = 5;
    static U1 = 6;
    static V1 = 7;
    static X2 = 8;
    static Y2 = 9;
    static C2R = 10;
    static C2G = 11;
    static C2B = 12;
    static C2A = 13;
    static U2 = 14;
    static V2 = 15;
    static X3 = 16;
    static Y3 = 17;
    static C3R = 18;
    static C3G = 19;
    static C3B = 20;
    static C3A = 21;
    static U3 = 22;
    static V3 = 23;
    static X4 = 24;
    static Y4 = 25;
    static C4R = 26;
    static C4G = 27;
    static C4B = 28;
    static C4A = 29;
    static U4 = 30;
    static V4 = 31;
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** An {@link AttachmentLoader} that configures attachments using texture regions from an {@link TextureAtlas}.
 *
 * See [Loading skeleton data](http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data) in the
 * Spine Runtimes Guide. */
class AtlasAttachmentLoader {
    atlas;
    constructor(atlas) {
        this.atlas = atlas;
    }
    loadSequence(name, basePath, sequence) {
        let regions = sequence.regions;
        for (let i = 0, n = regions.length; i < n; i++) {
            let path = sequence.getPath(basePath, i);
            let region = this.atlas.findRegion(path);
            if (region == null)
                throw new Error("Region not found in atlas: " + path + " (sequence: " + name + ")");
            regions[i] = region;
        }
    }
    newRegionAttachment(skin, name, path, sequence) {
        let attachment = new RegionAttachment(name, path);
        if (sequence != null) {
            this.loadSequence(name, path, sequence);
        }
        else {
            let region = this.atlas.findRegion(path);
            if (!region)
                throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
            attachment.region = region;
        }
        return attachment;
    }
    newMeshAttachment(skin, name, path, sequence) {
        let attachment = new MeshAttachment(name, path);
        if (sequence != null) {
            this.loadSequence(name, path, sequence);
        }
        else {
            let region = this.atlas.findRegion(path);
            if (!region)
                throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
            attachment.region = region;
        }
        return attachment;
    }
    newBoundingBoxAttachment(skin, name) {
        return new BoundingBoxAttachment(name);
    }
    newPathAttachment(skin, name) {
        return new PathAttachment(name);
    }
    newPointAttachment(skin, name) {
        return new PointAttachment(name);
    }
    newClippingAttachment(skin, name) {
        return new ClippingAttachment(name);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link Bone}. */
class BoneData {
    /** The index of the bone in {@link Skeleton#getBones()}. */
    index = 0;
    /** The name of the bone, which is unique across all bones in the skeleton. */
    name;
    /** @returns May be null. */
    parent = null;
    /** The bone's length. */
    length = 0;
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local shearX. */
    shearX = 0;
    /** The local shearX. */
    shearY = 0;
    /** The transform mode for how parent world transforms affect this bone. */
    inherit = Inherit.Normal;
    /** When true, {@link Skeleton#updateWorldTransform()} only updates this bone if the {@link Skeleton#skin} contains this
      * bone.
      * @see Skin#bones */
    skinRequired = false;
    /** The color of the bone as it was in Spine. Available only when nonessential data was exported. Bones are not usually
     * rendered at runtime. */
    color = new Color();
    /** The bone icon as it was in Spine, or null if nonessential data was not exported. */
    icon;
    /** False if the bone was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = false;
    constructor(index, name, parent) {
        if (index < 0)
            throw new Error("index must be >= 0.");
        if (!name)
            throw new Error("name cannot be null.");
        this.index = index;
        this.name = name;
        this.parent = parent;
    }
}
/** Determines how a bone inherits world transforms from parent bones. */
var Inherit;
(function (Inherit) {
    Inherit[Inherit["Normal"] = 0] = "Normal";
    Inherit[Inherit["OnlyTranslation"] = 1] = "OnlyTranslation";
    Inherit[Inherit["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
    Inherit[Inherit["NoScale"] = 3] = "NoScale";
    Inherit[Inherit["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
})(Inherit || (Inherit = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores a bone's current pose.
 *
 * A bone has a local transform which is used to compute its world transform. A bone also has an applied transform, which is a
 * local transform that can be applied to compute the world transform. The local transform and applied transform may differ if a
 * constraint or application code modifies the world transform after it was computed from the local transform. */
class Bone {
    /** The bone's setup pose data. */
    data;
    /** The skeleton this bone belongs to. */
    skeleton;
    /** The parent bone, or null if this is the root bone. */
    parent = null;
    /** The immediate children of this bone. */
    children = new Array();
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 0;
    /** The local scaleY. */
    scaleY = 0;
    /** The local shearX. */
    shearX = 0;
    /** The local shearY. */
    shearY = 0;
    /** The applied local x translation. */
    ax = 0;
    /** The applied local y translation. */
    ay = 0;
    /** The applied local rotation in degrees, counter clockwise. */
    arotation = 0;
    /** The applied local scaleX. */
    ascaleX = 0;
    /** The applied local scaleY. */
    ascaleY = 0;
    /** The applied local shearX. */
    ashearX = 0;
    /** The applied local shearY. */
    ashearY = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link #updateAppliedTransform()} should be called. */
    a = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link #updateAppliedTransform()} should be called. */
    b = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link #updateAppliedTransform()} should be called. */
    c = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link #updateAppliedTransform()} should be called. */
    d = 0;
    /** The world X position. If changed, {@link #updateAppliedTransform()} should be called. */
    worldY = 0;
    /** The world Y position. If changed, {@link #updateAppliedTransform()} should be called. */
    worldX = 0;
    inherit = Inherit.Normal;
    sorted = false;
    active = false;
    /** @param parent May be null. */
    constructor(data, skeleton, parent) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.skeleton = skeleton;
        this.parent = parent;
        this.setToSetupPose();
    }
    /** Returns false when the bone has not been computed because {@link BoneData#skinRequired} is true and the
      * {@link Skeleton#skin active skin} does not {@link Skin#bones contain} this bone. */
    isActive() {
        return this.active;
    }
    /** Computes the world transform using the parent bone and this bone's local applied transform. */
    update(physics) {
        this.updateWorldTransformWith(this.ax, this.ay, this.arotation, this.ascaleX, this.ascaleY, this.ashearX, this.ashearY);
    }
    /** Computes the world transform using the parent bone and this bone's local transform.
     *
     * See {@link #updateWorldTransformWith()}. */
    updateWorldTransform() {
        this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
    }
    /** Computes the world transform using the parent bone and the specified local transform. The applied transform is set to the
     * specified local transform. Child bones are not updated.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide. */
    updateWorldTransformWith(x, y, rotation, scaleX, scaleY, shearX, shearY) {
        this.ax = x;
        this.ay = y;
        this.arotation = rotation;
        this.ascaleX = scaleX;
        this.ascaleY = scaleY;
        this.ashearX = shearX;
        this.ashearY = shearY;
        let parent = this.parent;
        if (!parent) { // Root bone.
            let skeleton = this.skeleton;
            const sx = skeleton.scaleX, sy = skeleton.scaleY;
            const rx = (rotation + shearX) * MathUtils.degRad;
            const ry = (rotation + 90 + shearY) * MathUtils.degRad;
            this.a = Math.cos(rx) * scaleX * sx;
            this.b = Math.cos(ry) * scaleY * sx;
            this.c = Math.sin(rx) * scaleX * sy;
            this.d = Math.sin(ry) * scaleY * sy;
            this.worldX = x * sx + skeleton.x;
            this.worldY = y * sy + skeleton.y;
            return;
        }
        let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
        this.worldX = pa * x + pb * y + parent.worldX;
        this.worldY = pc * x + pd * y + parent.worldY;
        switch (this.inherit) {
            case Inherit.Normal: {
                const rx = (rotation + shearX) * MathUtils.degRad;
                const ry = (rotation + 90 + shearY) * MathUtils.degRad;
                const la = Math.cos(rx) * scaleX;
                const lb = Math.cos(ry) * scaleY;
                const lc = Math.sin(rx) * scaleX;
                const ld = Math.sin(ry) * scaleY;
                this.a = pa * la + pb * lc;
                this.b = pa * lb + pb * ld;
                this.c = pc * la + pd * lc;
                this.d = pc * lb + pd * ld;
                return;
            }
            case Inherit.OnlyTranslation: {
                const rx = (rotation + shearX) * MathUtils.degRad;
                const ry = (rotation + 90 + shearY) * MathUtils.degRad;
                this.a = Math.cos(rx) * scaleX;
                this.b = Math.cos(ry) * scaleY;
                this.c = Math.sin(rx) * scaleX;
                this.d = Math.sin(ry) * scaleY;
                break;
            }
            case Inherit.NoRotationOrReflection: {
                let sx = 1 / this.skeleton.scaleX, sy = 1 / this.skeleton.scaleY;
                pa *= sx;
                pc *= sy;
                let s = pa * pa + pc * pc;
                let prx = 0;
                if (s > 0.0001) {
                    s = Math.abs(pa * pd * sy - pb * sx * pc) / s;
                    pb = pc * s;
                    pd = pa * s;
                    prx = Math.atan2(pc, pa) * MathUtils.radDeg;
                }
                else {
                    pa = 0;
                    pc = 0;
                    prx = 90 - Math.atan2(pd, pb) * MathUtils.radDeg;
                }
                const rx = (rotation + shearX - prx) * MathUtils.degRad;
                const ry = (rotation + shearY - prx + 90) * MathUtils.degRad;
                const la = Math.cos(rx) * scaleX;
                const lb = Math.cos(ry) * scaleY;
                const lc = Math.sin(rx) * scaleX;
                const ld = Math.sin(ry) * scaleY;
                this.a = pa * la - pb * lc;
                this.b = pa * lb - pb * ld;
                this.c = pc * la + pd * lc;
                this.d = pc * lb + pd * ld;
                break;
            }
            case Inherit.NoScale:
            case Inherit.NoScaleOrReflection: {
                rotation *= MathUtils.degRad;
                const cos = Math.cos(rotation), sin = Math.sin(rotation);
                let za = (pa * cos + pb * sin) / this.skeleton.scaleX;
                let zc = (pc * cos + pd * sin) / this.skeleton.scaleY;
                let s = Math.sqrt(za * za + zc * zc);
                if (s > 0.00001)
                    s = 1 / s;
                za *= s;
                zc *= s;
                s = Math.sqrt(za * za + zc * zc);
                if (this.inherit == Inherit.NoScale
                    && (pa * pd - pb * pc < 0) != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0))
                    s = -s;
                rotation = Math.PI / 2 + Math.atan2(zc, za);
                const zb = Math.cos(rotation) * s;
                const zd = Math.sin(rotation) * s;
                shearX *= MathUtils.degRad;
                shearY = (90 + shearY) * MathUtils.degRad;
                const la = Math.cos(shearX) * scaleX;
                const lb = Math.cos(shearY) * scaleY;
                const lc = Math.sin(shearX) * scaleX;
                const ld = Math.sin(shearY) * scaleY;
                this.a = za * la + zb * lc;
                this.b = za * lb + zb * ld;
                this.c = zc * la + zd * lc;
                this.d = zc * lb + zd * ld;
                break;
            }
        }
        this.a *= this.skeleton.scaleX;
        this.b *= this.skeleton.scaleX;
        this.c *= this.skeleton.scaleY;
        this.d *= this.skeleton.scaleY;
    }
    /** Sets this bone's local transform to the setup pose. */
    setToSetupPose() {
        let data = this.data;
        this.x = data.x;
        this.y = data.y;
        this.rotation = data.rotation;
        this.scaleX = data.scaleX;
        this.scaleY = data.scaleY;
        this.shearX = data.shearX;
        this.shearY = data.shearY;
        this.inherit = data.inherit;
    }
    /** Computes the applied transform values from the world transform.
     *
     * If the world transform is modified (by a constraint, {@link #rotateWorld(float)}, etc) then this method should be called so
     * the applied transform matches the world transform. The applied transform may be needed by other code (eg to apply other
     * constraints).
     *
     * Some information is ambiguous in the world transform, such as -1,-1 scale versus 180 rotation. The applied transform after
     * calling this method is equivalent to the local transform used to compute the world transform, but may not be identical. */
    updateAppliedTransform() {
        let parent = this.parent;
        if (!parent) {
            this.ax = this.worldX - this.skeleton.x;
            this.ay = this.worldY - this.skeleton.y;
            this.arotation = Math.atan2(this.c, this.a) * MathUtils.radDeg;
            this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c);
            this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d);
            this.ashearX = 0;
            this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * MathUtils.radDeg;
            return;
        }
        let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
        let pid = 1 / (pa * pd - pb * pc);
        let ia = pd * pid, ib = pb * pid, ic = pc * pid, id = pa * pid;
        let dx = this.worldX - parent.worldX, dy = this.worldY - parent.worldY;
        this.ax = (dx * ia - dy * ib);
        this.ay = (dy * id - dx * ic);
        let ra, rb, rc, rd;
        if (this.inherit == Inherit.OnlyTranslation) {
            ra = this.a;
            rb = this.b;
            rc = this.c;
            rd = this.d;
        }
        else {
            switch (this.inherit) {
                case Inherit.NoRotationOrReflection: {
                    let s = Math.abs(pa * pd - pb * pc) / (pa * pa + pc * pc);
                    pb = -pc * this.skeleton.scaleX * s / this.skeleton.scaleY;
                    pd = pa * this.skeleton.scaleY * s / this.skeleton.scaleX;
                    pid = 1 / (pa * pd - pb * pc);
                    ia = pd * pid;
                    ib = pb * pid;
                    break;
                }
                case Inherit.NoScale:
                case Inherit.NoScaleOrReflection:
                    let cos = MathUtils.cosDeg(this.rotation), sin = MathUtils.sinDeg(this.rotation);
                    pa = (pa * cos + pb * sin) / this.skeleton.scaleX;
                    pc = (pc * cos + pd * sin) / this.skeleton.scaleY;
                    let s = Math.sqrt(pa * pa + pc * pc);
                    if (s > 0.00001)
                        s = 1 / s;
                    pa *= s;
                    pc *= s;
                    s = Math.sqrt(pa * pa + pc * pc);
                    if (this.inherit == Inherit.NoScale && pid < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0))
                        s = -s;
                    let r = MathUtils.PI / 2 + Math.atan2(pc, pa);
                    pb = Math.cos(r) * s;
                    pd = Math.sin(r) * s;
                    pid = 1 / (pa * pd - pb * pc);
                    ia = pd * pid;
                    ib = pb * pid;
                    ic = pc * pid;
                    id = pa * pid;
            }
            ra = ia * this.a - ib * this.c;
            rb = ia * this.b - ib * this.d;
            rc = id * this.c - ic * this.a;
            rd = id * this.d - ic * this.b;
        }
        this.ashearX = 0;
        this.ascaleX = Math.sqrt(ra * ra + rc * rc);
        if (this.ascaleX > 0.0001) {
            let det = ra * rd - rb * rc;
            this.ascaleY = det / this.ascaleX;
            this.ashearY = -Math.atan2(ra * rb + rc * rd, det) * MathUtils.radDeg;
            this.arotation = Math.atan2(rc, ra) * MathUtils.radDeg;
        }
        else {
            this.ascaleX = 0;
            this.ascaleY = Math.sqrt(rb * rb + rd * rd);
            this.ashearY = 0;
            this.arotation = 90 - Math.atan2(rd, rb) * MathUtils.radDeg;
        }
    }
    /** The world rotation for the X axis, calculated using {@link #a} and {@link #c}. */
    getWorldRotationX() {
        return Math.atan2(this.c, this.a) * MathUtils.radDeg;
    }
    /** The world rotation for the Y axis, calculated using {@link #b} and {@link #d}. */
    getWorldRotationY() {
        return Math.atan2(this.d, this.b) * MathUtils.radDeg;
    }
    /** The magnitude (always positive) of the world scale X, calculated using {@link #a} and {@link #c}. */
    getWorldScaleX() {
        return Math.sqrt(this.a * this.a + this.c * this.c);
    }
    /** The magnitude (always positive) of the world scale Y, calculated using {@link #b} and {@link #d}. */
    getWorldScaleY() {
        return Math.sqrt(this.b * this.b + this.d * this.d);
    }
    /** Transforms a point from world coordinates to the bone's local coordinates. */
    worldToLocal(world) {
        let invDet = 1 / (this.a * this.d - this.b * this.c);
        let x = world.x - this.worldX, y = world.y - this.worldY;
        world.x = x * this.d * invDet - y * this.b * invDet;
        world.y = y * this.a * invDet - x * this.c * invDet;
        return world;
    }
    /** Transforms a point from the bone's local coordinates to world coordinates. */
    localToWorld(local) {
        let x = local.x, y = local.y;
        local.x = x * this.a + y * this.b + this.worldX;
        local.y = x * this.c + y * this.d + this.worldY;
        return local;
    }
    /** Transforms a point from world coordinates to the parent bone's local coordinates. */
    worldToParent(world) {
        if (world == null)
            throw new Error("world cannot be null.");
        return this.parent == null ? world : this.parent.worldToLocal(world);
    }
    /** Transforms a point from the parent bone's coordinates to world coordinates. */
    parentToWorld(world) {
        if (world == null)
            throw new Error("world cannot be null.");
        return this.parent == null ? world : this.parent.localToWorld(world);
    }
    /** Transforms a world rotation to a local rotation. */
    worldToLocalRotation(worldRotation) {
        let sin = MathUtils.sinDeg(worldRotation), cos = MathUtils.cosDeg(worldRotation);
        return Math.atan2(this.a * sin - this.c * cos, this.d * cos - this.b * sin) * MathUtils.radDeg + this.rotation - this.shearX;
    }
    /** Transforms a local rotation to a world rotation. */
    localToWorldRotation(localRotation) {
        localRotation -= this.rotation - this.shearX;
        let sin = MathUtils.sinDeg(localRotation), cos = MathUtils.cosDeg(localRotation);
        return Math.atan2(cos * this.c + sin * this.d, cos * this.a + sin * this.b) * MathUtils.radDeg;
    }
    /** Rotates the world transform the specified amount.
     * <p>
     * After changes are made to the world transform, {@link #updateAppliedTransform()} should be called and
     * {@link #update(Physics)} will need to be called on any child bones, recursively. */
    rotateWorld(degrees) {
        degrees *= MathUtils.degRad;
        const sin = Math.sin(degrees), cos = Math.cos(degrees);
        const ra = this.a, rb = this.b;
        this.a = cos * ra - sin * this.c;
        this.b = cos * rb - sin * this.d;
        this.c = sin * ra + cos * this.c;
        this.d = sin * rb + cos * this.d;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** The base class for all constraint datas. */
class ConstraintData {
    name;
    order;
    skinRequired;
    constructor(name, order, skinRequired) {
        this.name = name;
        this.order = order;
        this.skinRequired = skinRequired;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class AssetManagerBase {
    pathPrefix = "";
    textureLoader;
    downloader;
    assets = {};
    errors = {};
    toLoad = 0;
    loaded = 0;
    constructor(textureLoader, pathPrefix = "", downloader = new Downloader()) {
        this.textureLoader = textureLoader;
        this.pathPrefix = pathPrefix;
        this.downloader = downloader;
    }
    start(path) {
        this.toLoad++;
        return this.pathPrefix + path;
    }
    success(callback, path, asset) {
        this.toLoad--;
        this.loaded++;
        this.assets[path] = asset;
        if (callback)
            callback(path, asset);
    }
    error(callback, path, message) {
        this.toLoad--;
        this.loaded++;
        this.errors[path] = message;
        if (callback)
            callback(path, message);
    }
    loadAll() {
        let promise = new Promise((resolve, reject) => {
            let check = () => {
                if (this.isLoadingComplete()) {
                    if (this.hasErrors())
                        reject(this.errors);
                    else
                        resolve(this);
                    return;
                }
                requestAnimationFrame(check);
            };
            requestAnimationFrame(check);
        });
        return promise;
    }
    setRawDataURI(path, data) {
        this.downloader.rawDataUris[this.pathPrefix + path] = data;
    }
    loadBinary(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        this.downloader.downloadBinary(path, (data) => {
            this.success(success, path, data);
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load binary ${path}: status ${status}, ${responseText}`);
        });
    }
    loadText(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        this.downloader.downloadText(path, (data) => {
            this.success(success, path, data);
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load text ${path}: status ${status}, ${responseText}`);
        });
    }
    loadJson(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        this.downloader.downloadJson(path, (data) => {
            this.success(success, path, data);
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load JSON ${path}: status ${status}, ${responseText}`);
        });
    }
    loadTexture(path, success = () => { }, error = () => { }) {
        path = this.start(path);
        let isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
        let isWebWorker = !isBrowser; // && typeof importScripts !== 'undefined';
        if (isWebWorker) {
            fetch(path, { mode: "cors" }).then((response) => {
                if (response.ok)
                    return response.blob();
                this.error(error, path, `Couldn't load image: ${path}`);
                return null;
            }).then((blob) => {
                return blob ? createImageBitmap(blob, { premultiplyAlpha: "none", colorSpaceConversion: "none" }) : null;
            }).then((bitmap) => {
                if (bitmap)
                    this.success(success, path, this.textureLoader(bitmap));
            });
        }
        else {
            let image = new Image();
            image.crossOrigin = "anonymous";
            image.onload = () => {
                this.success(success, path, this.textureLoader(image));
            };
            image.onerror = () => {
                this.error(error, path, `Couldn't load image: ${path}`);
            };
            if (this.downloader.rawDataUris[path])
                path = this.downloader.rawDataUris[path];
            image.src = path;
        }
    }
    loadTextureAtlas(path, success = () => { }, error = () => { }, fileAlias) {
        let index = path.lastIndexOf("/");
        let parent = index >= 0 ? path.substring(0, index + 1) : "";
        path = this.start(path);
        this.downloader.downloadText(path, (atlasText) => {
            try {
                let atlas = new TextureAtlas(atlasText);
                let toLoad = atlas.pages.length, abort = false;
                for (let page of atlas.pages) {
                    this.loadTexture(!fileAlias ? parent + page.name : fileAlias[page.name], (imagePath, texture) => {
                        if (!abort) {
                            page.setTexture(texture);
                            if (--toLoad == 0)
                                this.success(success, path, atlas);
                        }
                    }, (imagePath, message) => {
                        if (!abort)
                            this.error(error, path, `Couldn't load texture atlas ${path} page image: ${imagePath}`);
                        abort = true;
                    });
                }
            }
            catch (e) {
                this.error(error, path, `Couldn't parse texture atlas ${path}: ${e.message}`);
            }
        }, (status, responseText) => {
            this.error(error, path, `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`);
        });
    }
    get(path) {
        return this.assets[this.pathPrefix + path];
    }
    require(path) {
        path = this.pathPrefix + path;
        let asset = this.assets[path];
        if (asset)
            return asset;
        let error = this.errors[path];
        throw Error("Asset not found: " + path + (error ? "\n" + error : ""));
    }
    remove(path) {
        path = this.pathPrefix + path;
        let asset = this.assets[path];
        if (asset.dispose)
            asset.dispose();
        delete this.assets[path];
        return asset;
    }
    removeAll() {
        for (let key in this.assets) {
            let asset = this.assets[key];
            if (asset.dispose)
                asset.dispose();
        }
        this.assets = {};
    }
    isLoadingComplete() {
        return this.toLoad == 0;
    }
    getToLoad() {
        return this.toLoad;
    }
    getLoaded() {
        return this.loaded;
    }
    dispose() {
        this.removeAll();
    }
    hasErrors() {
        return Object.keys(this.errors).length > 0;
    }
    getErrors() {
        return this.errors;
    }
}
class Downloader {
    callbacks = {};
    rawDataUris = {};
    dataUriToString(dataUri) {
        if (!dataUri.startsWith("data:")) {
            throw new Error("Not a data URI.");
        }
        let base64Idx = dataUri.indexOf("base64,");
        if (base64Idx != -1) {
            base64Idx += "base64,".length;
            return atob(dataUri.substr(base64Idx));
        }
        else {
            return dataUri.substr(dataUri.indexOf(",") + 1);
        }
    }
    base64ToUint8Array(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes;
    }
    dataUriToUint8Array(dataUri) {
        if (!dataUri.startsWith("data:")) {
            throw new Error("Not a data URI.");
        }
        let base64Idx = dataUri.indexOf("base64,");
        if (base64Idx == -1)
            throw new Error("Not a binary data URI.");
        base64Idx += "base64,".length;
        return this.base64ToUint8Array(dataUri.substr(base64Idx));
    }
    downloadText(url, success, error) {
        if (this.start(url, success, error))
            return;
        if (this.rawDataUris[url]) {
            try {
                let dataUri = this.rawDataUris[url];
                this.finish(url, 200, this.dataUriToString(dataUri));
            }
            catch (e) {
                this.finish(url, 400, JSON.stringify(e));
            }
            return;
        }
        let request = new XMLHttpRequest();
        request.overrideMimeType("text/html");
        request.open("GET", url, true);
        let done = () => {
            this.finish(url, request.status, request.responseText);
        };
        request.onload = done;
        request.onerror = done;
        request.send();
    }
    downloadJson(url, success, error) {
        this.downloadText(url, (data) => {
            success(JSON.parse(data));
        }, error);
    }
    downloadBinary(url, success, error) {
        if (this.start(url, success, error))
            return;
        if (this.rawDataUris[url]) {
            try {
                let dataUri = this.rawDataUris[url];
                this.finish(url, 200, this.dataUriToUint8Array(dataUri));
            }
            catch (e) {
                this.finish(url, 400, JSON.stringify(e));
            }
            return;
        }
        let request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        let onerror = () => {
            this.finish(url, request.status, request.response);
        };
        request.onload = () => {
            if (request.status == 200 || request.status == 0)
                this.finish(url, 200, new Uint8Array(request.response));
            else
                onerror();
        };
        request.onerror = onerror;
        request.send();
    }
    start(url, success, error) {
        let callbacks = this.callbacks[url];
        try {
            if (callbacks)
                return true;
            this.callbacks[url] = callbacks = [];
        }
        finally {
            callbacks.push(success, error);
        }
    }
    finish(url, status, data) {
        let callbacks = this.callbacks[url];
        delete this.callbacks[url];
        let args = status == 200 || status == 0 ? [data] : [status, data];
        for (let i = args.length - 1, n = callbacks.length; i < n; i += 2)
            callbacks[i].apply(null, args);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose values for an {@link Event}.
 *
 * See Timeline {@link Timeline#apply()},
 * AnimationStateListener {@link AnimationStateListener#event()}, and
 * [Events](http://esotericsoftware.com/spine-events) in the Spine User Guide. */
class Event {
    data;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    time = 0;
    volume = 0;
    balance = 0;
    constructor(time, data) {
        if (!data)
            throw new Error("data cannot be null.");
        this.time = time;
        this.data = data;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose values for an {@link Event}.
 *
 * See [Events](http://esotericsoftware.com/spine-events) in the Spine User Guide. */
class EventData {
    name;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    audioPath = null;
    volume = 0;
    balance = 0;
    constructor(name) {
        this.name = name;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for an IK constraint. An IK constraint adjusts the rotation of 1 or 2 constrained bones so the tip of
 * the last bone is as close to the target bone as possible.
 *
 * See [IK constraints](http://esotericsoftware.com/spine-ik-constraints) in the Spine User Guide. */
class IkConstraint {
    /** The IK constraint's setup pose data. */
    data;
    /** The bones that will be modified by this IK constraint. */
    bones;
    /** The bone that is the IK target. */
    target;
    /** Controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** When true and only a single bone is being constrained, if the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true, if the target is out of range, the parent bone is scaled to reach it. If more than one bone is being constrained
     * and the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotations. */
    mix = 1;
    /** For two bone IK, the distance from the maximum reach of the bones that rotation will slow. */
    softness = 0;
    active = false;
    constructor(data, skeleton) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0; i < data.bones.length; i++) {
            let bone = skeleton.findBone(data.bones[i].name);
            if (!bone)
                throw new Error(`Couldn't find bone ${data.bones[i].name}`);
            this.bones.push(bone);
        }
        let target = skeleton.findBone(data.target.name);
        if (!target)
            throw new Error(`Couldn't find bone ${data.target.name}`);
        this.target = target;
        this.mix = data.mix;
        this.softness = data.softness;
        this.bendDirection = data.bendDirection;
        this.compress = data.compress;
        this.stretch = data.stretch;
    }
    isActive() {
        return this.active;
    }
    setToSetupPose() {
        const data = this.data;
        this.mix = data.mix;
        this.softness = data.softness;
        this.bendDirection = data.bendDirection;
        this.compress = data.compress;
        this.stretch = data.stretch;
    }
    update(physics) {
        if (this.mix == 0)
            return;
        let target = this.target;
        let bones = this.bones;
        switch (bones.length) {
            case 1:
                this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
                break;
            case 2:
                this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.data.uniform, this.softness, this.mix);
                break;
        }
    }
    /** Applies 1 bone IK. The target is specified in the world coordinate system. */
    apply1(bone, targetX, targetY, compress, stretch, uniform, alpha) {
        let p = bone.parent;
        if (!p)
            throw new Error("IK bone must have parent.");
        let pa = p.a, pb = p.b, pc = p.c, pd = p.d;
        let rotationIK = -bone.ashearX - bone.arotation, tx = 0, ty = 0;
        switch (bone.inherit) {
            case Inherit.OnlyTranslation:
                tx = (targetX - bone.worldX) * MathUtils.signum(bone.skeleton.scaleX);
                ty = (targetY - bone.worldY) * MathUtils.signum(bone.skeleton.scaleY);
                break;
            case Inherit.NoRotationOrReflection:
                let s = Math.abs(pa * pd - pb * pc) / Math.max(0.0001, pa * pa + pc * pc);
                let sa = pa / bone.skeleton.scaleX;
                let sc = pc / bone.skeleton.scaleY;
                pb = -sc * s * bone.skeleton.scaleX;
                pd = sa * s * bone.skeleton.scaleY;
                rotationIK += Math.atan2(sc, sa) * MathUtils.radDeg;
            // Fall through
            default:
                let x = targetX - p.worldX, y = targetY - p.worldY;
                let d = pa * pd - pb * pc;
                if (Math.abs(d) <= 0.0001) {
                    tx = 0;
                    ty = 0;
                }
                else {
                    tx = (x * pd - y * pb) / d - bone.ax;
                    ty = (y * pa - x * pc) / d - bone.ay;
                }
        }
        rotationIK += Math.atan2(ty, tx) * MathUtils.radDeg;
        if (bone.ascaleX < 0)
            rotationIK += 180;
        if (rotationIK > 180)
            rotationIK -= 360;
        else if (rotationIK < -180)
            rotationIK += 360;
        let sx = bone.ascaleX, sy = bone.ascaleY;
        if (compress || stretch) {
            switch (bone.inherit) {
                case Inherit.NoScale:
                case Inherit.NoScaleOrReflection:
                    tx = targetX - bone.worldX;
                    ty = targetY - bone.worldY;
            }
            const b = bone.data.length * sx;
            if (b > 0.0001) {
                const dd = tx * tx + ty * ty;
                if ((compress && dd < b * b) || (stretch && dd > b * b)) {
                    const s = (Math.sqrt(dd) / b - 1) * alpha + 1;
                    sx *= s;
                    if (uniform)
                        sy *= s;
                }
            }
        }
        bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, sx, sy, bone.ashearX, bone.ashearY);
    }
    /** Applies 2 bone IK. The target is specified in the world coordinate system.
     * @param child A direct descendant of the parent bone. */
    apply2(parent, child, targetX, targetY, bendDir, stretch, uniform, softness, alpha) {
        if (parent.inherit != Inherit.Normal || child.inherit != Inherit.Normal)
            return;
        let px = parent.ax, py = parent.ay, psx = parent.ascaleX, psy = parent.ascaleY, sx = psx, sy = psy, csx = child.ascaleX;
        let os1 = 0, os2 = 0, s2 = 0;
        if (psx < 0) {
            psx = -psx;
            os1 = 180;
            s2 = -1;
        }
        else {
            os1 = 0;
            s2 = 1;
        }
        if (psy < 0) {
            psy = -psy;
            s2 = -s2;
        }
        if (csx < 0) {
            csx = -csx;
            os2 = 180;
        }
        else
            os2 = 0;
        let cx = child.ax, cy = 0, cwx = 0, cwy = 0, a = parent.a, b = parent.b, c = parent.c, d = parent.d;
        let u = Math.abs(psx - psy) <= 0.0001;
        if (!u || stretch) {
            cy = 0;
            cwx = a * cx + parent.worldX;
            cwy = c * cx + parent.worldY;
        }
        else {
            cy = child.ay;
            cwx = a * cx + b * cy + parent.worldX;
            cwy = c * cx + d * cy + parent.worldY;
        }
        let pp = parent.parent;
        if (!pp)
            throw new Error("IK parent must itself have a parent.");
        a = pp.a;
        b = pp.b;
        c = pp.c;
        d = pp.d;
        let id = a * d - b * c, x = cwx - pp.worldX, y = cwy - pp.worldY;
        id = Math.abs(id) <= 0.0001 ? 0 : 1 / id;
        let dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
        let l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1, a2;
        if (l1 < 0.0001) {
            this.apply1(parent, targetX, targetY, false, stretch, false, alpha);
            child.updateWorldTransformWith(cx, cy, 0, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
            return;
        }
        x = targetX - pp.worldX;
        y = targetY - pp.worldY;
        let tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py;
        let dd = tx * tx + ty * ty;
        if (softness != 0) {
            softness *= psx * (csx + 1) * 0.5;
            let td = Math.sqrt(dd), sd = td - l1 - l2 * psx + softness;
            if (sd > 0) {
                let p = Math.min(1, sd / (softness * 2)) - 1;
                p = (sd - softness * (1 - p * p)) / td;
                tx -= p * tx;
                ty -= p * ty;
                dd = tx * tx + ty * ty;
            }
        }
        outer: if (u) {
            l2 *= psx;
            let cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
            if (cos < -1) {
                cos = -1;
                a2 = Math.PI * bendDir;
            }
            else if (cos > 1) {
                cos = 1;
                a2 = 0;
                if (stretch) {
                    a = (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
                    sx *= a;
                    if (uniform)
                        sy *= a;
                }
            }
            else
                a2 = Math.acos(cos) * bendDir;
            a = l1 + l2 * cos;
            b = l2 * Math.sin(a2);
            a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
        }
        else {
            a = psx * l2;
            b = psy * l2;
            let aa = a * a, bb = b * b, ta = Math.atan2(ty, tx);
            c = bb * l1 * l1 + aa * dd - aa * bb;
            let c1 = -2 * bb * l1, c2 = bb - aa;
            d = c1 * c1 - 4 * c2 * c;
            if (d >= 0) {
                let q = Math.sqrt(d);
                if (c1 < 0)
                    q = -q;
                q = -(c1 + q) * 0.5;
                let r0 = q / c2, r1 = c / q;
                let r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
                r0 = dd - r * r;
                if (r0 >= 0) {
                    y = Math.sqrt(r0) * bendDir;
                    a1 = ta - Math.atan2(y, r);
                    a2 = Math.atan2(y / psy, (r - l1) / psx);
                    break outer;
                }
            }
            let minAngle = MathUtils.PI, minX = l1 - a, minDist = minX * minX, minY = 0;
            let maxAngle = 0, maxX = l1 + a, maxDist = maxX * maxX, maxY = 0;
            c = -a * l1 / (aa - bb);
            if (c >= -1 && c <= 1) {
                c = Math.acos(c);
                x = a * Math.cos(c) + l1;
                y = b * Math.sin(c);
                d = x * x + y * y;
                if (d < minDist) {
                    minAngle = c;
                    minDist = d;
                    minX = x;
                    minY = y;
                }
                if (d > maxDist) {
                    maxAngle = c;
                    maxDist = d;
                    maxX = x;
                    maxY = y;
                }
            }
            if (dd <= (minDist + maxDist) * 0.5) {
                a1 = ta - Math.atan2(minY * bendDir, minX);
                a2 = minAngle * bendDir;
            }
            else {
                a1 = ta - Math.atan2(maxY * bendDir, maxX);
                a2 = maxAngle * bendDir;
            }
        }
        let os = Math.atan2(cy, cx) * s2;
        let rotation = parent.arotation;
        a1 = (a1 - os) * MathUtils.radDeg + os1 - rotation;
        if (a1 > 180)
            a1 -= 360;
        else if (a1 < -180) //
            a1 += 360;
        parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, sy, 0, 0);
        rotation = child.arotation;
        a2 = ((a2 + os) * MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
        if (a2 > 180)
            a2 -= 360;
        else if (a2 < -180) //
            a2 += 360;
        child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for an {@link IkConstraint}.
 * <p>
 * See [IK constraints](http://esotericsoftware.com/spine-ik-constraints) in the Spine User Guide. */
class IkConstraintData extends ConstraintData {
    /** The bones that are constrained by this IK constraint. */
    bones = new Array();
    /** The bone that is the IK target. */
    _target = null;
    set target(boneData) { this._target = boneData; }
    get target() {
        if (!this._target)
            throw new Error("BoneData not set.");
        else
            return this._target;
    }
    /** Controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** When true and only a single bone is being constrained, if the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true, if the target is out of range, the parent bone is scaled to reach it. If more than one bone is being constrained
     * and the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** When true, only a single bone is being constrained, and {@link #getCompress()} or {@link #getStretch()} is used, the bone
     * is scaled on both the X and Y axes. */
    uniform = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotations. */
    mix = 0;
    /** For two bone IK, the distance from the maximum reach of the bones that rotation will slow. */
    softness = 0;
    constructor(name) {
        super(name, 0, false);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link PathConstraint}.
 *
 * See [path constraints](http://esotericsoftware.com/spine-path-constraints) in the Spine User Guide. */
class PathConstraintData extends ConstraintData {
    /** The bones that will be modified by this path constraint. */
    bones = new Array();
    /** The slot whose path attachment will be used to constrained the bones. */
    _target = null;
    set target(slotData) { this._target = slotData; }
    get target() {
        if (!this._target)
            throw new Error("SlotData not set.");
        else
            return this._target;
    }
    /** The mode for positioning the first bone on the path. */
    positionMode = PositionMode.Fixed;
    /** The mode for positioning the bones after the first bone on the path. */
    spacingMode = SpacingMode.Fixed;
    /** The mode for adjusting the rotation of the bones. */
    rotateMode = RotateMode.Chain;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    constructor(name) {
        super(name, 0, false);
    }
}
/** Controls how the first bone is positioned along the path.
 *
 * See [position](http://esotericsoftware.com/spine-path-constraints#Position) in the Spine User Guide. */
var PositionMode;
(function (PositionMode) {
    PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
    PositionMode[PositionMode["Percent"] = 1] = "Percent";
})(PositionMode || (PositionMode = {}));
/** Controls how bones after the first bone are positioned along the path.
 *
 * See [spacing](http://esotericsoftware.com/spine-path-constraints#Spacing) in the Spine User Guide. */
var SpacingMode;
(function (SpacingMode) {
    SpacingMode[SpacingMode["Length"] = 0] = "Length";
    SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
    SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
    SpacingMode[SpacingMode["Proportional"] = 3] = "Proportional";
})(SpacingMode || (SpacingMode = {}));
/** Controls how bones are rotated, translated, and scaled to match the path.
 *
 * See [rotate mix](http://esotericsoftware.com/spine-path-constraints#Rotate-mix) in the Spine User Guide. */
var RotateMode;
(function (RotateMode) {
    RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
    RotateMode[RotateMode["Chain"] = 1] = "Chain";
    RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
})(RotateMode || (RotateMode = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a path constraint. A path constraint adjusts the rotation, translation, and scale of the
 * constrained bones so they follow a {@link PathAttachment}.
 *
 * See [Path constraints](http://esotericsoftware.com/spine-path-constraints) in the Spine User Guide. */
class PathConstraint {
    static NONE = -1;
    static BEFORE = -2;
    static AFTER = -3;
    static epsilon = 0.00001;
    /** The path constraint's setup pose data. */
    data;
    /** The bones that will be modified by this path constraint. */
    bones;
    /** The slot whose path attachment will be used to constrained the bones. */
    target;
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    spaces = new Array();
    positions = new Array();
    world = new Array();
    curves = new Array();
    lengths = new Array();
    segments = new Array();
    active = false;
    constructor(data, skeleton) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0, n = data.bones.length; i < n; i++) {
            let bone = skeleton.findBone(data.bones[i].name);
            if (!bone)
                throw new Error(`Couldn't find bone ${data.bones[i].name}.`);
            this.bones.push(bone);
        }
        let target = skeleton.findSlot(data.target.name);
        if (!target)
            throw new Error(`Couldn't find target bone ${data.target.name}`);
        this.target = target;
        this.position = data.position;
        this.spacing = data.spacing;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
    }
    isActive() {
        return this.active;
    }
    setToSetupPose() {
        const data = this.data;
        this.position = data.position;
        this.spacing = data.spacing;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
    }
    update(physics) {
        let attachment = this.target.getAttachment();
        if (!(attachment instanceof PathAttachment))
            return;
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY;
        if (mixRotate == 0 && mixX == 0 && mixY == 0)
            return;
        let data = this.data;
        let tangents = data.rotateMode == RotateMode.Tangent, scale = data.rotateMode == RotateMode.ChainScale;
        let bones = this.bones;
        let boneCount = bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
        let spaces = Utils.setArraySize(this.spaces, spacesCount), lengths = scale ? this.lengths = Utils.setArraySize(this.lengths, boneCount) : [];
        let spacing = this.spacing;
        switch (data.spacingMode) {
            case SpacingMode.Percent:
                if (scale) {
                    for (let i = 0, n = spacesCount - 1; i < n; i++) {
                        let bone = bones[i];
                        let setupLength = bone.data.length;
                        let x = setupLength * bone.a, y = setupLength * bone.c;
                        lengths[i] = Math.sqrt(x * x + y * y);
                    }
                }
                Utils.arrayFill(spaces, 1, spacesCount, spacing);
                break;
            case SpacingMode.Proportional:
                let sum = 0;
                for (let i = 0, n = spacesCount - 1; i < n;) {
                    let bone = bones[i];
                    let setupLength = bone.data.length;
                    if (setupLength < PathConstraint.epsilon) {
                        if (scale)
                            lengths[i] = 0;
                        spaces[++i] = spacing;
                    }
                    else {
                        let x = setupLength * bone.a, y = setupLength * bone.c;
                        let length = Math.sqrt(x * x + y * y);
                        if (scale)
                            lengths[i] = length;
                        spaces[++i] = length;
                        sum += length;
                    }
                }
                if (sum > 0) {
                    sum = spacesCount / sum * spacing;
                    for (let i = 1; i < spacesCount; i++)
                        spaces[i] *= sum;
                }
                break;
            default:
                let lengthSpacing = data.spacingMode == SpacingMode.Length;
                for (let i = 0, n = spacesCount - 1; i < n;) {
                    let bone = bones[i];
                    let setupLength = bone.data.length;
                    if (setupLength < PathConstraint.epsilon) {
                        if (scale)
                            lengths[i] = 0;
                        spaces[++i] = spacing;
                    }
                    else {
                        let x = setupLength * bone.a, y = setupLength * bone.c;
                        let length = Math.sqrt(x * x + y * y);
                        if (scale)
                            lengths[i] = length;
                        spaces[++i] = (lengthSpacing ? setupLength + spacing : spacing) * length / setupLength;
                    }
                }
        }
        let positions = this.computeWorldPositions(attachment, spacesCount, tangents);
        let boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
        let tip = false;
        if (offsetRotation == 0)
            tip = data.rotateMode == RotateMode.Chain;
        else {
            tip = false;
            let p = this.target.bone;
            offsetRotation *= p.a * p.d - p.b * p.c > 0 ? MathUtils.degRad : -MathUtils.degRad;
        }
        for (let i = 0, p = 3; i < boneCount; i++, p += 3) {
            let bone = bones[i];
            bone.worldX += (boneX - bone.worldX) * mixX;
            bone.worldY += (boneY - bone.worldY) * mixY;
            let x = positions[p], y = positions[p + 1], dx = x - boneX, dy = y - boneY;
            if (scale) {
                let length = lengths[i];
                if (length != 0) {
                    let s = (Math.sqrt(dx * dx + dy * dy) / length - 1) * mixRotate + 1;
                    bone.a *= s;
                    bone.c *= s;
                }
            }
            boneX = x;
            boneY = y;
            if (mixRotate > 0) {
                let a = bone.a, b = bone.b, c = bone.c, d = bone.d, r = 0, cos = 0, sin = 0;
                if (tangents)
                    r = positions[p - 1];
                else if (spaces[i + 1] == 0)
                    r = positions[p + 2];
                else
                    r = Math.atan2(dy, dx);
                r -= Math.atan2(c, a);
                if (tip) {
                    cos = Math.cos(r);
                    sin = Math.sin(r);
                    let length = bone.data.length;
                    boneX += (length * (cos * a - sin * c) - dx) * mixRotate;
                    boneY += (length * (sin * a + cos * c) - dy) * mixRotate;
                }
                else {
                    r += offsetRotation;
                }
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r *= mixRotate;
                cos = Math.cos(r);
                sin = Math.sin(r);
                bone.a = cos * a - sin * c;
                bone.b = cos * b - sin * d;
                bone.c = sin * a + cos * c;
                bone.d = sin * b + cos * d;
            }
            bone.updateAppliedTransform();
        }
    }
    computeWorldPositions(path, spacesCount, tangents) {
        let target = this.target;
        let position = this.position;
        let spaces = this.spaces, out = Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = this.world;
        let closed = path.closed;
        let verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = PathConstraint.NONE;
        if (!path.constantSpeed) {
            let lengths = path.lengths;
            curveCount -= closed ? 1 : 2;
            let pathLength = lengths[curveCount];
            if (this.data.positionMode == PositionMode.Percent)
                position *= pathLength;
            let multiplier;
            switch (this.data.spacingMode) {
                case SpacingMode.Percent:
                    multiplier = pathLength;
                    break;
                case SpacingMode.Proportional:
                    multiplier = pathLength / spacesCount;
                    break;
                default:
                    multiplier = 1;
            }
            world = Utils.setArraySize(this.world, 8);
            for (let i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
                let space = spaces[i] * multiplier;
                position += space;
                let p = position;
                if (closed) {
                    p %= pathLength;
                    if (p < 0)
                        p += pathLength;
                    curve = 0;
                }
                else if (p < 0) {
                    if (prevCurve != PathConstraint.BEFORE) {
                        prevCurve = PathConstraint.BEFORE;
                        path.computeWorldVertices(target, 2, 4, world, 0, 2);
                    }
                    this.addBeforePosition(p, world, 0, out, o);
                    continue;
                }
                else if (p > pathLength) {
                    if (prevCurve != PathConstraint.AFTER) {
                        prevCurve = PathConstraint.AFTER;
                        path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
                    }
                    this.addAfterPosition(p - pathLength, world, 0, out, o);
                    continue;
                }
                // Determine curve containing position.
                for (;; curve++) {
                    let length = lengths[curve];
                    if (p > length)
                        continue;
                    if (curve == 0)
                        p /= length;
                    else {
                        let prev = lengths[curve - 1];
                        p = (p - prev) / (length - prev);
                    }
                    break;
                }
                if (curve != prevCurve) {
                    prevCurve = curve;
                    if (closed && curve == curveCount) {
                        path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
                        path.computeWorldVertices(target, 0, 4, world, 4, 2);
                    }
                    else
                        path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
                }
                this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || (i > 0 && space == 0));
            }
            return out;
        }
        // World vertices.
        if (closed) {
            verticesLength += 2;
            world = Utils.setArraySize(this.world, verticesLength);
            path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
            path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
            world[verticesLength - 2] = world[0];
            world[verticesLength - 1] = world[1];
        }
        else {
            curveCount--;
            verticesLength -= 4;
            world = Utils.setArraySize(this.world, verticesLength);
            path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
        }
        // Curve lengths.
        let curves = Utils.setArraySize(this.curves, curveCount);
        let pathLength = 0;
        let x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
        let tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
        for (let i = 0, w = 2; i < curveCount; i++, w += 6) {
            cx1 = world[w];
            cy1 = world[w + 1];
            cx2 = world[w + 2];
            cy2 = world[w + 3];
            x2 = world[w + 4];
            y2 = world[w + 5];
            tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
            tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
            dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
            dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
            ddfx = tmpx * 2 + dddfx;
            ddfy = tmpy * 2 + dddfy;
            dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
            dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            dfx += ddfx;
            dfy += ddfy;
            ddfx += dddfx;
            ddfy += dddfy;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            dfx += ddfx;
            dfy += ddfy;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            dfx += ddfx + dddfx;
            dfy += ddfy + dddfy;
            pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
            curves[i] = pathLength;
            x1 = x2;
            y1 = y2;
        }
        if (this.data.positionMode == PositionMode.Percent)
            position *= pathLength;
        let multiplier;
        switch (this.data.spacingMode) {
            case SpacingMode.Percent:
                multiplier = pathLength;
                break;
            case SpacingMode.Proportional:
                multiplier = pathLength / spacesCount;
                break;
            default:
                multiplier = 1;
        }
        let segments = this.segments;
        let curveLength = 0;
        for (let i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
            let space = spaces[i] * multiplier;
            position += space;
            let p = position;
            if (closed) {
                p %= pathLength;
                if (p < 0)
                    p += pathLength;
                curve = 0;
            }
            else if (p < 0) {
                this.addBeforePosition(p, world, 0, out, o);
                continue;
            }
            else if (p > pathLength) {
                this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
                continue;
            }
            // Determine curve containing position.
            for (;; curve++) {
                let length = curves[curve];
                if (p > length)
                    continue;
                if (curve == 0)
                    p /= length;
                else {
                    let prev = curves[curve - 1];
                    p = (p - prev) / (length - prev);
                }
                break;
            }
            // Curve segment lengths.
            if (curve != prevCurve) {
                prevCurve = curve;
                let ii = curve * 6;
                x1 = world[ii];
                y1 = world[ii + 1];
                cx1 = world[ii + 2];
                cy1 = world[ii + 3];
                cx2 = world[ii + 4];
                cy2 = world[ii + 5];
                x2 = world[ii + 6];
                y2 = world[ii + 7];
                tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
                tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
                dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
                dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
                ddfx = tmpx * 2 + dddfx;
                ddfy = tmpy * 2 + dddfy;
                dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
                dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
                curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
                segments[0] = curveLength;
                for (ii = 1; ii < 8; ii++) {
                    dfx += ddfx;
                    dfy += ddfy;
                    ddfx += dddfx;
                    ddfy += dddfy;
                    curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    segments[ii] = curveLength;
                }
                dfx += ddfx;
                dfy += ddfy;
                curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                segments[8] = curveLength;
                dfx += ddfx + dddfx;
                dfy += ddfy + dddfy;
                curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                segments[9] = curveLength;
                segment = 0;
            }
            // Weight by segment length.
            p *= curveLength;
            for (;; segment++) {
                let length = segments[segment];
                if (p > length)
                    continue;
                if (segment == 0)
                    p /= length;
                else {
                    let prev = segments[segment - 1];
                    p = segment + (p - prev) / (length - prev);
                }
                break;
            }
            this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || (i > 0 && space == 0));
        }
        return out;
    }
    addBeforePosition(p, temp, i, out, o) {
        let x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
        out[o] = x1 + p * Math.cos(r);
        out[o + 1] = y1 + p * Math.sin(r);
        out[o + 2] = r;
    }
    addAfterPosition(p, temp, i, out, o) {
        let x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
        out[o] = x1 + p * Math.cos(r);
        out[o + 1] = y1 + p * Math.sin(r);
        out[o + 2] = r;
    }
    addCurvePosition(p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
        if (p == 0 || isNaN(p)) {
            out[o] = x1;
            out[o + 1] = y1;
            out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
            return;
        }
        let tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
        let ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
        let x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
        out[o] = x;
        out[o + 1] = y;
        if (tangents) {
            if (p < 0.001)
                out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
            else
                out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a physics constraint. A physics constraint applies physics to bones.
 * <p>
 * See <a href="http://esotericsoftware.com/spine-physics-constraints">Physics constraints</a> in the Spine User Guide. */
class PhysicsConstraint {
    data;
    _bone = null;
    /** The bone constrained by this physics constraint. */
    set bone(bone) { this._bone = bone; }
    get bone() {
        if (!this._bone)
            throw new Error("Bone not set.");
        else
            return this._bone;
    }
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    mix = 0;
    _reset = true;
    ux = 0;
    uy = 0;
    cx = 0;
    cy = 0;
    tx = 0;
    ty = 0;
    xOffset = 0;
    xVelocity = 0;
    yOffset = 0;
    yVelocity = 0;
    rotateOffset = 0;
    rotateVelocity = 0;
    scaleOffset = 0;
    scaleVelocity = 0;
    active = false;
    skeleton;
    remaining = 0;
    lastTime = 0;
    constructor(data, skeleton) {
        this.data = data;
        this.skeleton = skeleton;
        this.bone = skeleton.bones[data.bone.index];
        this.inertia = data.inertia;
        this.strength = data.strength;
        this.damping = data.damping;
        this.massInverse = data.massInverse;
        this.wind = data.wind;
        this.gravity = data.gravity;
        this.mix = data.mix;
    }
    reset() {
        this.remaining = 0;
        this.lastTime = this.skeleton.time;
        this._reset = true;
        this.xOffset = 0;
        this.xVelocity = 0;
        this.yOffset = 0;
        this.yVelocity = 0;
        this.rotateOffset = 0;
        this.rotateVelocity = 0;
        this.scaleOffset = 0;
        this.scaleVelocity = 0;
    }
    setToSetupPose() {
        const data = this.data;
        this.inertia = data.inertia;
        this.strength = data.strength;
        this.damping = data.damping;
        this.massInverse = data.massInverse;
        this.wind = data.wind;
        this.gravity = data.gravity;
        this.mix = data.mix;
    }
    isActive() {
        return this.active;
    }
    /** Applies the constraint to the constrained bones. */
    update(physics) {
        const mix = this.mix;
        if (mix == 0)
            return;
        const x = this.data.x > 0, y = this.data.y > 0, rotateOrShearX = this.data.rotate > 0 || this.data.shearX > 0, scaleX = this.data.scaleX > 0;
        const bone = this.bone;
        const l = bone.data.length;
        switch (physics) {
            case Physics.none:
                return;
            case Physics.reset:
                this.reset();
            // Fall through.
            case Physics.update:
                const skeleton = this.skeleton;
                const delta = Math.max(this.skeleton.time - this.lastTime, 0);
                this.remaining += delta;
                this.lastTime = skeleton.time;
                const bx = bone.worldX, by = bone.worldY;
                if (this._reset) {
                    this._reset = false;
                    this.ux = bx;
                    this.uy = by;
                }
                else {
                    let a = this.remaining, i = this.inertia, t = this.data.step, f = this.skeleton.data.referenceScale, d = -1;
                    let qx = this.data.limit * delta, qy = qx * Math.abs(skeleton.scaleY);
                    qx *= Math.abs(skeleton.scaleX);
                    if (x || y) {
                        if (x) {
                            const u = (this.ux - bx) * i;
                            this.xOffset += u > qx ? qx : u < -qx ? -qx : u;
                            this.ux = bx;
                        }
                        if (y) {
                            const u = (this.uy - by) * i;
                            this.yOffset += u > qy ? qy : u < -qy ? -qy : u;
                            this.uy = by;
                        }
                        if (a >= t) {
                            d = Math.pow(this.damping, 60 * t);
                            const m = this.massInverse * t, e = this.strength, w = this.wind * f, g = (this.gravity) * f;
                            do {
                                if (x) {
                                    this.xVelocity += (w - this.xOffset * e) * m;
                                    this.xOffset += this.xVelocity * t;
                                    this.xVelocity *= d;
                                }
                                if (y) {
                                    this.yVelocity -= (g + this.yOffset * e) * m;
                                    this.yOffset += this.yVelocity * t;
                                    this.yVelocity *= d;
                                }
                                a -= t;
                            } while (a >= t);
                        }
                        if (x)
                            bone.worldX += this.xOffset * mix * this.data.x;
                        if (y)
                            bone.worldY += this.yOffset * mix * this.data.y;
                    }
                    if (rotateOrShearX || scaleX) {
                        let ca = Math.atan2(bone.c, bone.a), c = 0, s = 0, mr = 0;
                        let dx = this.cx - bone.worldX, dy = this.cy - bone.worldY;
                        if (dx > qx)
                            dx = qx;
                        else if (dx < -qx) //
                            dx = -qx;
                        if (dy > qy)
                            dy = qy;
                        else if (dy < -qy) //
                            dy = -qy;
                        if (rotateOrShearX) {
                            mr = (this.data.rotate + this.data.shearX) * mix;
                            let r = Math.atan2(dy + this.ty, dx + this.tx) - ca - this.rotateOffset * mr;
                            this.rotateOffset += (r - Math.ceil(r * MathUtils.invPI2 - 0.5) * MathUtils.PI2) * i;
                            r = this.rotateOffset * mr + ca;
                            c = Math.cos(r);
                            s = Math.sin(r);
                            if (scaleX) {
                                r = l * bone.getWorldScaleX();
                                if (r > 0)
                                    this.scaleOffset += (dx * c + dy * s) * i / r;
                            }
                        }
                        else {
                            c = Math.cos(ca);
                            s = Math.sin(ca);
                            const r = l * bone.getWorldScaleX();
                            if (r > 0)
                                this.scaleOffset += (dx * c + dy * s) * i / r;
                        }
                        a = this.remaining;
                        if (a >= t) {
                            if (d == -1)
                                d = Math.pow(this.damping, 60 * t);
                            const m = this.massInverse * t, e = this.strength, w = this.wind, g = (this.gravity), h = l / f;
                            while (true) {
                                a -= t;
                                if (scaleX) {
                                    this.scaleVelocity += (w * c - g * s - this.scaleOffset * e) * m;
                                    this.scaleOffset += this.scaleVelocity * t;
                                    this.scaleVelocity *= d;
                                }
                                if (rotateOrShearX) {
                                    this.rotateVelocity -= ((w * s + g * c) * h + this.rotateOffset * e) * m;
                                    this.rotateOffset += this.rotateVelocity * t;
                                    this.rotateVelocity *= d;
                                    if (a < t)
                                        break;
                                    const r = this.rotateOffset * mr + ca;
                                    c = Math.cos(r);
                                    s = Math.sin(r);
                                }
                                else if (a < t) //
                                    break;
                            }
                        }
                    }
                    this.remaining = a;
                }
                this.cx = bone.worldX;
                this.cy = bone.worldY;
                break;
            case Physics.pose:
                if (x)
                    bone.worldX += this.xOffset * mix * this.data.x;
                if (y)
                    bone.worldY += this.yOffset * mix * this.data.y;
        }
        if (rotateOrShearX) {
            let o = this.rotateOffset * mix, s = 0, c = 0, a = 0;
            if (this.data.shearX > 0) {
                let r = 0;
                if (this.data.rotate > 0) {
                    r = o * this.data.rotate;
                    s = Math.sin(r);
                    c = Math.cos(r);
                    a = bone.b;
                    bone.b = c * a - s * bone.d;
                    bone.d = s * a + c * bone.d;
                }
                r += o * this.data.shearX;
                s = Math.sin(r);
                c = Math.cos(r);
                a = bone.a;
                bone.a = c * a - s * bone.c;
                bone.c = s * a + c * bone.c;
            }
            else {
                o *= this.data.rotate;
                s = Math.sin(o);
                c = Math.cos(o);
                a = bone.a;
                bone.a = c * a - s * bone.c;
                bone.c = s * a + c * bone.c;
                a = bone.b;
                bone.b = c * a - s * bone.d;
                bone.d = s * a + c * bone.d;
            }
        }
        if (scaleX) {
            const s = 1 + this.scaleOffset * mix * this.data.scaleX;
            bone.a *= s;
            bone.c *= s;
        }
        if (physics != Physics.pose) {
            this.tx = l * bone.a;
            this.ty = l * bone.c;
        }
        bone.updateAppliedTransform();
    }
    /** Translates the physics constraint so next {@link #update(Physics)} forces are applied as if the bone moved an additional
     * amount in world space. */
    translate(x, y) {
        this.ux -= x;
        this.uy -= y;
        this.cx -= x;
        this.cy -= y;
    }
    /** Rotates the physics constraint so next {@link #update(Physics)} forces are applied as if the bone rotated around the
     * specified point in world space. */
    rotate(x, y, degrees) {
        const r = degrees * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
        const dx = this.cx - x, dy = this.cy - y;
        this.translate(dx * cos - dy * sin - dx, dx * sin + dy * cos - dy);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores a slot's current pose. Slots organize attachments for {@link Skeleton#drawOrder} purposes and provide a place to store
 * state for an attachment. State cannot be stored in an attachment itself because attachments are stateless and may be shared
 * across multiple skeletons. */
class Slot {
    /** The slot's setup pose data. */
    data;
    /** The bone this slot belongs to. */
    bone;
    /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
     * color tinting. */
    color;
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    attachment = null;
    attachmentState = 0;
    /** The index of the texture region to display when the slot's attachment has a {@link Sequence}. -1 represents the
     * {@link Sequence#getSetupIndex()}. */
    sequenceIndex = -1;
    /** Values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a
     * weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions.
     *
     * See {@link VertexAttachment#computeWorldVertices()} and {@link DeformTimeline}. */
    deform = new Array();
    constructor(data, bone) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!bone)
            throw new Error("bone cannot be null.");
        this.data = data;
        this.bone = bone;
        this.color = new Color();
        this.darkColor = !data.darkColor ? null : new Color();
        this.setToSetupPose();
    }
    /** The skeleton this slot belongs to. */
    getSkeleton() {
        return this.bone.skeleton;
    }
    /** The current attachment for the slot, or null if the slot has no attachment. */
    getAttachment() {
        return this.attachment;
    }
    /** Sets the slot's attachment and, if the attachment changed, resets {@link #sequenceIndex} and clears the {@link #deform}.
     * The deform is not cleared if the old attachment has the same {@link VertexAttachment#getTimelineAttachment()} as the
     * specified attachment. */
    setAttachment(attachment) {
        if (this.attachment == attachment)
            return;
        if (!(attachment instanceof VertexAttachment) || !(this.attachment instanceof VertexAttachment)
            || attachment.timelineAttachment != this.attachment.timelineAttachment) {
            this.deform.length = 0;
        }
        this.attachment = attachment;
        this.sequenceIndex = -1;
    }
    /** Sets this slot to the setup pose. */
    setToSetupPose() {
        this.color.setFromColor(this.data.color);
        if (this.darkColor)
            this.darkColor.setFromColor(this.data.darkColor);
        if (!this.data.attachmentName)
            this.attachment = null;
        else {
            this.attachment = null;
            this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a transform constraint. A transform constraint adjusts the world transform of the constrained
 * bones to match that of the target bone.
 *
 * See [Transform constraints](http://esotericsoftware.com/spine-transform-constraints) in the Spine User Guide. */
class TransformConstraint {
    /** The transform constraint's setup pose data. */
    data;
    /** The bones that will be modified by this transform constraint. */
    bones;
    /** The target bone whose world transform will be copied to the constrained bones. */
    target;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    mixScaleX = 0;
    mixScaleY = 0;
    mixShearY = 0;
    temp = new Vector2();
    active = false;
    constructor(data, skeleton) {
        if (!data)
            throw new Error("data cannot be null.");
        if (!skeleton)
            throw new Error("skeleton cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0; i < data.bones.length; i++) {
            let bone = skeleton.findBone(data.bones[i].name);
            if (!bone)
                throw new Error(`Couldn't find bone ${data.bones[i].name}.`);
            this.bones.push(bone);
        }
        let target = skeleton.findBone(data.target.name);
        if (!target)
            throw new Error(`Couldn't find target bone ${data.target.name}.`);
        this.target = target;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
        this.mixScaleX = data.mixScaleX;
        this.mixScaleY = data.mixScaleY;
        this.mixShearY = data.mixShearY;
    }
    isActive() {
        return this.active;
    }
    setToSetupPose() {
        const data = this.data;
        this.mixRotate = data.mixRotate;
        this.mixX = data.mixX;
        this.mixY = data.mixY;
        this.mixScaleX = data.mixScaleX;
        this.mixScaleY = data.mixScaleY;
        this.mixShearY = data.mixShearY;
    }
    update(physics) {
        if (this.mixRotate == 0 && this.mixX == 0 && this.mixY == 0 && this.mixScaleX == 0 && this.mixScaleY == 0 && this.mixShearY == 0)
            return;
        if (this.data.local) {
            if (this.data.relative)
                this.applyRelativeLocal();
            else
                this.applyAbsoluteLocal();
        }
        else {
            if (this.data.relative)
                this.applyRelativeWorld();
            else
                this.applyAbsoluteWorld();
        }
    }
    applyAbsoluteWorld() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let translate = mixX != 0 || mixY != 0;
        let target = this.target;
        let ta = target.a, tb = target.b, tc = target.c, td = target.d;
        let degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
        let offsetRotation = this.data.offsetRotation * degRadReflect;
        let offsetShearY = this.data.offsetShearY * degRadReflect;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (mixRotate != 0) {
                let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
                let r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r *= mixRotate;
                let cos = Math.cos(r), sin = Math.sin(r);
                bone.a = cos * a - sin * c;
                bone.b = cos * b - sin * d;
                bone.c = sin * a + cos * c;
                bone.d = sin * b + cos * d;
            }
            if (translate) {
                let temp = this.temp;
                target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                bone.worldX += (temp.x - bone.worldX) * mixX;
                bone.worldY += (temp.y - bone.worldY) * mixY;
            }
            if (mixScaleX != 0) {
                let s = Math.sqrt(bone.a * bone.a + bone.c * bone.c);
                if (s != 0)
                    s = (s + (Math.sqrt(ta * ta + tc * tc) - s + this.data.offsetScaleX) * mixScaleX) / s;
                bone.a *= s;
                bone.c *= s;
            }
            if (mixScaleY != 0) {
                let s = Math.sqrt(bone.b * bone.b + bone.d * bone.d);
                if (s != 0)
                    s = (s + (Math.sqrt(tb * tb + td * td) - s + this.data.offsetScaleY) * mixScaleY) / s;
                bone.b *= s;
                bone.d *= s;
            }
            if (mixShearY > 0) {
                let b = bone.b, d = bone.d;
                let by = Math.atan2(d, b);
                let r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(bone.c, bone.a));
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r = by + (r + offsetShearY) * mixShearY;
                let s = Math.sqrt(b * b + d * d);
                bone.b = Math.cos(r) * s;
                bone.d = Math.sin(r) * s;
            }
            bone.updateAppliedTransform();
        }
    }
    applyRelativeWorld() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let translate = mixX != 0 || mixY != 0;
        let target = this.target;
        let ta = target.a, tb = target.b, tc = target.c, td = target.d;
        let degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
        let offsetRotation = this.data.offsetRotation * degRadReflect, offsetShearY = this.data.offsetShearY * degRadReflect;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (mixRotate != 0) {
                let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
                let r = Math.atan2(tc, ta) + offsetRotation;
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                r *= mixRotate;
                let cos = Math.cos(r), sin = Math.sin(r);
                bone.a = cos * a - sin * c;
                bone.b = cos * b - sin * d;
                bone.c = sin * a + cos * c;
                bone.d = sin * b + cos * d;
            }
            if (translate) {
                let temp = this.temp;
                target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                bone.worldX += temp.x * mixX;
                bone.worldY += temp.y * mixY;
            }
            if (mixScaleX != 0) {
                let s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * mixScaleX + 1;
                bone.a *= s;
                bone.c *= s;
            }
            if (mixScaleY != 0) {
                let s = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * mixScaleY + 1;
                bone.b *= s;
                bone.d *= s;
            }
            if (mixShearY > 0) {
                let r = Math.atan2(td, tb) - Math.atan2(tc, ta);
                if (r > MathUtils.PI)
                    r -= MathUtils.PI2;
                else if (r < -MathUtils.PI) //
                    r += MathUtils.PI2;
                let b = bone.b, d = bone.d;
                r = Math.atan2(d, b) + (r - MathUtils.PI / 2 + offsetShearY) * mixShearY;
                let s = Math.sqrt(b * b + d * d);
                bone.b = Math.cos(r) * s;
                bone.d = Math.sin(r) * s;
            }
            bone.updateAppliedTransform();
        }
    }
    applyAbsoluteLocal() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let target = this.target;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            let rotation = bone.arotation;
            if (mixRotate != 0)
                rotation += (target.arotation - rotation + this.data.offsetRotation) * mixRotate;
            let x = bone.ax, y = bone.ay;
            x += (target.ax - x + this.data.offsetX) * mixX;
            y += (target.ay - y + this.data.offsetY) * mixY;
            let scaleX = bone.ascaleX, scaleY = bone.ascaleY;
            if (mixScaleX != 0 && scaleX != 0)
                scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * mixScaleX) / scaleX;
            if (mixScaleY != 0 && scaleY != 0)
                scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * mixScaleY) / scaleY;
            let shearY = bone.ashearY;
            if (mixShearY != 0)
                shearY += (target.ashearY - shearY + this.data.offsetShearY) * mixShearY;
            bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
        }
    }
    applyRelativeLocal() {
        let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
        let target = this.target;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            let rotation = bone.arotation + (target.arotation + this.data.offsetRotation) * mixRotate;
            let x = bone.ax + (target.ax + this.data.offsetX) * mixX;
            let y = bone.ay + (target.ay + this.data.offsetY) * mixY;
            let scaleX = bone.ascaleX * (((target.ascaleX - 1 + this.data.offsetScaleX) * mixScaleX) + 1);
            let scaleY = bone.ascaleY * (((target.ascaleY - 1 + this.data.offsetScaleY) * mixScaleY) + 1);
            let shearY = bone.ashearY + (target.ashearY + this.data.offsetShearY) * mixShearY;
            bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the current pose for a skeleton.
 *
 * See [Instance objects](http://esotericsoftware.com/spine-runtime-architecture#Instance-objects) in the Spine Runtimes Guide. */
class Skeleton {
    static quadTriangles = [0, 1, 2, 2, 3, 0];
    static yDown = false;
    /** The skeleton's setup pose data. */
    data;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones;
    /** The skeleton's slots in the setup pose draw order. */
    slots;
    /** The skeleton's slots in the order they should be drawn. The returned array may be modified to change the draw order. */
    drawOrder;
    /** The skeleton's IK constraints. */
    ikConstraints;
    /** The skeleton's transform constraints. */
    transformConstraints;
    /** The skeleton's path constraints. */
    pathConstraints;
    /** The skeleton's physics constraints. */
    physicsConstraints;
    /** The list of bones and constraints, sorted in the order they should be updated, as computed by {@link #updateCache()}. */
    _updateCache = new Array();
    /** The skeleton's current skin. May be null. */
    skin = null;
    /** The color to tint all the skeleton's attachments. */
    color;
    /** Scales the entire skeleton on the X axis. This affects all bones, even if the bone's transform mode disallows scale
      * inheritance. */
    scaleX = 1;
    /** Scales the entire skeleton on the Y axis. This affects all bones, even if the bone's transform mode disallows scale
      * inheritance. */
    _scaleY = 1;
    get scaleY() {
        return Skeleton.yDown ? -this._scaleY : this._scaleY;
    }
    set scaleY(scaleY) {
        this._scaleY = scaleY;
    }
    /** Sets the skeleton X position, which is added to the root bone worldX position. */
    x = 0;
    /** Sets the skeleton Y position, which is added to the root bone worldY position. */
    y = 0;
    /** Returns the skeleton's time. This is used for time-based manipulations, such as {@link PhysicsConstraint}.
     * <p>
     * See {@link #update(float)}. */
    time = 0;
    constructor(data) {
        if (!data)
            throw new Error("data cannot be null.");
        this.data = data;
        this.bones = new Array();
        for (let i = 0; i < data.bones.length; i++) {
            let boneData = data.bones[i];
            let bone;
            if (!boneData.parent)
                bone = new Bone(boneData, this, null);
            else {
                let parent = this.bones[boneData.parent.index];
                bone = new Bone(boneData, this, parent);
                parent.children.push(bone);
            }
            this.bones.push(bone);
        }
        this.slots = new Array();
        this.drawOrder = new Array();
        for (let i = 0; i < data.slots.length; i++) {
            let slotData = data.slots[i];
            let bone = this.bones[slotData.boneData.index];
            let slot = new Slot(slotData, bone);
            this.slots.push(slot);
            this.drawOrder.push(slot);
        }
        this.ikConstraints = new Array();
        for (let i = 0; i < data.ikConstraints.length; i++) {
            let ikConstraintData = data.ikConstraints[i];
            this.ikConstraints.push(new IkConstraint(ikConstraintData, this));
        }
        this.transformConstraints = new Array();
        for (let i = 0; i < data.transformConstraints.length; i++) {
            let transformConstraintData = data.transformConstraints[i];
            this.transformConstraints.push(new TransformConstraint(transformConstraintData, this));
        }
        this.pathConstraints = new Array();
        for (let i = 0; i < data.pathConstraints.length; i++) {
            let pathConstraintData = data.pathConstraints[i];
            this.pathConstraints.push(new PathConstraint(pathConstraintData, this));
        }
        this.physicsConstraints = new Array();
        for (let i = 0; i < data.physicsConstraints.length; i++) {
            let physicsConstraintData = data.physicsConstraints[i];
            this.physicsConstraints.push(new PhysicsConstraint(physicsConstraintData, this));
        }
        this.color = new Color(1, 1, 1, 1);
        this.updateCache();
    }
    /** Caches information about bones and constraints. Must be called if the {@link #getSkin()} is modified or if bones,
     * constraints, or weighted path attachments are added or removed. */
    updateCache() {
        let updateCache = this._updateCache;
        updateCache.length = 0;
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            bone.sorted = bone.data.skinRequired;
            bone.active = !bone.sorted;
        }
        if (this.skin) {
            let skinBones = this.skin.bones;
            for (let i = 0, n = this.skin.bones.length; i < n; i++) {
                let bone = this.bones[skinBones[i].index];
                do {
                    bone.sorted = false;
                    bone.active = true;
                    bone = bone.parent;
                } while (bone);
            }
        }
        // IK first, lowest hierarchy depth first.
        let ikConstraints = this.ikConstraints;
        let transformConstraints = this.transformConstraints;
        let pathConstraints = this.pathConstraints;
        let physicsConstraints = this.physicsConstraints;
        let ikCount = ikConstraints.length, transformCount = transformConstraints.length, pathCount = pathConstraints.length, physicsCount = this.physicsConstraints.length;
        let constraintCount = ikCount + transformCount + pathCount + physicsCount;
        outer: for (let i = 0; i < constraintCount; i++) {
            for (let ii = 0; ii < ikCount; ii++) {
                let constraint = ikConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortIkConstraint(constraint);
                    continue outer;
                }
            }
            for (let ii = 0; ii < transformCount; ii++) {
                let constraint = transformConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortTransformConstraint(constraint);
                    continue outer;
                }
            }
            for (let ii = 0; ii < pathCount; ii++) {
                let constraint = pathConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortPathConstraint(constraint);
                    continue outer;
                }
            }
            for (let ii = 0; ii < physicsCount; ii++) {
                const constraint = physicsConstraints[ii];
                if (constraint.data.order == i) {
                    this.sortPhysicsConstraint(constraint);
                    continue outer;
                }
            }
        }
        for (let i = 0, n = bones.length; i < n; i++)
            this.sortBone(bones[i]);
    }
    sortIkConstraint(constraint) {
        constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || (this.skin && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        let target = constraint.target;
        this.sortBone(target);
        let constrained = constraint.bones;
        let parent = constrained[0];
        this.sortBone(parent);
        if (constrained.length == 1) {
            this._updateCache.push(constraint);
            this.sortReset(parent.children);
        }
        else {
            let child = constrained[constrained.length - 1];
            this.sortBone(child);
            this._updateCache.push(constraint);
            this.sortReset(parent.children);
            child.sorted = true;
        }
    }
    sortPathConstraint(constraint) {
        constraint.active = constraint.target.bone.isActive() && (!constraint.data.skinRequired || (this.skin && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        let slot = constraint.target;
        let slotIndex = slot.data.index;
        let slotBone = slot.bone;
        if (this.skin)
            this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
        if (this.data.defaultSkin && this.data.defaultSkin != this.skin)
            this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
        for (let i = 0, n = this.data.skins.length; i < n; i++)
            this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
        let attachment = slot.getAttachment();
        if (attachment instanceof PathAttachment)
            this.sortPathConstraintAttachmentWith(attachment, slotBone);
        let constrained = constraint.bones;
        let boneCount = constrained.length;
        for (let i = 0; i < boneCount; i++)
            this.sortBone(constrained[i]);
        this._updateCache.push(constraint);
        for (let i = 0; i < boneCount; i++)
            this.sortReset(constrained[i].children);
        for (let i = 0; i < boneCount; i++)
            constrained[i].sorted = true;
    }
    sortTransformConstraint(constraint) {
        constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || (this.skin && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        this.sortBone(constraint.target);
        let constrained = constraint.bones;
        let boneCount = constrained.length;
        if (constraint.data.local) {
            for (let i = 0; i < boneCount; i++) {
                let child = constrained[i];
                this.sortBone(child.parent);
                this.sortBone(child);
            }
        }
        else {
            for (let i = 0; i < boneCount; i++) {
                this.sortBone(constrained[i]);
            }
        }
        this._updateCache.push(constraint);
        for (let i = 0; i < boneCount; i++)
            this.sortReset(constrained[i].children);
        for (let i = 0; i < boneCount; i++)
            constrained[i].sorted = true;
    }
    sortPathConstraintAttachment(skin, slotIndex, slotBone) {
        let attachments = skin.attachments[slotIndex];
        if (!attachments)
            return;
        for (let key in attachments) {
            this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
        }
    }
    sortPathConstraintAttachmentWith(attachment, slotBone) {
        if (!(attachment instanceof PathAttachment))
            return;
        let pathBones = attachment.bones;
        if (!pathBones)
            this.sortBone(slotBone);
        else {
            let bones = this.bones;
            for (let i = 0, n = pathBones.length; i < n;) {
                let nn = pathBones[i++];
                nn += i;
                while (i < nn)
                    this.sortBone(bones[pathBones[i++]]);
            }
        }
    }
    sortPhysicsConstraint(constraint) {
        const bone = constraint.bone;
        constraint.active = bone.active && (!constraint.data.skinRequired || (this.skin != null && Utils.contains(this.skin.constraints, constraint.data, true)));
        if (!constraint.active)
            return;
        this.sortBone(bone);
        this._updateCache.push(constraint);
        this.sortReset(bone.children);
        bone.sorted = true;
    }
    sortBone(bone) {
        if (!bone)
            return;
        if (bone.sorted)
            return;
        let parent = bone.parent;
        if (parent)
            this.sortBone(parent);
        bone.sorted = true;
        this._updateCache.push(bone);
    }
    sortReset(bones) {
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (!bone.active)
                continue;
            if (bone.sorted)
                this.sortReset(bone.children);
            bone.sorted = false;
        }
    }
    /** Updates the world transform for each bone and applies all constraints.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide. */
    updateWorldTransform(physics) {
        if (physics === undefined || physics === null)
            throw new Error("physics is undefined");
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            bone.ax = bone.x;
            bone.ay = bone.y;
            bone.arotation = bone.rotation;
            bone.ascaleX = bone.scaleX;
            bone.ascaleY = bone.scaleY;
            bone.ashearX = bone.shearX;
            bone.ashearY = bone.shearY;
        }
        let updateCache = this._updateCache;
        for (let i = 0, n = updateCache.length; i < n; i++)
            updateCache[i].update(physics);
    }
    updateWorldTransformWith(physics, parent) {
        if (!parent)
            throw new Error("parent cannot be null.");
        let bones = this.bones;
        for (let i = 1, n = bones.length; i < n; i++) { // Skip root bone.
            let bone = bones[i];
            bone.ax = bone.x;
            bone.ay = bone.y;
            bone.arotation = bone.rotation;
            bone.ascaleX = bone.scaleX;
            bone.ascaleY = bone.scaleY;
            bone.ashearX = bone.shearX;
            bone.ashearY = bone.shearY;
        }
        // Apply the parent bone transform to the root bone. The root bone always inherits scale, rotation and reflection.
        let rootBone = this.getRootBone();
        if (!rootBone)
            throw new Error("Root bone must not be null.");
        let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
        rootBone.worldX = pa * this.x + pb * this.y + parent.worldX;
        rootBone.worldY = pc * this.x + pd * this.y + parent.worldY;
        const rx = (rootBone.rotation + rootBone.shearX) * MathUtils.degRad;
        const ry = (rootBone.rotation + 90 + rootBone.shearY) * MathUtils.degRad;
        const la = Math.cos(rx) * rootBone.scaleX;
        const lb = Math.cos(ry) * rootBone.scaleY;
        const lc = Math.sin(rx) * rootBone.scaleX;
        const ld = Math.sin(ry) * rootBone.scaleY;
        rootBone.a = (pa * la + pb * lc) * this.scaleX;
        rootBone.b = (pa * lb + pb * ld) * this.scaleX;
        rootBone.c = (pc * la + pd * lc) * this.scaleY;
        rootBone.d = (pc * lb + pd * ld) * this.scaleY;
        // Update everything except root bone.
        let updateCache = this._updateCache;
        for (let i = 0, n = updateCache.length; i < n; i++) {
            let updatable = updateCache[i];
            if (updatable != rootBone)
                updatable.update(physics);
        }
    }
    /** Sets the bones, constraints, and slots to their setup pose values. */
    setToSetupPose() {
        this.setBonesToSetupPose();
        this.setSlotsToSetupPose();
    }
    /** Sets the bones and constraints to their setup pose values. */
    setBonesToSetupPose() {
        for (const bone of this.bones)
            bone.setToSetupPose();
        for (const constraint of this.ikConstraints)
            constraint.setToSetupPose();
        for (const constraint of this.transformConstraints)
            constraint.setToSetupPose();
        for (const constraint of this.pathConstraints)
            constraint.setToSetupPose();
        for (const constraint of this.physicsConstraints)
            constraint.setToSetupPose();
    }
    /** Sets the slots and draw order to their setup pose values. */
    setSlotsToSetupPose() {
        let slots = this.slots;
        Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
        for (let i = 0, n = slots.length; i < n; i++)
            slots[i].setToSetupPose();
    }
    /** @returns May return null. */
    getRootBone() {
        if (this.bones.length == 0)
            return null;
        return this.bones[0];
    }
    /** @returns May be null. */
    findBone(boneName) {
        if (!boneName)
            throw new Error("boneName cannot be null.");
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (bone.data.name == boneName)
                return bone;
        }
        return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * repeatedly.
     * @returns May be null. */
    findSlot(slotName) {
        if (!slotName)
            throw new Error("slotName cannot be null.");
        let slots = this.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            if (slot.data.name == slotName)
                return slot;
        }
        return null;
    }
    /** Sets a skin by name.
     *
     * See {@link #setSkin()}. */
    setSkinByName(skinName) {
        let skin = this.data.findSkin(skinName);
        if (!skin)
            throw new Error("Skin not found: " + skinName);
        this.setSkin(skin);
    }
    /** Sets the skin used to look up attachments before looking in the {@link SkeletonData#defaultSkin default skin}. If the
     * skin is changed, {@link #updateCache()} is called.
     *
     * Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was no
     * old skin, each slot's setup mode attachment is attached from the new skin.
     *
     * After changing the skin, the visible attachments can be reset to those attached in the setup pose by calling
     * {@link #setSlotsToSetupPose()}. Also, often {@link AnimationState#apply()} is called before the next time the
     * skeleton is rendered to allow any attachment keys in the current animation(s) to hide or show attachments from the new skin.
     * @param newSkin May be null. */
    setSkin(newSkin) {
        if (newSkin == this.skin)
            return;
        if (newSkin) {
            if (this.skin)
                newSkin.attachAll(this, this.skin);
            else {
                let slots = this.slots;
                for (let i = 0, n = slots.length; i < n; i++) {
                    let slot = slots[i];
                    let name = slot.data.attachmentName;
                    if (name) {
                        let attachment = newSkin.getAttachment(i, name);
                        if (attachment)
                            slot.setAttachment(attachment);
                    }
                }
            }
        }
        this.skin = newSkin;
        this.updateCache();
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot name and attachment
     * name.
     *
     * See {@link #getAttachment()}.
     * @returns May be null. */
    getAttachmentByName(slotName, attachmentName) {
        let slot = this.data.findSlot(slotName);
        if (!slot)
            throw new Error(`Can't find slot with name ${slotName}`);
        return this.getAttachment(slot.index, attachmentName);
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot index and
     * attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.
     *
     * See [Runtime skins](http://esotericsoftware.com/spine-runtime-skins) in the Spine Runtimes Guide.
     * @returns May be null. */
    getAttachment(slotIndex, attachmentName) {
        if (!attachmentName)
            throw new Error("attachmentName cannot be null.");
        if (this.skin) {
            let attachment = this.skin.getAttachment(slotIndex, attachmentName);
            if (attachment)
                return attachment;
        }
        if (this.data.defaultSkin)
            return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
        return null;
    }
    /** A convenience method to set an attachment by finding the slot with {@link #findSlot()}, finding the attachment with
     * {@link #getAttachment()}, then setting the slot's {@link Slot#attachment}.
     * @param attachmentName May be null to clear the slot's attachment. */
    setAttachment(slotName, attachmentName) {
        if (!slotName)
            throw new Error("slotName cannot be null.");
        let slots = this.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            if (slot.data.name == slotName) {
                let attachment = null;
                if (attachmentName) {
                    attachment = this.getAttachment(i, attachmentName);
                    if (!attachment)
                        throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
                }
                slot.setAttachment(attachment);
                return;
            }
        }
        throw new Error("Slot not found: " + slotName);
    }
    /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
     * than to call it repeatedly.
     * @return May be null. */
    findIkConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        return this.ikConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
     * this method than to call it repeatedly.
     * @return May be null. */
    findTransformConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        return this.transformConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
     * than to call it repeatedly.
     * @return May be null. */
    findPathConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        return this.pathConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a physics constraint by comparing each physics constraint's name. It is more efficient to cache the results of this
     * method than to call it repeatedly. */
    findPhysicsConstraint(constraintName) {
        if (constraintName == null)
            throw new Error("constraintName cannot be null.");
        return this.physicsConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose as `{ x: number, y: number, width: number, height: number }`.
     * Note that this method will create temporary objects which can add to garbage collection pressure. Use `getBounds()` if garbage collection is a concern. */
    getBoundsRect() {
        let offset = new Vector2();
        let size = new Vector2();
        this.getBounds(offset, size);
        return { x: offset.x, y: offset.y, width: size.x, height: size.y };
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose.
     * @param offset An output value, the distance from the skeleton origin to the bottom left corner of the AABB.
     * @param size An output value, the width and height of the AABB.
     * @param temp Working memory to temporarily store attachments' computed world vertices.
     * @param clipper {@link SkeletonClipping} to use. If <code>null</code>, no clipping is applied. */
    getBounds(offset, size, temp = new Array(2), clipper = null) {
        if (!offset)
            throw new Error("offset cannot be null.");
        if (!size)
            throw new Error("size cannot be null.");
        let drawOrder = this.drawOrder;
        let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            let slot = drawOrder[i];
            if (!slot.bone.active)
                continue;
            let verticesLength = 0;
            let vertices = null;
            let triangles = null;
            let attachment = slot.getAttachment();
            if (attachment instanceof RegionAttachment) {
                verticesLength = 8;
                vertices = Utils.setArraySize(temp, verticesLength, 0);
                attachment.computeWorldVertices(slot, vertices, 0, 2);
                triangles = Skeleton.quadTriangles;
            }
            else if (attachment instanceof MeshAttachment) {
                let mesh = attachment;
                verticesLength = mesh.worldVerticesLength;
                vertices = Utils.setArraySize(temp, verticesLength, 0);
                mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
                triangles = mesh.triangles;
            }
            else if (attachment instanceof ClippingAttachment && clipper != null) {
                clipper.clipStart(slot, attachment);
                continue;
            }
            if (vertices && triangles) {
                if (clipper != null && clipper.isClipping()) {
                    clipper.clipTriangles(vertices, triangles, triangles.length);
                    vertices = clipper.clippedVertices;
                    verticesLength = clipper.clippedVertices.length;
                }
                for (let ii = 0, nn = vertices.length; ii < nn; ii += 2) {
                    let x = vertices[ii], y = vertices[ii + 1];
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
            if (clipper != null)
                clipper.clipEndWithSlot(slot);
        }
        if (clipper != null)
            clipper.clipEnd();
        offset.set(minX, minY);
        size.set(maxX - minX, maxY - minY);
    }
    /** Increments the skeleton's {@link #time}. */
    update(delta) {
        this.time += delta;
    }
    physicsTranslate(x, y) {
        const physicsConstraints = this.physicsConstraints;
        for (let i = 0, n = physicsConstraints.length; i < n; i++)
            physicsConstraints[i].translate(x, y);
    }
    /** Calls {@link PhysicsConstraint#rotate(float, float, float)} for each physics constraint. */
    physicsRotate(x, y, degrees) {
        const physicsConstraints = this.physicsConstraints;
        for (let i = 0, n = physicsConstraints.length; i < n; i++)
            physicsConstraints[i].rotate(x, y, degrees);
    }
}
/** Determines how physics and other non-deterministic updates are applied. */
var Physics;
(function (Physics) {
    /** Physics are not updated or applied. */
    Physics[Physics["none"] = 0] = "none";
    /** Physics are reset to the current pose. */
    Physics[Physics["reset"] = 1] = "reset";
    /** Physics are updated and the pose from physics is applied. */
    Physics[Physics["update"] = 2] = "update";
    /** Physics are not updated but the pose from physics is applied. */
    Physics[Physics["pose"] = 3] = "pose";
})(Physics || (Physics = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link PhysicsConstraint}.
 * <p>
 * See <a href="http://esotericsoftware.com/spine-physics-constraints">Physics constraints</a> in the Spine User Guide. */
class PhysicsConstraintData extends ConstraintData {
    _bone = null;
    /** The bone constrained by this physics constraint. */
    set bone(boneData) { this._bone = boneData; }
    get bone() {
        if (!this._bone)
            throw new Error("BoneData not set.");
        else
            return this._bone;
    }
    x = 0;
    y = 0;
    rotate = 0;
    scaleX = 0;
    shearX = 0;
    limit = 0;
    step = 0;
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained poses. */
    mix = 0;
    inertiaGlobal = false;
    strengthGlobal = false;
    dampingGlobal = false;
    massGlobal = false;
    windGlobal = false;
    gravityGlobal = false;
    mixGlobal = false;
    constructor(name) {
        super(name, 0, false);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose and all of the stateless data for a skeleton.
 *
 * See [Data objects](http://esotericsoftware.com/spine-runtime-architecture#Data-objects) in the Spine Runtimes
 * Guide. */
class SkeletonData {
    /** The skeleton's name, which by default is the name of the skeleton data file, if possible. May be null. */
    name = null;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones = new Array(); // Ordered parents first.
    /** The skeleton's slots in the setup pose draw order. */
    slots = new Array(); // Setup pose draw order.
    skins = new Array();
    /** The skeleton's default skin. By default this skin contains all attachments that were not in a skin in Spine.
     *
     * See {@link Skeleton#getAttachmentByName()}.
     * May be null. */
    defaultSkin = null;
    /** The skeleton's events. */
    events = new Array();
    /** The skeleton's animations. */
    animations = new Array();
    /** The skeleton's IK constraints. */
    ikConstraints = new Array();
    /** The skeleton's transform constraints. */
    transformConstraints = new Array();
    /** The skeleton's path constraints. */
    pathConstraints = new Array();
    /** The skeleton's physics constraints. */
    physicsConstraints = new Array();
    /** The X coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    x = 0;
    /** The Y coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    y = 0;
    /** The width of the skeleton's axis aligned bounding box in the setup pose. */
    width = 0;
    /** The height of the skeleton's axis aligned bounding box in the setup pose. */
    height = 0;
    /** Baseline scale factor for applying distance-dependent effects on non-scalable properties, such as angle or scale. Default
     * is 100. */
    referenceScale = 100;
    /** The Spine version used to export the skeleton data, or null. */
    version = null;
    /** The skeleton data hash. This value will change if any of the skeleton data has changed. May be null. */
    hash = null;
    // Nonessential
    /** The dopesheet FPS in Spine. Available only when nonessential data was exported. */
    fps = 0;
    /** The path to the images directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    imagesPath = null;
    /** The path to the audio directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    audioPath = null;
    /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findBone(boneName) {
        if (!boneName)
            throw new Error("boneName cannot be null.");
        let bones = this.bones;
        for (let i = 0, n = bones.length; i < n; i++) {
            let bone = bones[i];
            if (bone.name == boneName)
                return bone;
        }
        return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSlot(slotName) {
        if (!slotName)
            throw new Error("slotName cannot be null.");
        let slots = this.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            if (slot.name == slotName)
                return slot;
        }
        return null;
    }
    /** Finds a skin by comparing each skin's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSkin(skinName) {
        if (!skinName)
            throw new Error("skinName cannot be null.");
        let skins = this.skins;
        for (let i = 0, n = skins.length; i < n; i++) {
            let skin = skins[i];
            if (skin.name == skinName)
                return skin;
        }
        return null;
    }
    /** Finds an event by comparing each events's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findEvent(eventDataName) {
        if (!eventDataName)
            throw new Error("eventDataName cannot be null.");
        let events = this.events;
        for (let i = 0, n = events.length; i < n; i++) {
            let event = events[i];
            if (event.name == eventDataName)
                return event;
        }
        return null;
    }
    /** Finds an animation by comparing each animation's name. It is more efficient to cache the results of this method than to
     * call it multiple times.
     * @returns May be null. */
    findAnimation(animationName) {
        if (!animationName)
            throw new Error("animationName cannot be null.");
        let animations = this.animations;
        for (let i = 0, n = animations.length; i < n; i++) {
            let animation = animations[i];
            if (animation.name == animationName)
                return animation;
        }
        return null;
    }
    /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findIkConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const ikConstraints = this.ikConstraints;
        for (let i = 0, n = ikConstraints.length; i < n; i++) {
            const constraint = ikConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
    /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
     * this method than to call it multiple times.
     * @return May be null. */
    findTransformConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const transformConstraints = this.transformConstraints;
        for (let i = 0, n = transformConstraints.length; i < n; i++) {
            const constraint = transformConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
    /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findPathConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const pathConstraints = this.pathConstraints;
        for (let i = 0, n = pathConstraints.length; i < n; i++) {
            const constraint = pathConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
    /** Finds a physics constraint by comparing each physics constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findPhysicsConstraint(constraintName) {
        if (!constraintName)
            throw new Error("constraintName cannot be null.");
        const physicsConstraints = this.physicsConstraints;
        for (let i = 0, n = physicsConstraints.length; i < n; i++) {
            const constraint = physicsConstraints[i];
            if (constraint.name == constraintName)
                return constraint;
        }
        return null;
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores an entry in the skin consisting of the slot index, name, and attachment **/
class SkinEntry {
    slotIndex;
    name;
    attachment;
    constructor(slotIndex = 0, name, attachment) {
        this.slotIndex = slotIndex;
        this.name = name;
        this.attachment = attachment;
    }
}
/** Stores attachments by slot index and attachment name.
 *
 * See SkeletonData {@link SkeletonData#defaultSkin}, Skeleton {@link Skeleton#skin}, and
 * [Runtime skins](http://esotericsoftware.com/spine-runtime-skins) in the Spine Runtimes Guide. */
class Skin {
    /** The skin's name, which is unique across all skins in the skeleton. */
    name;
    attachments = new Array();
    bones = Array();
    constraints = new Array();
    /** The color of the skin as it was in Spine, or a default color if nonessential data was not exported. */
    color = new Color(0.99607843, 0.61960787, 0.30980393, 1); // fe9e4fff
    constructor(name) {
        if (!name)
            throw new Error("name cannot be null.");
        this.name = name;
    }
    /** Adds an attachment to the skin for the specified slot index and name. */
    setAttachment(slotIndex, name, attachment) {
        if (!attachment)
            throw new Error("attachment cannot be null.");
        let attachments = this.attachments;
        if (slotIndex >= attachments.length)
            attachments.length = slotIndex + 1;
        if (!attachments[slotIndex])
            attachments[slotIndex] = {};
        attachments[slotIndex][name] = attachment;
    }
    /** Adds all attachments, bones, and constraints from the specified skin to this skin. */
    addSkin(skin) {
        for (let i = 0; i < skin.bones.length; i++) {
            let bone = skin.bones[i];
            let contained = false;
            for (let ii = 0; ii < this.bones.length; ii++) {
                if (this.bones[ii] == bone) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.bones.push(bone);
        }
        for (let i = 0; i < skin.constraints.length; i++) {
            let constraint = skin.constraints[i];
            let contained = false;
            for (let ii = 0; ii < this.constraints.length; ii++) {
                if (this.constraints[ii] == constraint) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.constraints.push(constraint);
        }
        let attachments = skin.getAttachments();
        for (let i = 0; i < attachments.length; i++) {
            var attachment = attachments[i];
            this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        }
    }
    /** Adds all bones and constraints and copies of all attachments from the specified skin to this skin. Mesh attachments are not
     * copied, instead a new linked mesh is created. The attachment copies can be modified without affecting the originals. */
    copySkin(skin) {
        for (let i = 0; i < skin.bones.length; i++) {
            let bone = skin.bones[i];
            let contained = false;
            for (let ii = 0; ii < this.bones.length; ii++) {
                if (this.bones[ii] == bone) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.bones.push(bone);
        }
        for (let i = 0; i < skin.constraints.length; i++) {
            let constraint = skin.constraints[i];
            let contained = false;
            for (let ii = 0; ii < this.constraints.length; ii++) {
                if (this.constraints[ii] == constraint) {
                    contained = true;
                    break;
                }
            }
            if (!contained)
                this.constraints.push(constraint);
        }
        let attachments = skin.getAttachments();
        for (let i = 0; i < attachments.length; i++) {
            var attachment = attachments[i];
            if (!attachment.attachment)
                continue;
            if (attachment.attachment instanceof MeshAttachment) {
                attachment.attachment = attachment.attachment.newLinkedMesh();
                this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
            }
            else {
                attachment.attachment = attachment.attachment.copy();
                this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
            }
        }
    }
    /** Returns the attachment for the specified slot index and name, or null. */
    getAttachment(slotIndex, name) {
        let dictionary = this.attachments[slotIndex];
        return dictionary ? dictionary[name] : null;
    }
    /** Removes the attachment in the skin for the specified slot index and name, if any. */
    removeAttachment(slotIndex, name) {
        let dictionary = this.attachments[slotIndex];
        if (dictionary)
            delete dictionary[name];
    }
    /** Returns all attachments in this skin. */
    getAttachments() {
        let entries = new Array();
        for (var i = 0; i < this.attachments.length; i++) {
            let slotAttachments = this.attachments[i];
            if (slotAttachments) {
                for (let name in slotAttachments) {
                    let attachment = slotAttachments[name];
                    if (attachment)
                        entries.push(new SkinEntry(i, name, attachment));
                }
            }
        }
        return entries;
    }
    /** Returns all attachments in this skin for the specified slot index. */
    getAttachmentsForSlot(slotIndex, attachments) {
        let slotAttachments = this.attachments[slotIndex];
        if (slotAttachments) {
            for (let name in slotAttachments) {
                let attachment = slotAttachments[name];
                if (attachment)
                    attachments.push(new SkinEntry(slotIndex, name, attachment));
            }
        }
    }
    /** Clears all attachments, bones, and constraints. */
    clear() {
        this.attachments.length = 0;
        this.bones.length = 0;
        this.constraints.length = 0;
    }
    /** Attach each attachment in this skin if the corresponding attachment in the old skin is currently attached. */
    attachAll(skeleton, oldSkin) {
        let slotIndex = 0;
        for (let i = 0; i < skeleton.slots.length; i++) {
            let slot = skeleton.slots[i];
            let slotAttachment = slot.getAttachment();
            if (slotAttachment && slotIndex < oldSkin.attachments.length) {
                let dictionary = oldSkin.attachments[slotIndex];
                for (let key in dictionary) {
                    let skinAttachment = dictionary[key];
                    if (slotAttachment == skinAttachment) {
                        let attachment = this.getAttachment(slotIndex, key);
                        if (attachment)
                            slot.setAttachment(attachment);
                        break;
                    }
                }
            }
            slotIndex++;
        }
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link Slot}. */
class SlotData {
    /** The index of the slot in {@link Skeleton#getSlots()}. */
    index = 0;
    /** The name of the slot, which is unique across all slots in the skeleton. */
    name;
    /** The bone this slot belongs to. */
    boneData;
    /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
     * color tinting. */
    color = new Color(1, 1, 1, 1);
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    /** The name of the attachment that is visible for this slot in the setup pose, or null if no attachment is visible. */
    attachmentName = null;
    /** The blend mode for drawing the slot's attachment. */
    blendMode = BlendMode.Normal;
    /** False if the slot was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = true;
    constructor(index, name, boneData) {
        if (index < 0)
            throw new Error("index must be >= 0.");
        if (!name)
            throw new Error("name cannot be null.");
        if (!boneData)
            throw new Error("boneData cannot be null.");
        this.index = index;
        this.name = name;
        this.boneData = boneData;
    }
}
/** Determines how images are blended with existing pixels when drawn. */
var BlendMode;
(function (BlendMode) {
    BlendMode[BlendMode["Normal"] = 0] = "Normal";
    BlendMode[BlendMode["Additive"] = 1] = "Additive";
    BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
    BlendMode[BlendMode["Screen"] = 3] = "Screen";
})(BlendMode || (BlendMode = {}));

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Stores the setup pose for a {@link TransformConstraint}.
 *
 * See [Transform constraints](http://esotericsoftware.com/spine-transform-constraints) in the Spine User Guide. */
class TransformConstraintData extends ConstraintData {
    /** The bones that will be modified by this transform constraint. */
    bones = new Array();
    /** The target bone whose world transform will be copied to the constrained bones. */
    _target = null;
    set target(boneData) { this._target = boneData; }
    get target() {
        if (!this._target)
            throw new Error("BoneData not set.");
        else
            return this._target;
    }
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    mixScaleX = 0;
    mixScaleY = 0;
    mixShearY = 0;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    /** An offset added to the constrained bone X translation. */
    offsetX = 0;
    /** An offset added to the constrained bone Y translation. */
    offsetY = 0;
    /** An offset added to the constrained bone scaleX. */
    offsetScaleX = 0;
    /** An offset added to the constrained bone scaleY. */
    offsetScaleY = 0;
    /** An offset added to the constrained bone shearY. */
    offsetShearY = 0;
    relative = false;
    local = false;
    constructor(name) {
        super(name, 0, false);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
/** Loads skeleton data in the Spine binary format.
 *
 * See [Spine binary format](http://esotericsoftware.com/spine-binary-format) and
 * [JSON and binary data](http://esotericsoftware.com/spine-loading-skeleton-data#JSON-and-binary-data) in the Spine
 * Runtimes Guide. */
class SkeletonBinary {
    /** Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
     * runtime than were used in Spine.
     *
     * See [Scaling](http://esotericsoftware.com/spine-loading-skeleton-data#Scaling) in the Spine Runtimes Guide. */
    scale = 1;
    attachmentLoader;
    linkedMeshes = new Array();
    constructor(attachmentLoader) {
        this.attachmentLoader = attachmentLoader;
    }
    readSkeletonData(binary) {
        let scale = this.scale;
        let skeletonData = new SkeletonData();
        skeletonData.name = ""; // BOZO
        let input = new BinaryInput(binary);
        let lowHash = input.readInt32();
        let highHash = input.readInt32();
        skeletonData.hash = highHash == 0 && lowHash == 0 ? null : highHash.toString(16) + lowHash.toString(16);
        skeletonData.version = input.readString();
        skeletonData.x = input.readFloat();
        skeletonData.y = input.readFloat();
        skeletonData.width = input.readFloat();
        skeletonData.height = input.readFloat();
        skeletonData.referenceScale = input.readFloat() * scale;
        let nonessential = input.readBoolean();
        if (nonessential) {
            skeletonData.fps = input.readFloat();
            skeletonData.imagesPath = input.readString();
            skeletonData.audioPath = input.readString();
        }
        let n = 0;
        // Strings.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let str = input.readString();
            if (!str)
                throw new Error("String in string table must not be null.");
            input.strings.push(str);
        }
        // Bones.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("Bone name must not be null.");
            let parent = i == 0 ? null : skeletonData.bones[input.readInt(true)];
            let data = new BoneData(i, name, parent);
            data.rotation = input.readFloat();
            data.x = input.readFloat() * scale;
            data.y = input.readFloat() * scale;
            data.scaleX = input.readFloat();
            data.scaleY = input.readFloat();
            data.shearX = input.readFloat();
            data.shearY = input.readFloat();
            data.length = input.readFloat() * scale;
            data.inherit = input.readByte();
            data.skinRequired = input.readBoolean();
            if (nonessential) {
                Color.rgba8888ToColor(data.color, input.readInt32());
                data.icon = input.readString() ?? undefined;
                data.visible = input.readBoolean();
            }
            skeletonData.bones.push(data);
        }
        // Slots.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let slotName = input.readString();
            if (!slotName)
                throw new Error("Slot name must not be null.");
            let boneData = skeletonData.bones[input.readInt(true)];
            let data = new SlotData(i, slotName, boneData);
            Color.rgba8888ToColor(data.color, input.readInt32());
            let darkColor = input.readInt32();
            if (darkColor != -1)
                Color.rgb888ToColor(data.darkColor = new Color(), darkColor);
            data.attachmentName = input.readStringRef();
            data.blendMode = input.readInt(true);
            if (nonessential)
                data.visible = input.readBoolean();
            skeletonData.slots.push(data);
        }
        // IK constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("IK constraint data name must not be null.");
            let data = new IkConstraintData(name);
            data.order = input.readInt(true);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
                data.bones.push(skeletonData.bones[input.readInt(true)]);
            data.target = skeletonData.bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) != 0;
            data.bendDirection = (flags & 2) != 0 ? 1 : -1;
            data.compress = (flags & 4) != 0;
            data.stretch = (flags & 8) != 0;
            data.uniform = (flags & 16) != 0;
            if ((flags & 32) != 0)
                data.mix = (flags & 64) != 0 ? input.readFloat() : 1;
            if ((flags & 128) != 0)
                data.softness = input.readFloat() * scale;
            skeletonData.ikConstraints.push(data);
        }
        // Transform constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("Transform constraint data name must not be null.");
            let data = new TransformConstraintData(name);
            data.order = input.readInt(true);
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
                data.bones.push(skeletonData.bones[input.readInt(true)]);
            data.target = skeletonData.bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) != 0;
            data.local = (flags & 2) != 0;
            data.relative = (flags & 4) != 0;
            if ((flags & 8) != 0)
                data.offsetRotation = input.readFloat();
            if ((flags & 16) != 0)
                data.offsetX = input.readFloat() * scale;
            if ((flags & 32) != 0)
                data.offsetY = input.readFloat() * scale;
            if ((flags & 64) != 0)
                data.offsetScaleX = input.readFloat();
            if ((flags & 128) != 0)
                data.offsetScaleY = input.readFloat();
            flags = input.readByte();
            if ((flags & 1) != 0)
                data.offsetShearY = input.readFloat();
            if ((flags & 2) != 0)
                data.mixRotate = input.readFloat();
            if ((flags & 4) != 0)
                data.mixX = input.readFloat();
            if ((flags & 8) != 0)
                data.mixY = input.readFloat();
            if ((flags & 16) != 0)
                data.mixScaleX = input.readFloat();
            if ((flags & 32) != 0)
                data.mixScaleY = input.readFloat();
            if ((flags & 64) != 0)
                data.mixShearY = input.readFloat();
            skeletonData.transformConstraints.push(data);
        }
        // Path constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            let name = input.readString();
            if (!name)
                throw new Error("Path constraint data name must not be null.");
            let data = new PathConstraintData(name);
            data.order = input.readInt(true);
            data.skinRequired = input.readBoolean();
            nn = input.readInt(true);
            for (let ii = 0; ii < nn; ii++)
                data.bones.push(skeletonData.bones[input.readInt(true)]);
            data.target = skeletonData.slots[input.readInt(true)];
            const flags = input.readByte();
            data.positionMode = flags & 1;
            data.spacingMode = (flags >> 1) & 3;
            data.rotateMode = (flags >> 3) & 3;
            if ((flags & 128) != 0)
                data.offsetRotation = input.readFloat();
            data.position = input.readFloat();
            if (data.positionMode == PositionMode.Fixed)
                data.position *= scale;
            data.spacing = input.readFloat();
            if (data.spacingMode == SpacingMode.Length || data.spacingMode == SpacingMode.Fixed)
                data.spacing *= scale;
            data.mixRotate = input.readFloat();
            data.mixX = input.readFloat();
            data.mixY = input.readFloat();
            skeletonData.pathConstraints.push(data);
        }
        // Physics constraints.
        n = input.readInt(true);
        for (let i = 0, nn; i < n; i++) {
            const name = input.readString();
            if (!name)
                throw new Error("Physics constraint data name must not be null.");
            const data = new PhysicsConstraintData(name);
            data.order = input.readInt(true);
            data.bone = skeletonData.bones[input.readInt(true)];
            let flags = input.readByte();
            data.skinRequired = (flags & 1) != 0;
            if ((flags & 2) != 0)
                data.x = input.readFloat();
            if ((flags & 4) != 0)
                data.y = input.readFloat();
            if ((flags & 8) != 0)
                data.rotate = input.readFloat();
            if ((flags & 16) != 0)
                data.scaleX = input.readFloat();
            if ((flags & 32) != 0)
                data.shearX = input.readFloat();
            data.limit = ((flags & 64) != 0 ? input.readFloat() : 5000) * scale;
            data.step = 1 / input.readUnsignedByte();
            data.inertia = input.readFloat();
            data.strength = input.readFloat();
            data.damping = input.readFloat();
            data.massInverse = (flags & 128) != 0 ? input.readFloat() : 1;
            data.wind = input.readFloat();
            data.gravity = input.readFloat();
            flags = input.readByte();
            if ((flags & 1) != 0)
                data.inertiaGlobal = true;
            if ((flags & 2) != 0)
                data.strengthGlobal = true;
            if ((flags & 4) != 0)
                data.dampingGlobal = true;
            if ((flags & 8) != 0)
                data.massGlobal = true;
            if ((flags & 16) != 0)
                data.windGlobal = true;
            if ((flags & 32) != 0)
                data.gravityGlobal = true;
            if ((flags & 64) != 0)
                data.mixGlobal = true;
            data.mix = (flags & 128) != 0 ? input.readFloat() : 1;
            skeletonData.physicsConstraints.push(data);
        }
        // Default skin.
        let defaultSkin = this.readSkin(input, skeletonData, true, nonessential);
        if (defaultSkin) {
            skeletonData.defaultSkin = defaultSkin;
            skeletonData.skins.push(defaultSkin);
        }
        // Skins.
        {
            let i = skeletonData.skins.length;
            Utils.setArraySize(skeletonData.skins, n = i + input.readInt(true));
            for (; i < n; i++) {
                let skin = this.readSkin(input, skeletonData, false, nonessential);
                if (!skin)
                    throw new Error("readSkin() should not have returned null.");
                skeletonData.skins[i] = skin;
            }
        }
        // Linked meshes.
        n = this.linkedMeshes.length;
        for (let i = 0; i < n; i++) {
            let linkedMesh = this.linkedMeshes[i];
            const skin = skeletonData.skins[linkedMesh.skinIndex];
            if (!linkedMesh.parent)
                throw new Error("Linked mesh parent must not be null");
            let parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
            if (!parent)
                throw new Error(`Parent mesh not found: ${linkedMesh.parent}`);
            linkedMesh.mesh.timelineAttachment = linkedMesh.inheritTimeline ? parent : linkedMesh.mesh;
            linkedMesh.mesh.setParentMesh(parent);
            if (linkedMesh.mesh.region != null)
                linkedMesh.mesh.updateRegion();
        }
        this.linkedMeshes.length = 0;
        // Events.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let eventName = input.readString();
            if (!eventName)
                throw new Error("Event data name must not be null");
            let data = new EventData(eventName);
            data.intValue = input.readInt(false);
            data.floatValue = input.readFloat();
            data.stringValue = input.readString();
            data.audioPath = input.readString();
            if (data.audioPath) {
                data.volume = input.readFloat();
                data.balance = input.readFloat();
            }
            skeletonData.events.push(data);
        }
        // Animations.
        n = input.readInt(true);
        for (let i = 0; i < n; i++) {
            let animationName = input.readString();
            if (!animationName)
                throw new Error("Animatio name must not be null.");
            skeletonData.animations.push(this.readAnimation(input, animationName, skeletonData));
        }
        return skeletonData;
    }
    readSkin(input, skeletonData, defaultSkin, nonessential) {
        let skin = null;
        let slotCount = 0;
        if (defaultSkin) {
            slotCount = input.readInt(true);
            if (slotCount == 0)
                return null;
            skin = new Skin("default");
        }
        else {
            let skinName = input.readString();
            if (!skinName)
                throw new Error("Skin name must not be null.");
            skin = new Skin(skinName);
            if (nonessential)
                Color.rgba8888ToColor(skin.color, input.readInt32());
            skin.bones.length = input.readInt(true);
            for (let i = 0, n = skin.bones.length; i < n; i++)
                skin.bones[i] = skeletonData.bones[input.readInt(true)];
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.ikConstraints[input.readInt(true)]);
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.transformConstraints[input.readInt(true)]);
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.pathConstraints[input.readInt(true)]);
            for (let i = 0, n = input.readInt(true); i < n; i++)
                skin.constraints.push(skeletonData.physicsConstraints[input.readInt(true)]);
            slotCount = input.readInt(true);
        }
        for (let i = 0; i < slotCount; i++) {
            let slotIndex = input.readInt(true);
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let name = input.readStringRef();
                if (!name)
                    throw new Error("Attachment name must not be null");
                let attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name, nonessential);
                if (attachment)
                    skin.setAttachment(slotIndex, name, attachment);
            }
        }
        return skin;
    }
    readAttachment(input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
        let scale = this.scale;
        let flags = input.readByte();
        const name = (flags & 8) != 0 ? input.readStringRef() : attachmentName;
        if (!name)
            throw new Error("Attachment name must not be null");
        switch ((flags & 0b111)) { // BUG?
            case AttachmentType.Region: {
                let path = (flags & 16) != 0 ? input.readStringRef() : null;
                const color = (flags & 32) != 0 ? input.readInt32() : 0xffffffff;
                const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
                let rotation = (flags & 128) != 0 ? input.readFloat() : 0;
                let x = input.readFloat();
                let y = input.readFloat();
                let scaleX = input.readFloat();
                let scaleY = input.readFloat();
                let width = input.readFloat();
                let height = input.readFloat();
                if (!path)
                    path = name;
                let region = this.attachmentLoader.newRegionAttachment(skin, name, path, sequence);
                if (!region)
                    return null;
                region.path = path;
                region.x = x * scale;
                region.y = y * scale;
                region.scaleX = scaleX;
                region.scaleY = scaleY;
                region.rotation = rotation;
                region.width = width * scale;
                region.height = height * scale;
                Color.rgba8888ToColor(region.color, color);
                region.sequence = sequence;
                if (sequence == null)
                    region.updateRegion();
                return region;
            }
            case AttachmentType.BoundingBox: {
                let vertices = this.readVertices(input, (flags & 16) != 0);
                let color = nonessential ? input.readInt32() : 0;
                let box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
                if (!box)
                    return null;
                box.worldVerticesLength = vertices.length;
                box.vertices = vertices.vertices;
                box.bones = vertices.bones;
                if (nonessential)
                    Color.rgba8888ToColor(box.color, color);
                return box;
            }
            case AttachmentType.Mesh: {
                let path = (flags & 16) != 0 ? input.readStringRef() : name;
                const color = (flags & 32) != 0 ? input.readInt32() : 0xffffffff;
                const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
                const hullLength = input.readInt(true);
                const vertices = this.readVertices(input, (flags & 128) != 0);
                const uvs = this.readFloatArray(input, vertices.length, 1);
                const triangles = this.readShortArray(input, (vertices.length - hullLength - 2) * 3);
                let edges = [];
                let width = 0, height = 0;
                if (nonessential) {
                    edges = this.readShortArray(input, input.readInt(true));
                    width = input.readFloat();
                    height = input.readFloat();
                }
                if (!path)
                    path = name;
                let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
                if (!mesh)
                    return null;
                mesh.path = path;
                Color.rgba8888ToColor(mesh.color, color);
                mesh.bones = vertices.bones;
                mesh.vertices = vertices.vertices;
                mesh.worldVerticesLength = vertices.length;
                mesh.triangles = triangles;
                mesh.regionUVs = uvs;
                if (sequence == null)
                    mesh.updateRegion();
                mesh.hullLength = hullLength << 1;
                mesh.sequence = sequence;
                if (nonessential) {
                    mesh.edges = edges;
                    mesh.width = width * scale;
                    mesh.height = height * scale;
                }
                return mesh;
            }
            case AttachmentType.LinkedMesh: {
                const path = (flags & 16) != 0 ? input.readStringRef() : name;
                if (path == null)
                    throw new Error("Path of linked mesh must not be null");
                const color = (flags & 32) != 0 ? input.readInt32() : 0xffffffff;
                const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
                const inheritTimelines = (flags & 128) != 0;
                const skinIndex = input.readInt(true);
                const parent = input.readStringRef();
                let width = 0, height = 0;
                if (nonessential) {
                    width = input.readFloat();
                    height = input.readFloat();
                }
                let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
                if (!mesh)
                    return null;
                mesh.path = path;
                Color.rgba8888ToColor(mesh.color, color);
                mesh.sequence = sequence;
                if (nonessential) {
                    mesh.width = width * scale;
                    mesh.height = height * scale;
                }
                this.linkedMeshes.push(new LinkedMesh(mesh, skinIndex, slotIndex, parent, inheritTimelines));
                return mesh;
            }
            case AttachmentType.Path: {
                const closed = (flags & 16) != 0;
                const constantSpeed = (flags & 32) != 0;
                const vertices = this.readVertices(input, (flags & 64) != 0);
                const lengths = Utils.newArray(vertices.length / 6, 0);
                for (let i = 0, n = lengths.length; i < n; i++)
                    lengths[i] = input.readFloat() * scale;
                const color = nonessential ? input.readInt32() : 0;
                const path = this.attachmentLoader.newPathAttachment(skin, name);
                if (!path)
                    return null;
                path.closed = closed;
                path.constantSpeed = constantSpeed;
                path.worldVerticesLength = vertices.length;
                path.vertices = vertices.vertices;
                path.bones = vertices.bones;
                path.lengths = lengths;
                if (nonessential)
                    Color.rgba8888ToColor(path.color, color);
                return path;
            }
            case AttachmentType.Point: {
                const rotation = input.readFloat();
                const x = input.readFloat();
                const y = input.readFloat();
                const color = nonessential ? input.readInt32() : 0;
                const point = this.attachmentLoader.newPointAttachment(skin, name);
                if (!point)
                    return null;
                point.x = x * scale;
                point.y = y * scale;
                point.rotation = rotation;
                if (nonessential)
                    Color.rgba8888ToColor(point.color, color);
                return point;
            }
            case AttachmentType.Clipping: {
                const endSlotIndex = input.readInt(true);
                const vertices = this.readVertices(input, (flags & 16) != 0);
                let color = nonessential ? input.readInt32() : 0;
                let clip = this.attachmentLoader.newClippingAttachment(skin, name);
                if (!clip)
                    return null;
                clip.endSlot = skeletonData.slots[endSlotIndex];
                clip.worldVerticesLength = vertices.length;
                clip.vertices = vertices.vertices;
                clip.bones = vertices.bones;
                if (nonessential)
                    Color.rgba8888ToColor(clip.color, color);
                return clip;
            }
        }
        return null;
    }
    readSequence(input) {
        let sequence = new Sequence(input.readInt(true));
        sequence.start = input.readInt(true);
        sequence.digits = input.readInt(true);
        sequence.setupIndex = input.readInt(true);
        return sequence;
    }
    readVertices(input, weighted) {
        const scale = this.scale;
        const vertexCount = input.readInt(true);
        const vertices = new Vertices();
        vertices.length = vertexCount << 1;
        if (!weighted) {
            vertices.vertices = this.readFloatArray(input, vertices.length, scale);
            return vertices;
        }
        let weights = new Array();
        let bonesArray = new Array();
        for (let i = 0; i < vertexCount; i++) {
            let boneCount = input.readInt(true);
            bonesArray.push(boneCount);
            for (let ii = 0; ii < boneCount; ii++) {
                bonesArray.push(input.readInt(true));
                weights.push(input.readFloat() * scale);
                weights.push(input.readFloat() * scale);
                weights.push(input.readFloat());
            }
        }
        vertices.vertices = Utils.toFloatArray(weights);
        vertices.bones = bonesArray;
        return vertices;
    }
    readFloatArray(input, n, scale) {
        let array = new Array(n);
        if (scale == 1) {
            for (let i = 0; i < n; i++)
                array[i] = input.readFloat();
        }
        else {
            for (let i = 0; i < n; i++)
                array[i] = input.readFloat() * scale;
        }
        return array;
    }
    readShortArray(input, n) {
        let array = new Array(n);
        for (let i = 0; i < n; i++)
            array[i] = input.readInt(true);
        return array;
    }
    readAnimation(input, name, skeletonData) {
        input.readInt(true); // Number of timelines.
        let timelines = new Array();
        let scale = this.scale;
        // Slot timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let slotIndex = input.readInt(true);
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let timelineType = input.readByte();
                let frameCount = input.readInt(true);
                let frameLast = frameCount - 1;
                switch (timelineType) {
                    case SLOT_ATTACHMENT: {
                        let timeline = new AttachmentTimeline(frameCount, slotIndex);
                        for (let frame = 0; frame < frameCount; frame++)
                            timeline.setFrame(frame, input.readFloat(), input.readStringRef());
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGBA: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGBATimeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        let a = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b, a);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let r2 = input.readUnsignedByte() / 255.0;
                            let g2 = input.readUnsignedByte() / 255.0;
                            let b2 = input.readUnsignedByte() / 255.0;
                            let a2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, a2, 1);
                            }
                            time = time2;
                            r = r2;
                            g = g2;
                            b = b2;
                            a = a2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGB: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGBTimeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let r2 = input.readUnsignedByte() / 255.0;
                            let g2 = input.readUnsignedByte() / 255.0;
                            let b2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                            }
                            time = time2;
                            r = r2;
                            g = g2;
                            b = b2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGBA2: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGBA2Timeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        let a = input.readUnsignedByte() / 255.0;
                        let r2 = input.readUnsignedByte() / 255.0;
                        let g2 = input.readUnsignedByte() / 255.0;
                        let b2 = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b, a, r2, g2, b2);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let nr = input.readUnsignedByte() / 255.0;
                            let ng = input.readUnsignedByte() / 255.0;
                            let nb = input.readUnsignedByte() / 255.0;
                            let na = input.readUnsignedByte() / 255.0;
                            let nr2 = input.readUnsignedByte() / 255.0;
                            let ng2 = input.readUnsignedByte() / 255.0;
                            let nb2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, na, 1);
                                    setBezier(input, timeline, bezier++, frame, 4, time, time2, r2, nr2, 1);
                                    setBezier(input, timeline, bezier++, frame, 5, time, time2, g2, ng2, 1);
                                    setBezier(input, timeline, bezier++, frame, 6, time, time2, b2, nb2, 1);
                            }
                            time = time2;
                            r = nr;
                            g = ng;
                            b = nb;
                            a = na;
                            r2 = nr2;
                            g2 = ng2;
                            b2 = nb2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_RGB2: {
                        let bezierCount = input.readInt(true);
                        let timeline = new RGB2Timeline(frameCount, bezierCount, slotIndex);
                        let time = input.readFloat();
                        let r = input.readUnsignedByte() / 255.0;
                        let g = input.readUnsignedByte() / 255.0;
                        let b = input.readUnsignedByte() / 255.0;
                        let r2 = input.readUnsignedByte() / 255.0;
                        let g2 = input.readUnsignedByte() / 255.0;
                        let b2 = input.readUnsignedByte() / 255.0;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, r, g, b, r2, g2, b2);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let nr = input.readUnsignedByte() / 255.0;
                            let ng = input.readUnsignedByte() / 255.0;
                            let nb = input.readUnsignedByte() / 255.0;
                            let nr2 = input.readUnsignedByte() / 255.0;
                            let ng2 = input.readUnsignedByte() / 255.0;
                            let nb2 = input.readUnsignedByte() / 255.0;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                                    setBezier(input, timeline, bezier++, frame, 3, time, time2, r2, nr2, 1);
                                    setBezier(input, timeline, bezier++, frame, 4, time, time2, g2, ng2, 1);
                                    setBezier(input, timeline, bezier++, frame, 5, time, time2, b2, nb2, 1);
                            }
                            time = time2;
                            r = nr;
                            g = ng;
                            b = nb;
                            r2 = nr2;
                            g2 = ng2;
                            b2 = nb2;
                        }
                        timelines.push(timeline);
                        break;
                    }
                    case SLOT_ALPHA: {
                        let timeline = new AlphaTimeline(frameCount, input.readInt(true), slotIndex);
                        let time = input.readFloat(), a = input.readUnsignedByte() / 255;
                        for (let frame = 0, bezier = 0;; frame++) {
                            timeline.setFrame(frame, time, a);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat();
                            let a2 = input.readUnsignedByte() / 255;
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, a, a2, 1);
                            }
                            time = time2;
                            a = a2;
                        }
                        timelines.push(timeline);
                    }
                }
            }
        }
        // Bone timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let boneIndex = input.readInt(true);
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let type = input.readByte(), frameCount = input.readInt(true);
                if (type == BONE_INHERIT) {
                    let timeline = new InheritTimeline(frameCount, boneIndex);
                    for (let frame = 0; frame < frameCount; frame++) {
                        timeline.setFrame(frame, input.readFloat(), input.readByte());
                    }
                    timelines.push(timeline);
                    continue;
                }
                let bezierCount = input.readInt(true);
                switch (type) {
                    case BONE_ROTATE:
                        timelines.push(readTimeline1(input, new RotateTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_TRANSLATE:
                        timelines.push(readTimeline2(input, new TranslateTimeline(frameCount, bezierCount, boneIndex), scale));
                        break;
                    case BONE_TRANSLATEX:
                        timelines.push(readTimeline1(input, new TranslateXTimeline(frameCount, bezierCount, boneIndex), scale));
                        break;
                    case BONE_TRANSLATEY:
                        timelines.push(readTimeline1(input, new TranslateYTimeline(frameCount, bezierCount, boneIndex), scale));
                        break;
                    case BONE_SCALE:
                        timelines.push(readTimeline2(input, new ScaleTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SCALEX:
                        timelines.push(readTimeline1(input, new ScaleXTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SCALEY:
                        timelines.push(readTimeline1(input, new ScaleYTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SHEAR:
                        timelines.push(readTimeline2(input, new ShearTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SHEARX:
                        timelines.push(readTimeline1(input, new ShearXTimeline(frameCount, bezierCount, boneIndex), 1));
                        break;
                    case BONE_SHEARY:
                        timelines.push(readTimeline1(input, new ShearYTimeline(frameCount, bezierCount, boneIndex), 1));
                }
            }
        }
        // IK constraint timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
            let timeline = new IkConstraintTimeline(frameCount, input.readInt(true), index);
            let flags = input.readByte();
            let time = input.readFloat(), mix = (flags & 1) != 0 ? ((flags & 2) != 0 ? input.readFloat() : 1) : 0;
            let softness = (flags & 4) != 0 ? input.readFloat() * scale : 0;
            for (let frame = 0, bezier = 0;; frame++) {
                timeline.setFrame(frame, time, mix, softness, (flags & 8) != 0 ? 1 : -1, (flags & 16) != 0, (flags & 32) != 0);
                if (frame == frameLast)
                    break;
                flags = input.readByte();
                const time2 = input.readFloat(), mix2 = (flags & 1) != 0 ? ((flags & 2) != 0 ? input.readFloat() : 1) : 0;
                const softness2 = (flags & 4) != 0 ? input.readFloat() * scale : 0;
                if ((flags & 64) != 0) {
                    timeline.setStepped(frame);
                }
                else if ((flags & 128) != 0) {
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, mix, mix2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, softness, softness2, scale);
                }
                time = time2;
                mix = mix2;
                softness = softness2;
            }
            timelines.push(timeline);
        }
        // Transform constraint timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
            let timeline = new TransformConstraintTimeline(frameCount, input.readInt(true), index);
            let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat(), mixScaleX = input.readFloat(), mixScaleY = input.readFloat(), mixShearY = input.readFloat();
            for (let frame = 0, bezier = 0;; frame++) {
                timeline.setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
                if (frame == frameLast)
                    break;
                let time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat(), mixScaleX2 = input.readFloat(), mixScaleY2 = input.readFloat(), mixShearY2 = input.readFloat();
                switch (input.readByte()) {
                    case CURVE_STEPPED:
                        timeline.setStepped(frame);
                        break;
                    case CURVE_BEZIER:
                        setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                        setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
                        setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
                        setBezier(input, timeline, bezier++, frame, 3, time, time2, mixScaleX, mixScaleX2, 1);
                        setBezier(input, timeline, bezier++, frame, 4, time, time2, mixScaleY, mixScaleY2, 1);
                        setBezier(input, timeline, bezier++, frame, 5, time, time2, mixShearY, mixShearY2, 1);
                }
                time = time2;
                mixRotate = mixRotate2;
                mixX = mixX2;
                mixY = mixY2;
                mixScaleX = mixScaleX2;
                mixScaleY = mixScaleY2;
                mixShearY = mixShearY2;
            }
            timelines.push(timeline);
        }
        // Path constraint timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let index = input.readInt(true);
            let data = skeletonData.pathConstraints[index];
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                const type = input.readByte(), frameCount = input.readInt(true), bezierCount = input.readInt(true);
                switch (type) {
                    case PATH_POSITION:
                        timelines
                            .push(readTimeline1(input, new PathConstraintPositionTimeline(frameCount, bezierCount, index), data.positionMode == PositionMode.Fixed ? scale : 1));
                        break;
                    case PATH_SPACING:
                        timelines
                            .push(readTimeline1(input, new PathConstraintSpacingTimeline(frameCount, bezierCount, index), data.spacingMode == SpacingMode.Length || data.spacingMode == SpacingMode.Fixed ? scale : 1));
                        break;
                    case PATH_MIX:
                        let timeline = new PathConstraintMixTimeline(frameCount, bezierCount, index);
                        let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat();
                        for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
                            timeline.setFrame(frame, time, mixRotate, mixX, mixY);
                            if (frame == frameLast)
                                break;
                            let time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat();
                            switch (input.readByte()) {
                                case CURVE_STEPPED:
                                    timeline.setStepped(frame);
                                    break;
                                case CURVE_BEZIER:
                                    setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                                    setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
                                    setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
                            }
                            time = time2;
                            mixRotate = mixRotate2;
                            mixX = mixX2;
                            mixY = mixY2;
                        }
                        timelines.push(timeline);
                }
            }
        }
        // Physics timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            const index = input.readInt(true) - 1;
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                const type = input.readByte(), frameCount = input.readInt(true);
                if (type == PHYSICS_RESET) {
                    const timeline = new PhysicsConstraintResetTimeline(frameCount, index);
                    for (let frame = 0; frame < frameCount; frame++)
                        timeline.setFrame(frame, input.readFloat());
                    timelines.push(timeline);
                    continue;
                }
                const bezierCount = input.readInt(true);
                switch (type) {
                    case PHYSICS_INERTIA:
                        timelines.push(readTimeline1(input, new PhysicsConstraintInertiaTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_STRENGTH:
                        timelines.push(readTimeline1(input, new PhysicsConstraintStrengthTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_DAMPING:
                        timelines.push(readTimeline1(input, new PhysicsConstraintDampingTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_MASS:
                        timelines.push(readTimeline1(input, new PhysicsConstraintMassTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_WIND:
                        timelines.push(readTimeline1(input, new PhysicsConstraintWindTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_GRAVITY:
                        timelines.push(readTimeline1(input, new PhysicsConstraintGravityTimeline(frameCount, bezierCount, index), 1));
                        break;
                    case PHYSICS_MIX:
                        timelines.push(readTimeline1(input, new PhysicsConstraintMixTimeline(frameCount, bezierCount, index), 1));
                }
            }
        }
        // Deform timelines.
        for (let i = 0, n = input.readInt(true); i < n; i++) {
            let skin = skeletonData.skins[input.readInt(true)];
            for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                let slotIndex = input.readInt(true);
                for (let iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
                    let attachmentName = input.readStringRef();
                    if (!attachmentName)
                        throw new Error("attachmentName must not be null.");
                    let attachment = skin.getAttachment(slotIndex, attachmentName);
                    let timelineType = input.readByte();
                    let frameCount = input.readInt(true);
                    let frameLast = frameCount - 1;
                    switch (timelineType) {
                        case ATTACHMENT_DEFORM: {
                            let vertexAttachment = attachment;
                            let weighted = vertexAttachment.bones;
                            let vertices = vertexAttachment.vertices;
                            let deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                            let bezierCount = input.readInt(true);
                            let timeline = new DeformTimeline(frameCount, bezierCount, slotIndex, vertexAttachment);
                            let time = input.readFloat();
                            for (let frame = 0, bezier = 0;; frame++) {
                                let deform;
                                let end = input.readInt(true);
                                if (end == 0)
                                    deform = weighted ? Utils.newFloatArray(deformLength) : vertices;
                                else {
                                    deform = Utils.newFloatArray(deformLength);
                                    let start = input.readInt(true);
                                    end += start;
                                    if (scale == 1) {
                                        for (let v = start; v < end; v++)
                                            deform[v] = input.readFloat();
                                    }
                                    else {
                                        for (let v = start; v < end; v++)
                                            deform[v] = input.readFloat() * scale;
                                    }
                                    if (!weighted) {
                                        for (let v = 0, vn = deform.length; v < vn; v++)
                                            deform[v] += vertices[v];
                                    }
                                }
                                timeline.setFrame(frame, time, deform);
                                if (frame == frameLast)
                                    break;
                                let time2 = input.readFloat();
                                switch (input.readByte()) {
                                    case CURVE_STEPPED:
                                        timeline.setStepped(frame);
                                        break;
                                    case CURVE_BEZIER:
                                        setBezier(input, timeline, bezier++, frame, 0, time, time2, 0, 1, 1);
                                }
                                time = time2;
                            }
                            timelines.push(timeline);
                            break;
                        }
                        case ATTACHMENT_SEQUENCE: {
                            let timeline = new SequenceTimeline(frameCount, slotIndex, attachment);
                            for (let frame = 0; frame < frameCount; frame++) {
                                let time = input.readFloat();
                                let modeAndIndex = input.readInt32();
                                timeline.setFrame(frame, time, SequenceModeValues[modeAndIndex & 0xf], modeAndIndex >> 4, input.readFloat());
                            }
                            timelines.push(timeline);
                            break;
                        }
                    }
                }
            }
        }
        // Draw order timeline.
        let drawOrderCount = input.readInt(true);
        if (drawOrderCount > 0) {
            let timeline = new DrawOrderTimeline(drawOrderCount);
            let slotCount = skeletonData.slots.length;
            for (let i = 0; i < drawOrderCount; i++) {
                let time = input.readFloat();
                let offsetCount = input.readInt(true);
                let drawOrder = Utils.newArray(slotCount, 0);
                for (let ii = slotCount - 1; ii >= 0; ii--)
                    drawOrder[ii] = -1;
                let unchanged = Utils.newArray(slotCount - offsetCount, 0);
                let originalIndex = 0, unchangedIndex = 0;
                for (let ii = 0; ii < offsetCount; ii++) {
                    let slotIndex = input.readInt(true);
                    // Collect unchanged items.
                    while (originalIndex != slotIndex)
                        unchanged[unchangedIndex++] = originalIndex++;
                    // Set changed items.
                    drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
                }
                // Collect remaining unchanged items.
                while (originalIndex < slotCount)
                    unchanged[unchangedIndex++] = originalIndex++;
                // Fill in unchanged items.
                for (let ii = slotCount - 1; ii >= 0; ii--)
                    if (drawOrder[ii] == -1)
                        drawOrder[ii] = unchanged[--unchangedIndex];
                timeline.setFrame(i, time, drawOrder);
            }
            timelines.push(timeline);
        }
        // Event timeline.
        let eventCount = input.readInt(true);
        if (eventCount > 0) {
            let timeline = new EventTimeline(eventCount);
            for (let i = 0; i < eventCount; i++) {
                let time = input.readFloat();
                let eventData = skeletonData.events[input.readInt(true)];
                let event = new Event(time, eventData);
                event.intValue = input.readInt(false);
                event.floatValue = input.readFloat();
                event.stringValue = input.readString();
                if (event.stringValue == null)
                    event.stringValue = eventData.stringValue;
                if (event.data.audioPath) {
                    event.volume = input.readFloat();
                    event.balance = input.readFloat();
                }
                timeline.setFrame(i, event);
            }
            timelines.push(timeline);
        }
        let duration = 0;
        for (let i = 0, n = timelines.length; i < n; i++)
            duration = Math.max(duration, timelines[i].getDuration());
        return new Animation(name, timelines, duration);
    }
}
class BinaryInput {
    strings;
    index;
    buffer;
    constructor(data, strings = new Array(), index = 0, buffer = new DataView(data instanceof ArrayBuffer ? data : data.buffer)) {
        this.strings = strings;
        this.index = index;
        this.buffer = buffer;
    }
    readByte() {
        return this.buffer.getInt8(this.index++);
    }
    readUnsignedByte() {
        return this.buffer.getUint8(this.index++);
    }
    readShort() {
        let value = this.buffer.getInt16(this.index);
        this.index += 2;
        return value;
    }
    readInt32() {
        let value = this.buffer.getInt32(this.index);
        this.index += 4;
        return value;
    }
    readInt(optimizePositive) {
        let b = this.readByte();
        let result = b & 0x7F;
        if ((b & 0x80) != 0) {
            b = this.readByte();
            result |= (b & 0x7F) << 7;
            if ((b & 0x80) != 0) {
                b = this.readByte();
                result |= (b & 0x7F) << 14;
                if ((b & 0x80) != 0) {
                    b = this.readByte();
                    result |= (b & 0x7F) << 21;
                    if ((b & 0x80) != 0) {
                        b = this.readByte();
                        result |= (b & 0x7F) << 28;
                    }
                }
            }
        }
        return optimizePositive ? result : ((result >>> 1) ^ -(result & 1));
    }
    readStringRef() {
        let index = this.readInt(true);
        return index == 0 ? null : this.strings[index - 1];
    }
    readString() {
        let byteCount = this.readInt(true);
        switch (byteCount) {
            case 0:
                return null;
            case 1:
                return "";
        }
        byteCount--;
        let chars = "";
        for (let i = 0; i < byteCount;) {
            let b = this.readUnsignedByte();
            switch (b >> 4) {
                case 12:
                case 13:
                    chars += String.fromCharCode(((b & 0x1F) << 6 | this.readByte() & 0x3F));
                    i += 2;
                    break;
                case 14:
                    chars += String.fromCharCode(((b & 0x0F) << 12 | (this.readByte() & 0x3F) << 6 | this.readByte() & 0x3F));
                    i += 3;
                    break;
                default:
                    chars += String.fromCharCode(b);
                    i++;
            }
        }
        return chars;
    }
    readFloat() {
        let value = this.buffer.getFloat32(this.index);
        this.index += 4;
        return value;
    }
    readBoolean() {
        return this.readByte() != 0;
    }
}
class LinkedMesh {
    parent;
    skinIndex;
    slotIndex;
    mesh;
    inheritTimeline;
    constructor(mesh, skinIndex, slotIndex, parent, inheritDeform) {
        this.mesh = mesh;
        this.skinIndex = skinIndex;
        this.slotIndex = slotIndex;
        this.parent = parent;
        this.inheritTimeline = inheritDeform;
    }
}
class Vertices {
    bones;
    vertices;
    length;
    constructor(bones = null, vertices = null, length = 0) {
        this.bones = bones;
        this.vertices = vertices;
        this.length = length;
    }
}
var AttachmentType;
(function (AttachmentType) {
    AttachmentType[AttachmentType["Region"] = 0] = "Region";
    AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
    AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
    AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
    AttachmentType[AttachmentType["Path"] = 4] = "Path";
    AttachmentType[AttachmentType["Point"] = 5] = "Point";
    AttachmentType[AttachmentType["Clipping"] = 6] = "Clipping";
})(AttachmentType || (AttachmentType = {}));
function readTimeline1(input, timeline, scale) {
    let time = input.readFloat(), value = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
        timeline.setFrame(frame, time, value);
        if (frame == frameLast)
            break;
        let time2 = input.readFloat(), value2 = input.readFloat() * scale;
        switch (input.readByte()) {
            case CURVE_STEPPED:
                timeline.setStepped(frame);
                break;
            case CURVE_BEZIER:
                setBezier(input, timeline, bezier++, frame, 0, time, time2, value, value2, scale);
        }
        time = time2;
        value = value2;
    }
    return timeline;
}
function readTimeline2(input, timeline, scale) {
    let time = input.readFloat(), value1 = input.readFloat() * scale, value2 = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1;; frame++) {
        timeline.setFrame(frame, time, value1, value2);
        if (frame == frameLast)
            break;
        let time2 = input.readFloat(), nvalue1 = input.readFloat() * scale, nvalue2 = input.readFloat() * scale;
        switch (input.readByte()) {
            case CURVE_STEPPED:
                timeline.setStepped(frame);
                break;
            case CURVE_BEZIER:
                setBezier(input, timeline, bezier++, frame, 0, time, time2, value1, nvalue1, scale);
                setBezier(input, timeline, bezier++, frame, 1, time, time2, value2, nvalue2, scale);
        }
        time = time2;
        value1 = nvalue1;
        value2 = nvalue2;
    }
    return timeline;
}
function setBezier(input, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
    timeline.setBezier(bezier, frame, value, time1, value1, input.readFloat(), input.readFloat() * scale, input.readFloat(), input.readFloat() * scale, time2, value2);
}
const BONE_ROTATE = 0;
const BONE_TRANSLATE = 1;
const BONE_TRANSLATEX = 2;
const BONE_TRANSLATEY = 3;
const BONE_SCALE = 4;
const BONE_SCALEX = 5;
const BONE_SCALEY = 6;
const BONE_SHEAR = 7;
const BONE_SHEARX = 8;
const BONE_SHEARY = 9;
const BONE_INHERIT = 10;
const SLOT_ATTACHMENT = 0;
const SLOT_RGBA = 1;
const SLOT_RGB = 2;
const SLOT_RGBA2 = 3;
const SLOT_RGB2 = 4;
const SLOT_ALPHA = 5;
const ATTACHMENT_DEFORM = 0;
const ATTACHMENT_SEQUENCE = 1;
const PATH_POSITION = 0;
const PATH_SPACING = 1;
const PATH_MIX = 2;
const PHYSICS_INERTIA = 0;
const PHYSICS_STRENGTH = 1;
const PHYSICS_DAMPING = 2;
const PHYSICS_MASS = 4;
const PHYSICS_WIND = 5;
const PHYSICS_GRAVITY = 6;
const PHYSICS_MIX = 7;
const PHYSICS_RESET = 8;
const CURVE_STEPPED = 1;
const CURVE_BEZIER = 2;

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
(() => {
    if (typeof Math.fround === "undefined") {
        Math.fround = (function (array) {
            return function (x) {
                return array[0] = x, array[0];
            };
        })(new Float32Array(1));
    }
})();

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class CanvasTexture extends Texture {
    constructor(image) {
        super(image);
    }
    setFilters(minFilter, magFilter) { }
    setWraps(uWrap, vWrap) { }
    dispose() { }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
class AssetManager extends AssetManagerBase {
    constructor(pathPrefix = "", downloader = new Downloader()) {
        super((image) => { return new CanvasTexture(image); }, pathPrefix, downloader);
    }
}

/******************************************************************************
 * Spine Runtimes License Agreement
 * Last updated July 28, 2023. Replaces all prior versions.
 *
 * Copyright (c) 2013-2023, Esoteric Software LLC
 *
 * Integration of the Spine Runtimes into software or otherwise creating
 * derivative works of the Spine Runtimes is permitted under the terms and
 * conditions of Section 2 of the Spine Editor License Agreement:
 * http://esotericsoftware.com/spine-editor-license
 *
 * Otherwise, it is permitted to integrate the Spine Runtimes into software or
 * otherwise create derivative works of the Spine Runtimes (collectively,
 * "Products"), provided that each user of the Products must obtain their own
 * Spine Editor license and redistribution of the Products in any form must
 * include this license and copyright notice.
 *
 * THE SPINE RUNTIMES ARE PROVIDED BY ESOTERIC SOFTWARE LLC "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL ESOTERIC SOFTWARE LLC BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,
 * BUSINESS INTERRUPTION, OR LOSS OF USE, DATA, OR PROFITS) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THE
 * SPINE RUNTIMES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *****************************************************************************/
const worldVertices = Utils.newFloatArray(8);
class SkeletonRenderer {
    static QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
    static VERTEX_SIZE = 2 + 2 + 4;
    ctx;
    triangleRendering = false;
    debugRendering = false;
    vertices = Utils.newFloatArray(8 * 1024);
    tempColor = new Color();
    constructor(context) {
        this.ctx = context;
    }
    draw(skeleton) {
        if (this.triangleRendering)
            this.drawTriangles(skeleton);
        else
            this.drawImages(skeleton);
    }
    drawImages(skeleton) {
        let ctx = this.ctx;
        let color = this.tempColor;
        let skeletonColor = skeleton.color;
        let drawOrder = skeleton.drawOrder;
        if (this.debugRendering)
            ctx.strokeStyle = "green";
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            let slot = drawOrder[i];
            let bone = slot.bone;
            if (!bone.active)
                continue;
            let attachment = slot.getAttachment();
            if (!(attachment instanceof RegionAttachment))
                continue;
            attachment.computeWorldVertices(slot, worldVertices, 0, 2);
            let region = attachment.region;
            let image = region.texture.getImage();
            let slotColor = slot.color;
            let regionColor = attachment.color;
            color.set(skeletonColor.r * slotColor.r * regionColor.r, skeletonColor.g * slotColor.g * regionColor.g, skeletonColor.b * slotColor.b * regionColor.b, skeletonColor.a * slotColor.a * regionColor.a);
            ctx.save();
            ctx.transform(bone.a, bone.c, bone.b, bone.d, bone.worldX, bone.worldY);
            ctx.translate(attachment.offset[0], attachment.offset[1]);
            ctx.rotate(attachment.rotation * Math.PI / 180);
            let atlasScale = attachment.width / region.originalWidth;
            ctx.scale(atlasScale * attachment.scaleX, atlasScale * attachment.scaleY);
            let w = region.width, h = region.height;
            ctx.translate(w / 2, h / 2);
            if (attachment.region.degrees == 90) {
                let t = w;
                w = h;
                h = t;
                ctx.rotate(-Math.PI / 2);
            }
            ctx.scale(1, -1);
            ctx.translate(-w / 2, -h / 2);
            ctx.globalAlpha = color.a;
            ctx.drawImage(image, image.width * region.u, image.height * region.v, w, h, 0, 0, w, h);
            if (this.debugRendering)
                ctx.strokeRect(0, 0, w, h);
            ctx.restore();
        }
    }
    drawTriangles(skeleton) {
        let ctx = this.ctx;
        let color = this.tempColor;
        let skeletonColor = skeleton.color;
        let drawOrder = skeleton.drawOrder;
        let blendMode = null;
        let vertices = this.vertices;
        let triangles = null;
        for (let i = 0, n = drawOrder.length; i < n; i++) {
            let slot = drawOrder[i];
            let attachment = slot.getAttachment();
            let texture;
            if (attachment instanceof RegionAttachment) {
                let regionAttachment = attachment;
                vertices = this.computeRegionVertices(slot, regionAttachment, false);
                triangles = SkeletonRenderer.QUAD_TRIANGLES;
                texture = regionAttachment.region.texture.getImage();
            }
            else if (attachment instanceof MeshAttachment) {
                let mesh = attachment;
                vertices = this.computeMeshVertices(slot, mesh, false);
                triangles = mesh.triangles;
                texture = mesh.region.texture.getImage();
            }
            else
                continue;
            if (texture) {
                if (slot.data.blendMode != blendMode)
                    blendMode = slot.data.blendMode;
                let slotColor = slot.color;
                let attachmentColor = attachment.color;
                color.set(skeletonColor.r * slotColor.r * attachmentColor.r, skeletonColor.g * slotColor.g * attachmentColor.g, skeletonColor.b * slotColor.b * attachmentColor.b, skeletonColor.a * slotColor.a * attachmentColor.a);
                ctx.globalAlpha = color.a;
                for (var j = 0; j < triangles.length; j += 3) {
                    let t1 = triangles[j] * 8, t2 = triangles[j + 1] * 8, t3 = triangles[j + 2] * 8;
                    let x0 = vertices[t1], y0 = vertices[t1 + 1], u0 = vertices[t1 + 6], v0 = vertices[t1 + 7];
                    let x1 = vertices[t2], y1 = vertices[t2 + 1], u1 = vertices[t2 + 6], v1 = vertices[t2 + 7];
                    let x2 = vertices[t3], y2 = vertices[t3 + 1], u2 = vertices[t3 + 6], v2 = vertices[t3 + 7];
                    this.drawTriangle(texture, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2);
                    if (this.debugRendering) {
                        ctx.strokeStyle = "green";
                        ctx.beginPath();
                        ctx.moveTo(x0, y0);
                        ctx.lineTo(x1, y1);
                        ctx.lineTo(x2, y2);
                        ctx.lineTo(x0, y0);
                        ctx.stroke();
                    }
                }
            }
        }
        this.ctx.globalAlpha = 1;
    }
    // Adapted from http://extremelysatisfactorytotalitarianism.com/blog/?p=2120
    // Apache 2 licensed
    drawTriangle(img, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2) {
        let ctx = this.ctx;
        const width = img.width - 1;
        const height = img.height - 1;
        u0 *= width;
        v0 *= height;
        u1 *= width;
        v1 *= height;
        u2 *= width;
        v2 *= height;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        x1 -= x0;
        y1 -= y0;
        x2 -= x0;
        y2 -= y0;
        u1 -= u0;
        v1 -= v0;
        u2 -= u0;
        v2 -= v0;
        let det = u1 * v2 - u2 * v1;
        if (det == 0)
            return;
        det = 1 / det;
        // linear transformation
        const a = (v2 * x1 - v1 * x2) * det;
        const b = (v2 * y1 - v1 * y2) * det;
        const c = (u1 * x2 - u2 * x1) * det;
        const d = (u1 * y2 - u2 * y1) * det;
        // translation
        const e = x0 - a * u0 - c * v0;
        const f = y0 - b * u0 - d * v0;
        ctx.save();
        ctx.transform(a, b, c, d, e, f);
        ctx.clip();
        ctx.drawImage(img, 0, 0);
        ctx.restore();
    }
    computeRegionVertices(slot, region, pma) {
        let skeletonColor = slot.bone.skeleton.color;
        let slotColor = slot.color;
        let regionColor = region.color;
        let alpha = skeletonColor.a * slotColor.a * regionColor.a;
        let multiplier = pma ? alpha : 1;
        let color = this.tempColor;
        color.set(skeletonColor.r * slotColor.r * regionColor.r * multiplier, skeletonColor.g * slotColor.g * regionColor.g * multiplier, skeletonColor.b * slotColor.b * regionColor.b * multiplier, alpha);
        region.computeWorldVertices(slot, this.vertices, 0, SkeletonRenderer.VERTEX_SIZE);
        let vertices = this.vertices;
        let uvs = region.uvs;
        vertices[RegionAttachment.C1R] = color.r;
        vertices[RegionAttachment.C1G] = color.g;
        vertices[RegionAttachment.C1B] = color.b;
        vertices[RegionAttachment.C1A] = color.a;
        vertices[RegionAttachment.U1] = uvs[0];
        vertices[RegionAttachment.V1] = uvs[1];
        vertices[RegionAttachment.C2R] = color.r;
        vertices[RegionAttachment.C2G] = color.g;
        vertices[RegionAttachment.C2B] = color.b;
        vertices[RegionAttachment.C2A] = color.a;
        vertices[RegionAttachment.U2] = uvs[2];
        vertices[RegionAttachment.V2] = uvs[3];
        vertices[RegionAttachment.C3R] = color.r;
        vertices[RegionAttachment.C3G] = color.g;
        vertices[RegionAttachment.C3B] = color.b;
        vertices[RegionAttachment.C3A] = color.a;
        vertices[RegionAttachment.U3] = uvs[4];
        vertices[RegionAttachment.V3] = uvs[5];
        vertices[RegionAttachment.C4R] = color.r;
        vertices[RegionAttachment.C4G] = color.g;
        vertices[RegionAttachment.C4B] = color.b;
        vertices[RegionAttachment.C4A] = color.a;
        vertices[RegionAttachment.U4] = uvs[6];
        vertices[RegionAttachment.V4] = uvs[7];
        return vertices;
    }
    computeMeshVertices(slot, mesh, pma) {
        let skeletonColor = slot.bone.skeleton.color;
        let slotColor = slot.color;
        let regionColor = mesh.color;
        let alpha = skeletonColor.a * slotColor.a * regionColor.a;
        let multiplier = pma ? alpha : 1;
        let color = this.tempColor;
        color.set(skeletonColor.r * slotColor.r * regionColor.r * multiplier, skeletonColor.g * slotColor.g * regionColor.g * multiplier, skeletonColor.b * slotColor.b * regionColor.b * multiplier, alpha);
        let vertexCount = mesh.worldVerticesLength / 2;
        let vertices = this.vertices;
        if (vertices.length < mesh.worldVerticesLength)
            this.vertices = vertices = Utils.newFloatArray(mesh.worldVerticesLength);
        mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, SkeletonRenderer.VERTEX_SIZE);
        let uvs = mesh.uvs;
        for (let i = 0, u = 0, v = 2; i < vertexCount; i++) {
            vertices[v++] = color.r;
            vertices[v++] = color.g;
            vertices[v++] = color.b;
            vertices[v++] = color.a;
            vertices[v++] = uvs[u++];
            vertices[v++] = uvs[u++];
            v += 2;
        }
        return vertices;
    }
}

let Spine = class Spine extends UI {
    get __tag() {
        return 'Spine';
    }
    constructor(props) {
        super(props);
        this.initSpine = (canvas) => __awaiter$2(this, void 0, void 0, function* () {
            if (this.skeleton)
                return;
            const context = canvas.getContext('2d');
            this.skeletonRenderer = new SkeletonRenderer(context);
            this.skeletonRenderer.triangleRendering = true;
            this.skeleton = new Skeleton(this.skeletonData);
            this.skeleton.setToSetupPose();
            this.skeleton.updateWorldTransform(Physics.update);
            var animationStateData = new AnimationStateData(this.skeleton.data);
            animationStateData.defaultMix = 0.2;
            this.animationState = new AnimationState(animationStateData);
            const hasIdle = this.skeletonData.animations.find(item => item.name === 'idle');
            this.animationState.setAnimation(0, hasIdle ? 'idle' : this.skeletonData.animations[0].name, true);
            this.lastFrameTime = Date.now() / 1000;
            this.skeleton.x = this.skeletonData.x + this.skeletonData.width;
            this.skeleton.y = this.skeletonData.y + this.skeletonData.height;
            this.skeleton.scaleX = 1;
            this.skeleton.scaleY = -1;
        });
        this.__updateBoxBounds = () => {
            const box = this.__layout.boxBounds;
            if (this.skeleton) {
                const Rect = this.skeleton.getBoundsRect();
                box.x = Rect.x;
                box.y = Rect.y;
                box.width = Rect.width;
                box.height = Rect.height;
                this.forceUpdate('width');
            }
            else {
                box.x = 0;
                box.y = 0;
                box.width = this.skeletonData.width;
                box.height = this.skeletonData.height;
            }
        };
        this.__draw = (canvas) => {
            this.initSpine(canvas.view);
            this.render();
        };
        this.render = () => {
            var now = Date.now() / 1000;
            var delta = now - this.lastFrameTime;
            this.lastFrameTime = now;
            this.animationState.update(delta);
            this.animationState.apply(this.skeleton);
            this.skeleton.updateWorldTransform(Physics.update);
            this.skeletonRenderer.draw(this.skeleton);
            this.__updateBoxBounds();
        };
        this.skeletonData = props.skeletonData;
    }
};
Spine = __decorate$3([
    registerUI()
], Spine);
const loadAsset = (_a) => __awaiter$2(void 0, [_a], void 0, function* ({ baseUrl, skelName, atlasName, }) {
    const assetManager = new AssetManager(baseUrl);
    assetManager.loadBinary(skelName);
    assetManager.loadTextureAtlas(atlasName);
    yield assetManager.loadAll();
    let atlas = assetManager.require(atlasName);
    let atlasLoader = new AtlasAttachmentLoader(atlas);
    let skeletonBinary = new SkeletonBinary(atlasLoader);
    let skeletonData = skeletonBinary.readSkeletonData(assetManager.require(skelName));
    return skeletonData;
});

(() => __awaiter$2(void 0, void 0, void 0, function* () {
    const skeletonData = yield loadAsset({
        baseUrl: '/models/spineboy/',
        skelName: 'spineboy.skel',
        atlasName: 'spineboy.atlas',
    });
    console.log('Leafer', Leafer);
    const leafer = new Leafer({ view: window });
    const spine = new Spine({
        x: 200,
        y: 200,
        scale: 0.3,
        skeletonData: skeletonData,
    });
    const rect = new Rect({
        x: 200,
        y: 200,
        width: 400,
        height: 400,
        fill: '#32cd79',
        draggable: true,
    });
    leafer.add(rect);
    leafer.add(spine);
    const div = document.createElement('div');
    div.setAttribute('style', 'position:fixed;top:0;left:0;');
    skeletonData.animations.forEach(item => {
        const btn = document.createElement('button');
        btn.textContent = item.name;
        btn.onclick = () => {
            spine.animationState.setAnimation(0, item.name, true);
        };
        div.appendChild(btn);
    });
    document.body.appendChild(div);
}))();
