const paragraph = document.querySelector('p.proverb');

list = new Array(
    '我在客观上是幸福的，谁也无可非议。那么，我也应该有权蔑视幸福。——三岛由纪夫',
    '夜神不可能总是伴随我们，但我们能伪造黑夜。——埃德加·爱伦坡',
    '人活在必然性中，这并不是一个必然性。——伊壁鸠鲁'
);

let index = Math.floor(Math.random() * list.length);

paragraph.textContent = list[index];