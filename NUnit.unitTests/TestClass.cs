using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnit.unitTests
{
    [TestFixture]
    public class TestClass
    {
        [OneTimeSetUp]
        public void init()
        {

        }

        [OneTimeTearDown]
        public void Cleanup()
        {

        }

        [Test]
        public void TestMethod()
        {
            // TODO: Add your test code here
            Assert.Pass("Your first passing test");
        }
    }
}
