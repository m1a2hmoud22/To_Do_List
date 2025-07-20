// انتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function () {

    // الحصول على العناصر الأساسية من الصفحة
    const taskForm = document.getElementById('form');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('tasks');

    // إضافة مستمع حدث للنموذج عند الإرسال
    taskForm.addEventListener('submit', function (event) {
        // منع السلوك الافتراضي للنموذج (الذي يعيد تحميل الصفحة)
        event.preventDefault();

        // الحصول على النص من حقل الإدخال وإزالة أي مسافات بيضاء زائدة
        const taskText = taskInput.value.trim();

        // التحقق من أن حقل الإدخال ليس فارغًا
        if (taskText !== '') {
            // إنشاء عنصر قائمة جديد
            const newTask = document.createElement('li');

            // تعيين محتوى عنصر القائمة الجديد إلى النص الذي تم إدخاله
            newTask.textContent = taskText;

            // إضافة العنصر الجديد إلى قائمة المهام
            taskList.appendChild(newTask);

            // مسح حقل الإدخال ليكون جاهزًا للمهمة التالية
            taskInput.value = '';
        }
    });
});








